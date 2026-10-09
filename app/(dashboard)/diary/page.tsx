import React from 'react';
import { BookOpen, CheckCircle, Clock, Upload, FileText } from 'lucide-react';

export default function StudentDiaryPage() {
  const assignments = [
    { code: 'CS-304', title: 'Implement POSIX Thread Pool with Condition Variables', due: 'Friday, 11:59 PM', status: 'Submitted', grade: 'Pending Grading' },
    { code: 'CS-502', title: 'Design Normalized 3NF Database Schema for Hospital ERP', due: 'Nov 12, 05:00 PM', status: 'Active', grade: 'Due in 4 days' },
    { code: 'CS-501', title: 'Construct SLR(1) Grammar Parsing Table by Hand', due: 'Nov 15, 09:00 AM', status: 'Active', grade: 'Due in 7 days' },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Academic Diary &amp; Homework Portal
            </h1>
            <span className="font-virgil text-xs font-bold text-tertiary px-2.5 py-0.5 rounded-full bg-tertiary/10">
              Assignments &bull; Lab Submissions
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Submit coursework files, review mentor critique notes, and verify digital timestamps.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {assignments.map((a, i) => (
          <div key={i} className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">
                  {a.code}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  a.status === 'Submitted' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'
                }`}>
                  {a.status}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-on-surface">{a.title}</h3>
              <p className="text-xs text-on-surface-variant flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-outline" />
                <span>Deadline: {a.due} &bull; {a.grade}</span>
              </p>
            </div>

            <button type="button" className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold shadow-sm self-start md:self-auto flex items-center gap-1.5">
              <Upload className="w-3.5 h-3.5" />
              <span>{a.status === 'Submitted' ? 'Resubmit Assignment' : 'Upload Submission PDF'}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
