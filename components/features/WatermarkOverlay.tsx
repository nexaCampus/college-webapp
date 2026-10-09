'use client';

import React, { useEffect, useState } from 'react';

interface WatermarkOverlayProps {
  rollNumber: string;
  studentId: string;
}

export default function WatermarkOverlay({
  rollNumber,
  studentId,
}: WatermarkOverlayProps) {
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const updateTime = () => setTimestamp(new Date().toISOString().replace('T', ' ').slice(0, 19));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 select-none overflow-hidden opacity-12"
      aria-hidden="true"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 p-8 h-full w-full transform -rotate-12">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center text-[11px] font-mono font-bold text-slate-900 tracking-wider"
          >
            <span>{rollNumber || 'NC-2024-8842'}</span>
            <span>{studentId || 'ID: 781044'}</span>
            <span className="text-[9px]">{timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
