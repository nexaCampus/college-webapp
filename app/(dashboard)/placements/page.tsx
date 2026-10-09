import React from 'react';
import { TrendingUp, Building2, Briefcase, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PlacementsPage() {
  const drives = [
    { company: 'Google Cloud India', role: 'Software Engineer (Systems)', ctc: '₹32.5 LPA', deadline: 'Apply by Nov 15', eligible: 'CGPA > 8.5 (Eligible)' },
    { company: 'Microsoft IDC', role: 'Software Development Engineer I', ctc: '₹28.0 LPA', deadline: 'Apply by Nov 20', eligible: 'CGPA > 8.0 (Eligible)' },
    { company: 'Goldman Sachs', role: 'Quantitative Analyst / Tech', ctc: '₹26.0 LPA', deadline: 'Apply by Nov 25', eligible: 'CGPA > 8.0 (Eligible)' },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Collegiate Placement Cell &amp; Corporate Drives
            </h1>
            <span className="font-virgil text-xs font-bold text-emerald-700 px-2.5 py-0.5 rounded-full bg-emerald-50">
              Batch 2026 Season
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Central Training &amp; Placement Office &bull; 94.6% Past Year Placement Record.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {drives.map((drive, i) => (
          <div key={i} className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive space-y-3">
            <div className="flex items-start justify-between">
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                {drive.eligible}
              </span>
              <Building2 className="w-4 h-4 text-primary" />
            </div>

            <h3 className="text-base font-extrabold text-on-surface">{drive.company}</h3>
            <div className="space-y-1 text-xs text-on-surface-variant">
              <p>Position: <strong>{drive.role}</strong></p>
              <p>Compensation: <strong className="text-emerald-700 font-mono">{drive.ctc}</strong></p>
              <p>Application Deadline: <strong>{drive.deadline}</strong></p>
            </div>

            <button
              type="button"
              className="w-full py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>Submit Resume Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
