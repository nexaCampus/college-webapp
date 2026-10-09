import React from 'react';
import { BookOpen, Download, CheckCircle, FileText, Sparkles } from 'lucide-react';

export default function AcademicsPage() {
  const courses = [
    {
      code: 'CS-501',
      title: 'Compiler Design & Automata Theory',
      credits: 4.0,
      faculty: 'Prof. Dr. Banerjee',
      progress: 68,
      units: [
        'Lexical Analysis & DFA State Machines',
        'Top-Down & Bottom-Up LR Parsing',
        'Intermediate Representation & Three-Address Code',
        'Target Machine Code Generation & Register Allocation',
      ],
    },
    {
      code: 'CS-502',
      title: 'Database System Engineering',
      credits: 4.0,
      faculty: 'Prof. S. Sengupta',
      progress: 75,
      units: [
        'Relational Algebra & Normalization Forms',
        'B+ Trees & Disk Index Storage Structures',
        'ACID Concurrency, Two-Phase Locking & MVCC',
        'Distributed Sharding & Crash Recovery WAL',
      ],
    },
    {
      code: 'CS-503',
      title: 'Computer Networks & Distributed Protocols',
      credits: 3.0,
      faculty: 'Dr. R. Mukhopadhyay',
      progress: 54,
      units: [
        'OSI Physical & Data Link Frame Protocols',
        'IP Routing, Subnetting, BGP & OSPF Algorithms',
        'TCP Flow Control, Congestion Window & UDP Sockets',
        'TLS 1.3 Encryption Handshakes & HTTP/3 QUIC',
      ],
    },
    {
      code: 'CS-504',
      title: 'AI & Machine Learning Practical Lab',
      credits: 2.0,
      faculty: 'Prof. T. Ray',
      progress: 82,
      units: [
        'Supervised Regression & Decision Trees',
        'Backpropagation Neural Networks in PyTorch',
        'Convolutional Architectures for Vision',
        'Model Evaluation, F1 Metrics & Cross-Validation',
      ],
    },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Curriculum &amp; Academic Syllabus
            </h1>
            <span className="font-virgil text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">
              Semester 5 &bull; CS Honors
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            22 Enrolled Academic Credits &bull; UGC &amp; CISCE Prescribed Core Syllabi.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-light transition-all shadow-sm self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Complete Syllabus (PDF)</span>
        </button>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {courses.map((course) => (
          <div
            key={course.code}
            className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive space-y-3.5"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-xs font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10">
                  {course.code}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-on-surface mt-1.5">
                  {course.title}
                </h3>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Mentor: {course.faculty} &bull; {course.credits} Credits
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs font-black text-primary">{course.progress}%</span>
                <span className="text-[10px] text-outline block">Covered</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden border border-outline/10">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${course.progress}%` }}
              />
            </div>

            {/* Units Accordion Preview */}
            <div className="pt-2 border-t border-outline/10 space-y-1.5">
              <span className="text-[11px] font-bold text-outline uppercase tracking-wider block">
                Syllabus Modules:
              </span>
              {course.units.map((unit, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-on-surface">
                  <span className="w-4 h-4 rounded-full bg-surface-container flex items-center justify-center text-[10px] font-bold text-primary flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="truncate">{unit}</span>
                </div>
              ))}
            </div>

            {/* Virgil annotation */}
            <p className="font-virgil text-xs text-tertiary pt-1">
              &ldquo;Midterm exam cutoff: Units 1 and 2!&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
