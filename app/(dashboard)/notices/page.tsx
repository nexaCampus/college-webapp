import React from 'react';
import { FileText, Download, Calendar, Bell, AlertTriangle } from 'lucide-react';

export default function NoticesPage() {
  const circulars = [
    { title: 'Mandatory Online Midterm Examination Guidelines & Proctor Regulations', date: 'Oct 23, 2026', ref: 'EXAM/CIR/2026/104', urgent: true, desc: 'Detailed directions regarding camera readiness, full-screen lockdown, and unfair means penalties.' },
    { title: 'Schedule for Odd Semester Midterm Lab Practical Evaluations', date: 'Oct 20, 2026', ref: 'ACAD/CIR/2026/89', urgent: false, desc: 'Batch schedules for Computer Networks, Operating Systems, and AI & Machine Learning laboratories.' },
    { title: 'National Hackathon 2026: College Delegation Registrations Open', date: 'Oct 18, 2026', ref: 'CLUB/CIR/2026/34', urgent: false, desc: 'Selected teams will receive sponsored travel allowance and academic attendance duty leave.' },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              University Circulars &amp; Official Notices
            </h1>
            <span className="font-virgil text-xs font-bold text-tertiary px-2.5 py-0.5 rounded-full bg-tertiary/10">
              Registrar Office
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Statutory bulletins and official communications from College Administration.
          </p>
        </div>
      </div>

      <div className="space-y-3.5">
        {circulars.map((c, i) => (
          <div
            key={i}
            className={`p-5 rounded-2xl border transition-all space-y-2.5 ${
              c.urgent
                ? 'bg-rose-50/70 border-rose-200 shadow-sm'
                : 'bg-surface-bright border-outline/10 shadow-parchment touch-reactive'
            }`}
          >
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-surface-container text-on-surface">
                  {c.ref}
                </span>
                {c.urgent && (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-200 text-rose-900">
                    High Priority
                  </span>
                )}
              </div>
              <span className="text-xs text-on-surface-variant flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-outline" />
                {c.date}
              </span>
            </div>

            <h3 className="text-sm sm:text-base font-extrabold text-on-surface">
              {c.title}
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {c.desc}
            </p>

            <div className="pt-2 border-t border-outline/10 flex items-center justify-between">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official Gazette Signed Copy</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
