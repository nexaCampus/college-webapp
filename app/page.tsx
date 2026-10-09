import React from 'react';
import Link from 'next/link';
import {
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  BookOpen,
  Award,
  BookMarked,
  Layers,
  GraduationCap,
  FileText,
  Bus,
  Utensils,
  HelpCircle,
  TrendingUp,
} from 'lucide-react';
import MindmapVisualizer from '@/components/features/MindmapVisualizer';
import StudentTodoList from '@/components/features/StudentTodoList';
import AreaChart from '@/components/charts/AreaChart';

export default function HomePage() {
  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8">
      {/* 1. Emergency / Proctored Exam Alert Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary-container to-primary text-white p-5 sm:p-6 shadow-xl border border-primary-light/40 touch-reactive">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0 text-amber-300">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/30 text-rose-200 border border-rose-400/30 text-[10px] font-bold uppercase tracking-wider">
                  Mandatory Proctored Exam
                </span>
                <span className="font-virgil text-amber-300 text-xs font-bold">
                  Starts in 18h 42m &bull; Zero Tolerance Lockdown
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-extrabold tracking-tight mt-1 text-white">
                CS-304: Operating System Kernels &amp; Concurrency Midterm
              </h2>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed max-w-2xl">
                Online proctored MCQ evaluation. Split-screen, floating windows, or switching applications during the exam will <strong>immediately terminate your session</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:self-center">
            <Link
              href="/exams/CS-304"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-md active:scale-95"
            >
              <span>Launch Mock Test</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/exams"
              className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/20 transition-all"
            >
              Hall Rules
            </Link>
          </div>
        </div>

        {/* Ambient Sketched Background Watermark */}
        <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 transform translate-x-6 translate-y-6">
          <GraduationCap className="w-64 h-64 text-white" />
        </div>
      </div>

      {/* 2. Student Greeting & Quick Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
        {/* Metric 1 */}
        <div className="p-4 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">
              Cumulative CGPA
            </span>
            <Award className="w-4 h-4 text-tertiary" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-black text-primary tracking-tight">8.92</span>
            <span className="text-[11px] font-bold text-emerald-600 font-virgil">+0.4 this sem!</span>
          </div>
          <p className="text-[10px] text-outline mt-1">First Class with Distinction</p>
        </div>

        {/* Metric 2 */}
        <div className="p-4 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">
              Attendance
            </span>
            <Clock className="w-4 h-4 text-primary" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-black text-primary tracking-tight">86.4%</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
              Safe
            </span>
          </div>
          <p className="text-[10px] text-outline mt-1">UGC 75% Requirement Met</p>
        </div>

        {/* Metric 3 */}
        <div className="p-4 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">
              Enrolled Credits
            </span>
            <BookOpen className="w-4 h-4 text-secondary" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-black text-primary tracking-tight">22</span>
            <span className="text-[11px] text-on-surface-variant font-medium">/ 24 max</span>
          </div>
          <p className="text-[10px] text-outline mt-1">Semester 5 &bull; Computer Engg</p>
        </div>

        {/* Metric 4 */}
        <div className="p-4 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">
              Upcoming Exams
            </span>
            <ShieldAlert className="w-4 h-4 text-rose-500" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-black text-rose-600 tracking-tight">3</span>
            <span className="text-[11px] font-virgil text-rose-700 font-bold">Midterm sprints</span>
          </div>
          <p className="text-[10px] text-outline mt-1">Lockdown proctoring active</p>
        </div>
      </div>

      {/* 3. Core Split: Interactive Mindmap & Tangible To-Do Scratchpad */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive Study Milestone Mindmap */}
        <div className="lg:col-span-7 space-y-6">
          <MindmapVisualizer />
          <AreaChart />
        </div>

        {/* Right Column: Tangible To-Do Scratchpad & Quick Launchpad */}
        <div className="lg:col-span-5 space-y-6">
          <StudentTodoList />

          {/* Quick Schedule Today Card */}
          <div className="w-full bg-surface-bright rounded-2xl border border-outline/10 p-5 shadow-parchment touch-reactive">
            <div className="flex items-center justify-between pb-3 border-b border-outline/10">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <h4 className="text-sm font-bold text-on-surface">Today&apos;s Lecture Routine</h4>
              </div>
              <Link href="/timetable" className="text-xs text-primary font-bold hover:underline">
                View Full
              </Link>
            </div>

            <div className="mt-3.5 space-y-2.5">
              <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-primary">09:00 - 10:15</span>
                  <div>
                    <p className="text-xs font-extrabold text-on-surface">CS-501: Compiler Engineering</p>
                    <p className="text-[11px] text-on-surface-variant">Prof. Dr. Banerjee &bull; Hall C-201</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9.5px] font-bold">
                  Completed
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-tertiary">11:30 - 13:00</span>
                  <div>
                    <p className="text-xs font-extrabold text-on-surface">CS-504: AI Systems Laboratory</p>
                    <p className="text-[11px] text-on-surface-variant">Turing Lab 3 &bull; Workstation 12</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[9.5px] font-bold animate-pulse">
                  Happening Now
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-outline/10 text-center">
              <p className="font-virgil text-xs text-on-surface-variant">
                &ldquo;Remember to bring lab journal signed before 1:00 PM!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Complete Collegiate Navigation Grid (Covering 20 Core Modules) */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-on-surface tracking-tight">
              Collegiate Academic &amp; Campus Services
            </h3>
            <p className="text-xs text-on-surface-variant">
              Quick access across all 20 institutional modules designed for mobile &amp; laptop screens.
            </p>
          </div>
          <span className="font-virgil text-xs font-bold text-tertiary hidden sm:inline">
            Unified Student Hub
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <Link
            href="/academics"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-bright hover:bg-surface border border-outline/10 text-center shadow-parchment touch-reactive"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface">Academics</span>
            <span className="text-[10px] text-outline mt-0.5">Syllabus &amp; Units</span>
          </Link>

          <Link
            href="/timetable"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-bright hover:bg-surface border border-outline/10 text-center shadow-parchment touch-reactive"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface">Timetable</span>
            <span className="text-[10px] text-outline mt-0.5">Class Routine</span>
          </Link>

          <Link
            href="/exams"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-bright hover:bg-surface border border-outline/10 text-center shadow-parchment touch-reactive ring-1 ring-tertiary/30"
          >
            <div className="w-10 h-10 rounded-xl bg-tertiary/15 text-tertiary flex items-center justify-center mb-2">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface">Exams &amp; Proctor</span>
            <span className="text-[10px] text-tertiary font-semibold mt-0.5">MCQ Engine</span>
          </Link>

          <Link
            href="/results"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-bright hover:bg-surface border border-outline/10 text-center shadow-parchment touch-reactive"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center mb-2">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface">Results</span>
            <span className="text-[10px] text-outline mt-0.5">SGPA &amp; CGPA</span>
          </Link>

          <Link
            href="/attendance"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-bright hover:bg-surface border border-outline/10 text-center shadow-parchment touch-reactive"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-700 flex items-center justify-center mb-2">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface">Attendance</span>
            <span className="text-[10px] text-outline mt-0.5">86.4% Recorded</span>
          </Link>

          <Link
            href="/library"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-bright hover:bg-surface border border-outline/10 text-center shadow-parchment touch-reactive"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-2">
              <BookMarked className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface">Library</span>
            <span className="text-[10px] text-outline mt-0.5">Digital Books</span>
          </Link>

          <Link
            href="/labs"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-bright hover:bg-surface border border-outline/10 text-center shadow-parchment touch-reactive"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface">Laboratories</span>
            <span className="text-[10px] text-outline mt-0.5">Cloud Gear</span>
          </Link>

          <Link
            href="/placements"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-bright hover:bg-surface border border-outline/10 text-center shadow-parchment touch-reactive"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-700 flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface">Placements</span>
            <span className="text-[10px] text-outline mt-0.5">Career Cell</span>
          </Link>

          <Link
            href="/notices"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-bright hover:bg-surface border border-outline/10 text-center shadow-parchment touch-reactive"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-700 flex items-center justify-center mb-2">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface">Notices</span>
            <span className="text-[10px] text-outline mt-0.5">Circulars</span>
          </Link>

          <Link
            href="/canteen"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-bright hover:bg-surface border border-outline/10 text-center shadow-parchment touch-reactive"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-700 flex items-center justify-center mb-2">
              <Utensils className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface">Canteen</span>
            <span className="text-[10px] text-outline mt-0.5">Meal Tokens</span>
          </Link>

          <Link
            href="/bus"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-bright hover:bg-surface border border-outline/10 text-center shadow-parchment touch-reactive"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-700 flex items-center justify-center mb-2">
              <Bus className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface">Transit Bus</span>
            <span className="text-[10px] text-outline mt-0.5">Live Shuttle</span>
          </Link>

          <Link
            href="/helpdesk"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-surface-bright hover:bg-surface border border-outline/10 text-center shadow-parchment touch-reactive"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-700 flex items-center justify-center mb-2">
              <HelpCircle className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface">Helpdesk</span>
            <span className="text-[10px] text-outline mt-0.5">Proctor Appeals</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
