'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Clock, AlertCircle, BookOpen } from 'lucide-react';

interface MindmapNode {
  id: string;
  code: string;
  title: string;
  date: string;
  progress: number;
  status: 'Ready' | 'Reviewing' | 'Drafting' | 'Pending';
  color: string;
  note: string;
  x: number;
  y: number;
}

const NODES: MindmapNode[] = [
  {
    id: 'cs304',
    code: 'CS-304',
    title: 'Operating System Kernels',
    date: 'Midterm: Nov 14',
    progress: 85,
    status: 'Ready',
    color: '#1e3a8a',
    note: 'Thread synchronization & memory paging thoroughly reviewed!',
    x: 20,
    y: 25,
  },
  {
    id: 'math220',
    code: 'MATH-220',
    title: 'Discrete Graph Proofs',
    date: 'Exam: Nov 18',
    progress: 60,
    status: 'Reviewing',
    color: '#d97706',
    note: 'Re-do Dijkstra algorithm steps & induction proofs before Friday.',
    x: 80,
    y: 20,
  },
  {
    id: 'eng201',
    code: 'ENG-201',
    title: 'Distributed Architecture Essay',
    date: 'Submission: Nov 21',
    progress: 40,
    status: 'Drafting',
    color: '#059669',
    note: 'Draft Section 3: Microservice fault-tolerance benchmarks.',
    x: 25,
    y: 75,
  },
  {
    id: 'phys102',
    code: 'CS-504',
    title: 'AI & Neural Networks Lab',
    date: 'Lab Practical: Nov 25',
    progress: 70,
    status: 'Ready',
    color: '#4059aa',
    note: 'Verify backpropagation gradient checks on PyTorch script.',
    x: 75,
    y: 80,
  },
];

export default function MindmapVisualizer() {
  const [selectedNode, setSelectedNode] = useState<MindmapNode>(NODES[0]);
  const [filter, setFilter] = useState<'all' | 'exams' | 'labs'>('all');

  const filteredNodes = NODES.filter((n) => {
    if (filter === 'exams') return n.status === 'Ready' || n.status === 'Reviewing';
    if (filter === 'labs') return n.code.includes('504');
    return true;
  });

  return (
    <div className="w-full bg-surface-bright rounded-2xl border border-outline/10 p-4 sm:p-6 shadow-parchment touch-reactive">
      {/* Mindmap Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-on-surface tracking-tight">
              Study Milestone Mindmap
            </h3>
            <span className="font-virgil text-xs text-tertiary font-bold px-2 py-0.5 rounded-full bg-tertiary/10">
              Interactive Canvas
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Tap interconnected nodes to inspect course milestones, prep readiness, and syllabus notes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-surface-container p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-primary text-white shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setFilter('exams')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              filter === 'exams'
                ? 'bg-primary text-white shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Exams
          </button>
          <button
            type="button"
            onClick={() => setFilter('labs')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              filter === 'labs'
                ? 'bg-primary text-white shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Labs
          </button>
        </div>
      </div>

      {/* Visual Canvas Area */}
      <div className="relative w-full h-64 sm:h-72 mt-4 bg-surface rounded-xl border border-outline/10 overflow-hidden flex items-center justify-center">
        {/* Ambient Graph Background Grid */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #75777e 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Central Hub Node */}
        <div className="relative z-10 flex flex-col items-center justify-center p-3 rounded-full bg-primary text-white shadow-md border-2 border-primary-light">
          <Sparkles className="w-5 h-5 text-amber-300 animate-pulse mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Fall Exam Sprints</span>
          <span className="text-[9px] text-slate-300">Term 2026</span>
        </div>

        {/* Connecting SVG Curves */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="50%" x2="25%" y2="28%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="28%" y2="72%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="72%" y2="75%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        {/* Satellite Nodes */}
        {filteredNodes.map((node) => {
          const isSelected = selectedNode.id === node.id;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelectedNode(node)}
              className={`absolute z-20 flex flex-col items-center p-2 rounded-xl border transition-all transform hover:scale-110 active:scale-95 ${
                isSelected
                  ? 'bg-primary text-white border-primary shadow-lg ring-2 ring-tertiary'
                  : 'bg-surface-bright text-on-surface border-outline/20 shadow-sm hover:border-primary/40'
              }`}
              style={{
                top: `${node.y}%`,
                left: `${node.x}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className={`text-[11px] font-extrabold ${isSelected ? 'text-amber-300' : 'text-primary'}`}>
                {node.code}
              </span>
              <span className="text-[9px] font-semibold opacity-90 truncate max-w-[80px]">
                {node.status} ({node.progress}%)
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Node Details Card with Virgil marginalia */}
      <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-surface-container border border-outline/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-surface-bright text-primary border border-outline/10 shadow-xs">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-primary px-2 py-0.5 rounded-md bg-primary/10">
                {selectedNode.code}
              </span>
              <span className="text-sm font-extrabold text-on-surface">
                {selectedNode.title}
              </span>
              <span className="text-[11px] text-tertiary font-semibold">
                &bull; {selectedNode.date}
              </span>
            </div>
            {/* Virgil font annotation */}
            <p className="font-virgil text-xs text-on-surface-variant mt-1 italic">
              &ldquo;{selectedNode.note}&rdquo;
            </p>
          </div>
        </div>

        {/* Progress meter */}
        <div className="flex items-center gap-3 sm:self-center min-w-[130px]">
          <div className="w-full bg-surface-bright rounded-full h-2.5 overflow-hidden border border-outline/10">
            <div
              className="bg-primary h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${selectedNode.progress}%` }}
            />
          </div>
          <span className="text-xs font-bold text-on-surface min-w-[32px] text-right">
            {selectedNode.progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
