'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ShieldAlert,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Flag,
  Send,
  AlertOctagon,
  Maximize2,
} from 'lucide-react';
import { useExamProctor } from '@/hooks/useExamProctor';
import ExamProctorHUD from '@/components/features/ExamProctorHUD';
import WatermarkOverlay from '@/components/features/WatermarkOverlay';

interface Question {
  id: number;
  questionText: string;
  codeSnippet?: string;
  options: { key: string; text: string }[];
}

const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 1,
    questionText: 'In Unix process scheduling, which system call is used to duplicate the calling process, creating an exact child process with a separate address space?',
    codeSnippet: `pid_t pid = fork();\nif (pid == 0) {\n    // Child execution context\n}`,
    options: [
      { key: 'A', text: 'execve()' },
      { key: 'B', text: 'fork()' },
      { key: 'C', text: 'pthread_create()' },
      { key: 'D', text: 'clone()' },
    ],
  },
  {
    id: 2,
    questionText: 'What critical concurrency condition occurs when multiple threads read and write shared data concurrently without synchronization, resulting in non-deterministic output?',
    options: [
      { key: 'A', text: 'Race Condition' },
      { key: 'B', text: 'Deadlock Starvation' },
      { key: 'C', text: 'Priority Inversion' },
      { key: 'D', text: 'Livelock Oscillation' },
    ],
  },
  {
    id: 3,
    questionText: 'In virtual memory systems, what hardware component translates virtual page addresses into physical frame addresses using associative cache lookup?',
    options: [
      { key: 'A', text: 'Memory Management Unit (MMU) & TLB' },
      { key: 'B', text: 'Instruction Fetch Pipeline' },
      { key: 'C', text: 'Direct Memory Access Controller (DMAC)' },
      { key: 'D', text: 'L2 Instruction Cache' },
    ],
  },
  {
    id: 4,
    questionText: 'Which page replacement algorithm suffers from Belady’s Anomaly, where increasing the number of page frames can unexpectedly increase page faults?',
    options: [
      { key: 'A', text: 'Least Recently Used (LRU)' },
      { key: 'B', text: 'First-In, First-Out (FIFO)' },
      { key: 'C', text: 'Optimal Page Replacement (OPT)' },
      { key: 'D', text: 'Clock Algorithm' },
    ],
  },
  {
    id: 5,
    questionText: 'In Peterson’s Solution for the critical section problem, how many processes are synchronized using shared turn and flag variables?',
    options: [
      { key: 'A', text: 'Exactly Two Processes' },
      { key: 'B', text: 'Arbitrary N Processes' },
      { key: 'C', text: 'Three Processes with Semaphore' },
      { key: 'D', text: 'Single Thread with Mutex' },
    ],
  },
];

