'use client';

import React from 'react';
import { ShieldAlert, Video, Clock, Eye, AlertTriangle } from 'lucide-react';
import { formatTimeRemaining } from '@/lib/utils';

interface ExamProctorHUDProps {
  examTitle: string;
  timeRemaining: number;
  questionNumber: number;
  totalQuestions: number;
  studentName?: string;
  rollNumber?: string;
}

export default function ExamProctorHUD({
  examTitle,
  timeRemaining,
  questionNumber,
  totalQuestions,
  studentName = 'Alex Chen',
  rollNumber = '2024-CS-088',
}: ExamProctorHUDProps) {
  const isTimeCritical = timeRemaining < 300; // Under 5 mins

  return (
    <div className="w-full bg-primary text-white border-b border-primary-light/30 shadow-lg px-4 py-2.5 sm:px-6 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Exam Title & Proctor Status */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-rose-600/20 border border-rose-500/40 flex items-center justify-center flex-shrink-0">
            <ShieldAlert className="w-5 h-5 text-rose-400 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-sm sm:text-base font-extrabold tracking-tight truncate max-w-[280px] sm:max-w-md">
                {examTitle}
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-[10px] font-bold uppercase tracking-wider">
                Lockdown Active
              </span>
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              Candidate: <span className="font-semibold text-white">{studentName}</span> ({rollNumber})
            </p>
          </div>
        </div>

        {/* Center / Right Telemetry: Countdown Timer, Question Index & AI Proctor Feed */}
        <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 flex-wrap">
          {/* Question Index */}
          <div className="px-3 py-1.5 rounded-xl bg-primary-light/40 border border-white/10 text-xs font-semibold">
            <span className="text-slate-300">Question: </span>
            <span className="text-amber-300 font-bold">{questionNumber}</span>
            <span className="text-slate-400">/{totalQuestions}</span>
          </div>

          {/* AI Proctor Cam Telemetry */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-white/10 text-xs">
            <div className="relative">
              <Video className="w-3.5 h-3.5 text-emerald-400" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            </div>
            <span className="text-[11px] text-emerald-300 font-semibold">Webcam Live</span>
          </div>

          {/* Real-time Countdown Timer */}
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-mono font-bold text-xs sm:text-sm shadow-sm transition-colors ${
              isTimeCritical
                ? 'bg-rose-900/80 border-rose-500 text-rose-200 animate-pulse'
                : 'bg-amber-950/40 border-amber-500/40 text-amber-300'
            }`}
          >
            <Clock className="w-4 h-4 text-amber-400" />
            <span>{formatTimeRemaining(timeRemaining)}</span>
          </div>
        </div>
      </div>

      {/* Mobile Security Warning Bar */}
      <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
        <div className="flex items-center gap-1.5">
          <AlertTriangle className="w-3 h-3 text-rose-400" />
          <span>Split-screen, floating apps, or tab switching = <strong>Instant Termination</strong></span>
        </div>
        <span className="font-virgil text-amber-300 text-[11px] hidden sm:inline">
          Violations: 0/1 permitted
        </span>
      </div>
    </div>
  );
}
