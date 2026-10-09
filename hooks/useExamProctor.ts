'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { reportExamViolation, ExamViolationPayload } from '@/lib/api';

interface UseExamProctorOptions {
  examId: string;
  studentId: string;
  rollNumber: string;
  enabled?: boolean;
}

export function useExamProctor({
  examId,
  studentId,
  rollNumber,
  enabled = true,
}: UseExamProctorOptions) {
  const router = useRouter();
  const [isTerminated, setIsTerminated] = useState(false);
  const [violationType, setViolationType] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const terminatedRef = useRef(false);

  // Trigger Instant Termination
  const triggerTermination = useCallback(
    async (type: ExamViolationPayload['violationType']) => {
      if (terminatedRef.current || !enabled) return;
      terminatedRef.current = true;
      setIsTerminated(true);
      setViolationType(type);

      const payload: ExamViolationPayload = {
        examId,
        studentId,
        rollNumber,
        violationType: type,
        timestamp: new Date().toISOString(),
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        screenAvailWidth: window.screen.availWidth,
        screenAvailHeight: window.screen.availHeight,
        userAgent: navigator.userAgent,
      };

      // Store in session storage for the termination page to display forensic proof
      try {
        sessionStorage.setItem('nexa_exam_breach', JSON.stringify(payload));
      } catch (e) {
        console.error(e);
      }

      // Dispatch to Go backend
      await reportExamViolation(payload);

      // Instant redirect to termination page
      router.replace('/exams/terminated');
    },
    [examId, studentId, rollNumber, enabled, router]
  );

  // Request Fullscreen on Exam Start
  const requestFullscreenLock = useCallback(async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      }
    } catch (err) {
      console.warn('Fullscreen request bypassed or permission restricted:', err);
    }
  }, []);

  useEffect(() => {
    if (!enabled || isTerminated) return;

    // 1. Page Visibility API — Detect Tab Switching or App Minimize
    const handleVisibilityChange = () => {
      if (document.hidden) {
        triggerTermination('APP_SWITCH');
      }
    };

    // 2. Window Blur API — Detect Floating App, Pop-up or Defocus
    const handleWindowBlur = () => {
      triggerTermination('WINDOW_BLUR');
    };

    // 3. Split-Screen & Window Resize Detector (Mobile & Desktop)
    const handleResize = () => {
      const availH = window.screen.availHeight;
      const innerH = window.innerHeight;
      // On mobile devices, split screen typically slices screen height to ~50%
      if (availH > 0 && innerH / availH < 0.65) {
        triggerTermination('SPLIT_SCREEN');
      }
    };

    // 4. Keyboard Shortcuts: Block F12, DevTools, PrintScreen
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'C' || e.key === 'c' || e.key === 'J' || e.key === 'j')) ||
        (e.ctrlKey && (e.key === 'u' || e.key === 'U')) ||
        e.key === 'PrintScreen'
      ) {
        e.preventDefault();
        e.stopPropagation();
        triggerTermination('KEY_VIOLATION');
      }
    };

    // 5. Context Menu & Copy/Cut Interception
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleClipboardEvent = (e: ClipboardEvent) => {
      e.preventDefault();
      triggerTermination('KEY_VIOLATION');
    };

    // 6. Fullscreen Change Listener
    const handleFullscreenChange = () => {
      const active = !!document.fullscreenElement;
      setIsFullscreen(active);
      if (!active) {
        // Fullscreen was exited during active exam
        triggerTermination('FULLSCREEN_EXIT');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('copy', handleClipboardEvent);
    window.addEventListener('cut', handleClipboardEvent);
    window.addEventListener('paste', handleClipboardEvent);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('copy', handleClipboardEvent);
      window.removeEventListener('cut', handleClipboardEvent);
      window.removeEventListener('paste', handleClipboardEvent);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [enabled, isTerminated, triggerTermination]);

  return {
    isTerminated,
    violationType,
    isFullscreen,
    requestFullscreenLock,
    triggerTermination,
  };
}
