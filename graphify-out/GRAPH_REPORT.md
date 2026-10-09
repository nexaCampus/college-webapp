# Graph Report - college-webapp  (2026-10-09)

## Corpus Check
- Corpus is ~26,023 words - fits in a single context window. You may not need a graph.

## Summary
- 183 nodes · 175 edges · 37 communities (11 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Academic Domain 0
- Academic Domain 1
- Academic Domain 2
- Academic Domain 3
- Academic Domain 4
- Academic Domain 5
- Academic Domain 6
- Academic Domain 7
- Academic Domain 8
- Academic Domain 9
- Academic Domain 10
- Academic Domain 11
- Academic Domain 31
- Academic Domain 32

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `main()` - 6 edges
3. `scripts` - 5 edges
4. `include` - 5 edges
5. `useExamProctor()` - 4 edges
6. `lib` - 4 edges
7. `AreaChart()` - 3 edges
8. `ExamProctorHUD()` - 3 edges
9. `ExamViolationPayload` - 3 edges
10. `reportExamViolation()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `LoginPage()` --calls--> `setupRecaptcha()`  [EXTRACTED]
  app/(auth)/login/page.tsx → lib/firebase.ts
- `ActiveExamPage()` --calls--> `useExamProctor()`  [EXTRACTED]
  app/exams/[id]/page.tsx → hooks/useExamProctor.ts
- `ExamProctorHUD()` --calls--> `formatTimeRemaining()`  [EXTRACTED]
  components/features/ExamProctorHUD.tsx → lib/utils.ts
- `useExamProctor()` --calls--> `reportExamViolation()`  [EXTRACTED]
  hooks/useExamProctor.ts → lib/api.ts

## Import Cycles
- None detected.

## Communities (37 total, 3 thin omitted)

### Community 0 - "Academic Domain 0"
Cohesion: 0.11
Nodes (19): clsx, firebase, flowbite, lucide-react, dependencies, clsx, firebase, flowbite (+11 more)

### Community 1 - "Academic Domain 1"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 2 - "Academic Domain 2"
Cohesion: 0.16
Nodes (9): AreaChart(), AreaChartProps, DataPoint, MindmapNode, MindmapVisualizer(), NODES, INITIAL_TASKS, StudentTodoList() (+1 more)

### Community 3 - "Academic Domain 3"
Cohesion: 0.18
Nodes (9): ActiveExamPage(), Question, SAMPLE_QUESTIONS, WatermarkOverlay(), WatermarkOverlayProps, useExamProctor(), UseExamProctorOptions, ExamViolationPayload (+1 more)

### Community 4 - "Academic Domain 4"
Cohesion: 0.13
Nodes (15): autoprefixer, devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom (+7 more)

### Community 5 - "Academic Domain 5"
Cohesion: 0.20
Nodes (9): description, name, private, scripts, build, dev, lint, start (+1 more)

### Community 6 - "Academic Domain 6"
Cohesion: 0.28
Nodes (5): metadata, poppins, viewport, CrispNavbar(), InstitutionalFooter()

### Community 7 - "Academic Domain 7"
Cohesion: 0.39
Nodes (6): LoginPage(), app, auth, firebaseConfig, googleProvider, setupRecaptcha()

### Community 8 - "Academic Domain 8"
Cohesion: 0.25
Nodes (7): next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 9 - "Academic Domain 9"
Cohesion: 0.52
Nodes (6): generate_arch_map(), main(), scan_components(), scan_hooks(), scan_routes(), validate_proctor_security()

### Community 10 - "Academic Domain 10"
Cohesion: 0.47
Nodes (3): ExamProctorHUD(), ExamProctorHUDProps, formatTimeRemaining()

## Knowledge Gaps
- **64 isolated node(s):** `Question`, `SAMPLE_QUESTIONS`, `poppins`, `metadata`, `viewport` (+59 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 117 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Academic Domain 0` to `Academic Domain 5`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Academic Domain 4` to `Academic Domain 5`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Academic Domain 1` to `Academic Domain 8`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `Question`, `SAMPLE_QUESTIONS`, `poppins` to the rest of the system?**
  _64 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Academic Domain 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Academic Domain 1` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Academic Domain 4` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._