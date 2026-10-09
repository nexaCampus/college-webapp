import React from 'react';
import Link from 'next/link';
import {
  ShieldAlert,
  ArrowRight,
  CheckCircle,
  FileText,
  Clock,
  Calendar,
  AlertTriangle,
  Lock,
  Download,
} from 'lucide-react';

export default function ExamsOverviewPage() {
  const upcomingExams = [
    {
      id: 'CS-304',
      code: 'CS-304',
      title: 'Operating System Kernels & Concurrency Midterm',
      date: 'Tomorrow, 09:00 AM IST',
      duration: '60 Minutes',
      totalQuestions: 30,
      marks: 60,
      status: 'Mandatory Online',
      proctorMode: 'Strict Full-Screen Lockdown',
      activeNow: true,
    },
    {
      id: 'MATH-220',
      code: 'MATH-220',
      title: 'Discrete Structures & Graph Proofs',
      date: 'Nov 18, 10:30 AM IST',
      duration: '90 Minutes',
      totalQuestions: 45,
      marks: 90,
      status: 'Scheduled',
      proctorMode: 'Proctored MCQ',
      activeNow: false,
    },
    {
      id: 'ENG-201',
      code: 'ENG-201',
      title: 'Distributed Systems & Software Engineering',
      date: 'Nov 21, 02:00 PM IST',
      duration: '60 Minutes',
      totalQuestions: 30,
      marks: 60,
      status: 'Scheduled',
      proctorMode: 'Proctored MCQ',
      activeNow: false,
    },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Collegiate Examination Central
            </h1>
            <span className="font-virgil text-xs font-bold text-tertiary px-2 py-0.5 rounded-full bg-tertiary/10">
              Odd Semester 2026
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Administered by the Office of the Controller of Examinations &bull; Strict Anti-Cheating Protocol Enforced.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline/10 text-xs font-bold text-on-surface self-start sm:self-auto transition-all"
        >
          <Download className="w-3.5 h-3.5 text-primary" />
          <span>Download Hall Ticket (PDF)</span>
        </button>
      </div>

      {/* Proctor Security Guidelines Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-on-surface space-y-3">
        <div className="flex items-center gap-2.5">
          <AlertTriangle className="w-5 h-5 text-tertiary flex-shrink-0" />
          <h3 className="text-sm font-bold text-tertiary tracking-tight">
            Zero-Tolerance Online Examination Security Policy
          </h3>
        </div>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          Students taking MCQ examinations on mobile phones or laptops are subject to real-time proctor surveillance.
          The examination engine employs algorithmic tamper detection:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs font-medium">
          <div className="p-2.5 rounded-xl bg-surface-bright border border-outline/10 flex items-start gap-2">
            <Lock className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <span><strong>No App Switching:</strong> Leaving or minimizing the browser ends the exam.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-surface-bright border border-outline/10 flex items-start gap-2">
            <Lock className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <span><strong>No Split-Screen:</strong> Floating windows or split-screen triggers disqualification.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-surface-bright border border-outline/10 flex items-start gap-2">
            <Lock className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <span><strong>No Screen Capture:</strong> Screen recording or sharing is blocked and reported.</span>
          </div>
        </div>
      </div>

      {/* Examination Rosters */}
      <div className="space-y-4">
        <h2 className="text-base font-extrabold text-on-surface">Scheduled Examinations</h2>
        <div className="space-y-3.5">
          {upcomingExams.map((exam) => (
            <div
              key={exam.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                exam.activeNow
                  ? 'bg-surface-bright border-primary/30 shadow-md ring-1 ring-primary/20'
                  : 'bg-surface-bright/70 border-outline/10 shadow-xs'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">
                    {exam.code}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-tertiary border border-amber-500/20">
                    {exam.proctorMode}
                  </span>
                  {exam.activeNow && (
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 animate-pulse">
                      &bull; Ready to Launch
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-on-surface">
                  {exam.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-on-surface-variant flex-wrap">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-outline" />
                    {exam.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-outline" />
                    {exam.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-outline" />
                    {exam.totalQuestions} Questions ({exam.marks} Marks)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:self-center">
                {exam.activeNow ? (
                  <Link
                    href={`/exams/${exam.id}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white font-extrabold text-xs shadow-md transition-all active:scale-95"
                  >
                    <ShieldAlert className="w-4 h-4 text-amber-300" />
                    <span>Enter Exam Hall</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="text-xs font-semibold text-outline px-3 py-2 rounded-xl bg-surface-container">
                    Opens 15 mins prior
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
