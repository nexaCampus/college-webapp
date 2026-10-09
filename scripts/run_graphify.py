#!/usr/bin/env python3
"""
Graphify Pipeline Runner for NexaCampus College Webapp
Extracts code AST, constructs the knowledge graph, clusters communities, and updates reports.
"""

import json
from pathlib import Path
from graphify.detect import detect
from graphify.extract import collect_files, extract
from graphify.build import build_from_json
from graphify.cluster import cluster, score_all
from graphify.analyze import god_nodes, surprising_connections, suggest_questions
from graphify.report import generate
from graphify.export import to_json

def main():
    root = Path('.')
    out_dir = root / 'graphify-out'
    out_dir.mkdir(exist_ok=True)

    # 1. Detect
    print("[Graphify] Detecting files...")
    result = detect(root)
    (out_dir / '.graphify_detect.json').write_text(json.dumps(result, ensure_ascii=False), encoding='utf-8')
    print(f"[Graphify] Corpus: {result['total_files']} files, ~{result['total_words']} words")

    # 2. Collect code files
    code_files = []
    for f in result.get('files', {}).get('code', []):
        p = Path(f)
        if p.exists():
            code_files.extend(collect_files(p) if p.is_dir() else [p])

    print(f"[Graphify] Collected {len(code_files)} code files for extraction")
    if code_files:
        res = extract(code_files, cache_root=root, parallel=False)
        (out_dir / '.graphify_ast.json').write_text(json.dumps(res, indent=2, ensure_ascii=False), encoding='utf-8')
        print(f"[Graphify] AST: {len(res['nodes'])} nodes, {len(res['edges'])} edges")
    else:
        res = {'nodes': [], 'edges': [], 'input_tokens': 0, 'output_tokens': 0}
        (out_dir / '.graphify_ast.json').write_text(json.dumps(res), encoding='utf-8')

    (out_dir / '.graphify_semantic.json').write_text(
        json.dumps({'nodes': [], 'edges': [], 'hyperedges': [], 'input_tokens': 0, 'output_tokens': 0}),
        encoding='utf-8'
    )

    # 3. Merge
    ast = json.loads((out_dir / '.graphify_ast.json').read_text(encoding='utf-8'))
    merged_nodes = ast['nodes']
    merged_edges = ast['edges']
    merged = {
        'nodes': merged_nodes,
        'edges': merged_edges,
        'hyperedges': [],
        'input_tokens': 0,
        'output_tokens': 0,
    }
    (out_dir / '.graphify_extract.json').write_text(json.dumps(merged, indent=2, ensure_ascii=False), encoding='utf-8')

    # 4. Build graph & cluster
    print("[Graphify] Building knowledge graph and clustering...")
    G = build_from_json(merged, root=str(root), directed=False)
    if G.number_of_nodes() == 0:
        print("[Graphify] Error: graph is empty")
        return

    communities = cluster(G)
    cohesion = score_all(G, communities)
    tokens = {'input': 0, 'output': 0}
    gods = god_nodes(G)
    surprises = surprising_connections(G, communities)
    labels = {cid: f'Academic Domain {cid}' for cid in communities}
    questions = suggest_questions(G, communities, labels)

    to_json(G, communities, str(out_dir / 'graph.json'))
    report = generate(G, communities, cohesion, labels, gods, surprises, result, tokens, str(root), suggested_questions=questions)
    (out_dir / 'GRAPH_REPORT.md').write_text(report, encoding='utf-8')

    analysis = {
        'communities': {str(k): v for k, v in communities.items()},
        'cohesion': {str(k): v for k, v in cohesion.items()},
        'gods': gods,
        'surprises': surprises,
        'questions': questions,
    }
    (out_dir / '.graphify_analysis.json').write_text(json.dumps(analysis, indent=2, ensure_ascii=False), encoding='utf-8')
    print(f"[Graphify] Knowledge Graph Complete: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges, {len(communities)} communities")

if __name__ == '__main__':
    main()