export default function ActiveExamPage() {
  const params = useParams();
  const router = useRouter();
  const examId = (params?.id as string) || 'CS-304';

  const [hasStarted, setHasStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [timeRemaining, setTimeRemaining] = useState(3600); // 60 minutes

  // Active Anti-Cheating Proctor Hook
  const { isFullscreen, requestFullscreenLock, triggerTermination } = useExamProctor({
    examId,
    studentId: 'STU-2024-8842',
    rollNumber: '2024-CS-088',
    enabled: hasStarted,
  });

  // Timer countdown
  useEffect(() => {
    if (!hasStarted) return;
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          alert('Exam time expired. Submitting responses.');
          router.push('/results');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [hasStarted, router]);

  const handleStartExam = async () => {
    await requestFullscreenLock();
    setHasStarted(true);
  };

  const handleSelectOption = (optionKey: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIdx]: optionKey,
    });
  };

  const toggleFlag = () => {
    setFlaggedQuestions({
      ...flaggedQuestions,
      [currentIdx]: !flaggedQuestions[currentIdx],
    });
  };

  const currentQ = SAMPLE_QUESTIONS[currentIdx];

  if (!hasStarted) {
    return (
      <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full bg-surface-bright rounded-3xl border border-outline/10 shadow-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto shadow-md">
              <ShieldAlert className="w-7 h-7 text-amber-300 animate-pulse" />
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-on-surface">
              Enter Proctored Exam Hall: {examId}
            </h1>
            <p className="text-xs text-on-surface-variant font-medium">
              Read the lockdown guidelines carefully before initiating the examination.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container border border-outline/10 space-y-2.5 text-xs">
            <h3 className="font-bold text-on-surface">Security Invariants &amp; Termination Rules:</h3>
            <ul className="space-y-1.5 list-disc pl-4 text-on-surface-variant">
              <li>Your device will enter forced full-screen lockdown mode.</li>
              <li><strong>Split-Screen &amp; Floating Apps:</strong> Any window resize or multi-tasking split immediately terminates the exam.</li>
              <li><strong>App Switching:</strong> Tapping home, switching tabs, or answering calls triggers instant disqualification.</li>
              <li><strong>Screen Recording / Sharing:</strong> External capture or screen sharing is blocked and recorded in audit logs.</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handleStartExam}
              className="w-full py-3.5 px-4 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-black transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
            >
              <Maximize2 className="w-4 h-4 text-amber-300" />
              <span>I Understand &bull; Begin Examination in Fullscreen</span>
            </button>
            <button
              type="button"
              onClick={() => router.push('/exams')}
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-surface hover:bg-surface-container border border-outline/15 text-xs font-bold text-on-surface"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full flex flex-col bg-surface exam-lockdown">
      {/* Forensic Security Watermark Overlay */}
      <WatermarkOverlay rollNumber="2024-CS-088" studentId="STU-2024-8842" />

      {/* Proctor HUD Bar */}
      <ExamProctorHUD
        examTitle={`${examId}: Operating System Kernels Midterm`}
        timeRemaining={timeRemaining}
        questionNumber={currentIdx + 1}
        totalQuestions={SAMPLE_QUESTIONS.length}
      />

      {/* Main Examination Workspace */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left / Center Column: Question Display & Option Selection */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-surface-bright rounded-2xl border border-outline/10 p-5 sm:p-6 shadow-parchment space-y-4">
            {/* Question Header & Review Flag */}
            <div className="flex items-center justify-between pb-3 border-b border-outline/10">
              <span className="text-xs font-extrabold text-primary px-2.5 py-1 rounded-lg bg-primary/10">
                Question {currentIdx + 1} of {SAMPLE_QUESTIONS.length}
              </span>

              <button
                type="button"
                onClick={toggleFlag}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  flaggedQuestions[currentIdx]
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'text-outline hover:text-on-surface bg-surface-container'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span className="font-virgil">
                  {flaggedQuestions[currentIdx] ? 'Flagged for Review' : 'Mark for Review'}
                </span>
              </button>
            </div>

            {/* Question Text */}
            <h2 className="text-sm sm:text-base font-extrabold text-on-surface leading-snug">
              {currentQ.questionText}
            </h2>

            {/* Code Snippet Box (if present) */}
            {currentQ.codeSnippet && (
              <pre className="p-3.5 rounded-xl bg-slate-900 text-slate-100 text-xs font-mono overflow-x-auto border border-slate-700">
                <code>{currentQ.codeSnippet}</code>
              </pre>
            )}

            {/* Multiple Choice Options */}
            <div className="space-y-2.5 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = selectedAnswers[currentIdx] === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => handleSelectOption(opt.key)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'bg-primary text-white border-primary shadow-md ring-2 ring-primary/20'
                        : 'bg-surface hover:bg-surface-container-high border-outline/15 text-on-surface'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                          isSelected
                            ? 'bg-amber-400 text-slate-950'
                            : 'bg-surface-container text-on-surface-variant group-hover:bg-primary/10'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold">{opt.text}</span>
                    </div>

                    {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-300" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((prev) => prev - 1)}
              className="px-4 py-2.5 rounded-xl bg-surface-bright hover:bg-surface border border-outline/15 text-xs font-bold text-on-surface disabled:opacity-40 flex items-center gap-1.5 shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {currentIdx < SAMPLE_QUESTIONS.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIdx((prev) => prev + 1)}
                className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <span>Save &amp; Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  if (confirm('Are you sure you want to finish and submit the exam?')) {
                    router.push('/results');
                  }
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Final Exam</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Question Palette Grid & Security Sandbox */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-surface-bright rounded-2xl border border-outline/10 p-5 shadow-parchment space-y-4">
            <h3 className="text-xs font-bold text-on-surface uppercase tracking-wider">
              Question Palette
            </h3>

            <div className="grid grid-cols-5 gap-2">
              {SAMPLE_QUESTIONS.map((q, idx) => {
                const isAnswered = selectedAnswers[idx] !== undefined;
                const isFlagged = flaggedQuestions[idx];
                const isCurrent = currentIdx === idx;

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-9 rounded-xl text-xs font-mono font-bold transition-all ${
                      isCurrent
                        ? 'ring-2 ring-primary ring-offset-2 bg-primary text-white'
                        : isFlagged
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : isAnswered
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-[10px] text-on-surface-variant pt-2 border-t border-outline/10">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-100 border border-emerald-300"></span>
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-100 border border-amber-300"></span>
                <span>Flagged</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-surface-container"></span>
                <span>Unanswered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-primary text-white"></span>
                <span>Active Question</span>
              </div>
            </div>
          </div>

          {/* Test Termination Trigger (For User Demo Verification) */}
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-bold">
              <AlertOctagon className="w-4 h-4" />
              <span>Simulate Security Breach</span>
            </div>
            <p className="text-[11px] text-rose-600">
              Trigger instant disqualification as if a split-screen or app switch occurred:
            </p>
            <button
              type="button"
              onClick={() => triggerTermination('SPLIT_SCREEN')}
              className="w-full py-2 px-3 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px] transition-all"
            >
              Simulate Split-Screen Breach
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
