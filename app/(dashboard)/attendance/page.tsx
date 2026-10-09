import React from 'react';
import { Clock, CheckCircle2, AlertTriangle, FileText, Send, Upload } from 'lucide-react';

export default function AttendancePage() {
  const attendanceRecords = [
    { code: 'CS-501', title: 'Compiler Design', attended: 28, total: 32, percentage: 87.5, status: 'Safe' },
    { code: 'CS-502', title: 'Database System Engg', attended: 24, total: 28, percentage: 85.7, status: 'Safe' },
    { code: 'CS-503', title: 'Computer Networks', attended: 19, total: 24, percentage: 79.2, status: 'Warning' },
    { code: 'CS-504', title: 'AI & Machine Learning Lab', attended: 14, total: 14, percentage: 100.0, status: 'Excellent' },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Monthly Attendance &amp; Leave Portal
            </h1>
            <span className="font-virgil text-xs font-bold text-emerald-700 px-2.5 py-0.5 rounded-full bg-emerald-50">
              86.4% Aggregate
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Mandatory 75% Minimum Criterion per UGC Statutory Guidelines.
          </p>
        </div>
      </div>

      {/* Aggregate Overview Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive space-y-3">
          <span className="text-xs font-bold text-outline uppercase tracking-wider">Overall Status</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-primary">86.4%</span>
            <span className="text-xs font-bold text-emerald-600">Eligible for Final Exams</span>
          </div>
          <p className="text-xs text-on-surface-variant">
            Total Classes: 98 &bull; Attended: 85 &bull; Absences: 13
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive space-y-3">
          <span className="text-xs font-bold text-outline uppercase tracking-wider">Leave Balances</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-primary">4 / 6</span>
            <span className="text-xs font-medium text-outline">OD / Medical Days Left</span>
          </div>
          <p className="text-xs text-on-surface-variant">
            Duty Leave applied for Inter-College Hackathon: Approved
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive space-y-3">
          <span className="text-xs font-bold text-outline uppercase tracking-wider">Statutory Notice</span>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Medical certificates must be submitted within 72 hours of resuming classes for attendance condonation.
          </p>
          <span className="font-virgil text-xs text-tertiary block font-bold">
            &ldquo;Dean&apos;s office condonation desk closes Nov 10.&rdquo;
          </span>
        </div>
      </div>

      {/* Course Breakdown Table */}
      <div className="bg-surface-bright rounded-2xl border border-outline/10 p-5 sm:p-6 shadow-parchment space-y-4">
        <h3 className="text-sm font-extrabold text-on-surface">Subject-Wise Attendance Breakdown</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-outline/10 text-outline uppercase font-bold text-[10px]">
                <th className="py-2.5 px-3">Subject Code &amp; Title</th>
                <th className="py-2.5 px-3">Attended</th>
                <th className="py-2.5 px-3">Total Held</th>
                <th className="py-2.5 px-3">Percentage</th>
                <th className="py-2.5 px-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline/10">
              {attendanceRecords.map((r) => (
                <tr key={r.code} className="hover:bg-surface-container/40 transition-colors">
                  <td className="py-3 px-3">
                    <span className="font-mono font-bold text-primary mr-2">{r.code}</span>
                    <span className="font-semibold text-on-surface">{r.title}</span>
                  </td>
                  <td className="py-3 px-3 font-mono font-bold text-on-surface">{r.attended}</td>
                  <td className="py-3 px-3 font-mono text-on-surface-variant">{r.total}</td>
                  <td className="py-3 px-3 font-bold text-primary">{r.percentage}%</td>
                  <td className="py-3 px-3 text-right">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        r.status === 'Excellent'
                          ? 'bg-emerald-100 text-emerald-800'
                          : r.status === 'Safe'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-900 animate-pulse'
                      }`}
                    >
                      {r.status}
                    </span>
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
