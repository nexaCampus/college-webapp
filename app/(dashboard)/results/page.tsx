import React from 'react';
import { Award, Download, CheckCircle, FileText, TrendingUp, Sparkles } from 'lucide-react';
import AreaChart from '@/components/charts/AreaChart';

export default function ResultsPage() {
  const semesterGrades = [
    { code: 'CS-501', title: 'Compiler Design', grade: 'A+', points: 10.0, credits: 4 },
    { code: 'CS-502', title: 'Database System Engineering', grade: 'A', points: 9.0, credits: 4 },
    { code: 'CS-503', title: 'Computer Networks', grade: 'A', points: 9.0, credits: 3 },
    { code: 'CS-504', title: 'AI & Machine Learning Practical', grade: 'O', points: 10.0, credits: 2 },
    { code: 'HS-501', title: 'Professional Engineering Ethics', grade: 'A+', points: 10.0, credits: 2 },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Grade Sheets &amp; Academic Transcripts
            </h1>
            <span className="font-virgil text-xs font-bold text-emerald-700 px-2.5 py-0.5 rounded-full bg-emerald-50">
              CGPA: 8.92 / 10.0
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Verified by Examination Control Board &bull; Lions Calcutta Greater Vidya Mandir &amp; College.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-light transition-all shadow-sm self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Digitally Signed Transcript (PDF)</span>
        </button>
      </div>

      {/* Analytics Chart & SGPA Metric Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8">
          <AreaChart title="Semester SGPA Progression" subtitle="Historical academic progression from Semester 1 to Semester 5" />
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive space-y-3">
            <span className="text-xs font-bold text-outline uppercase tracking-wider">Semester 5 Summary</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-primary">9.14</span>
              <span className="text-xs font-bold text-emerald-600 font-virgil">SGPA (Highest)</span>
            </div>
            <div className="text-xs text-on-surface-variant space-y-1">
              <p>Total Credits Earned: <strong>15 Credits</strong></p>
              <p>Class Standing: <strong>Top 5%</strong></p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container border border-outline/10 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 text-primary font-bold">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Digital Signature Authenticated</span>
            </div>
            <p className="text-on-surface-variant text-[11px] leading-relaxed">
              Cryptographically signed using SHA-256 by the Registrar &amp; Controller of Examinations.
            </p>
            <p className="font-virgil text-tertiary text-xs font-bold">
              &ldquo;Eligible for Dean&apos;s Honor List 2026!&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Grade Card Table */}
      <div className="bg-surface-bright rounded-2xl border border-outline/10 p-5 sm:p-6 shadow-parchment space-y-4">
        <h3 className="text-sm font-extrabold text-on-surface">Semester 5 Grade Card</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-outline/10 text-outline uppercase font-bold text-[10px]">
                <th className="py-2.5 px-3">Course Code</th>
                <th className="py-2.5 px-3">Course Title</th>
                <th className="py-2.5 px-3">Credits</th>
                <th className="py-2.5 px-3">Letter Grade</th>
                <th className="py-2.5 px-3 text-right">Grade Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline/10">
              {semesterGrades.map((g) => (
                <tr key={g.code} className="hover:bg-surface-container/40 transition-colors">
                  <td className="py-3 px-3 font-mono font-bold text-primary">{g.code}</td>
                  <td className="py-3 px-3 font-semibold text-on-surface">{g.title}</td>
                  <td className="py-3 px-3 font-mono">{g.credits}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-black font-mono">
                      {g.grade}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-mono font-bold text-right text-on-surface">
                    {g.points.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
