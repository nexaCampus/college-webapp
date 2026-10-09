'use client';

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Download, Sparkles } from 'lucide-react';

export default function TimetablePage() {
  const [selectedDay, setSelectedDay] = useState('Friday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const scheduleData: Record<string, any[]> = {
    Friday: [
      {
        time: '09:00 - 10:15 AM',
        code: 'CS-501',
        title: 'Compiler Design & Automata',
        hall: 'Hall C-201 (Main Wing)',
        professor: 'Prof. Dr. Banerjee',
        status: 'Completed',
      },
      {
        time: '10:30 - 11:45 AM',
        code: 'CS-502',
        title: 'Database System Engineering',
        hall: 'Hall B-104 (East Block)',
        professor: 'Prof. S. Sengupta',
        status: 'Completed',
      },
      {
        time: '11:45 - 12:30 PM',
        code: 'BREAK',
        title: 'Cafeteria & Lunch Break',
        hall: 'Central Dining Court',
        professor: 'Campus Amenities',
        status: 'Break',
      },
      {
        time: '12:30 - 02:30 PM',
        code: 'CS-504',
        title: 'AI & Machine Learning Laboratory',
        hall: 'Turing Lab 3 (Workstation 12)',
        professor: 'Prof. T. Ray',
        status: 'Active',
        virgilNote: 'Bring completed pre-lab assignment copy signed!',
      },
      {
        time: '02:45 - 04:00 PM',
        code: 'CS-503',
        title: 'Computer Networks Sockets Practical',
        hall: 'Lab 4 (Network Bay)',
        professor: 'Dr. R. Mukhopadhyay',
        status: 'Upcoming',
      },
    ],
  };

  const currentSlots = scheduleData[selectedDay] || scheduleData['Friday'];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Class Timetable &amp; Lecture Routine
            </h1>
            <span className="font-virgil text-xs font-bold text-tertiary px-2.5 py-0.5 rounded-full bg-tertiary/10">
              Odd Semester 2026
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Real-time collegiate routine &bull; Synchronized with departmental classroom schedules.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline/10 text-xs font-bold text-on-surface self-start sm:self-auto transition-all"
        >
          <Download className="w-3.5 h-3.5 text-primary" />
          <span>Export to iCal / Google Calendar</span>
        </button>
      </div>

      {/* Day Switcher Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {days.map((day) => (
          <button
            key={day}
            type="button"
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedDay === day
                ? 'bg-primary text-white shadow-md'
                : 'bg-surface-bright hover:bg-surface border border-outline/15 text-on-surface-variant'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Timeline List */}
      <div className="space-y-3.5">
        {currentSlots.map((slot, idx) => (
          <div
            key={idx}
            className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              slot.status === 'Active'
                ? 'bg-amber-500/10 border-amber-500/30 shadow-md ring-1 ring-amber-500/30'
                : slot.code === 'BREAK'
                ? 'bg-surface-container/50 border-outline/10 opacity-75'
                : 'bg-surface-bright border-outline/10 shadow-parchment touch-reactive'
            }`}
          >
            <div className="flex items-start sm:items-center gap-4">
              <div className="flex flex-col items-center justify-center min-w-[110px] p-2 rounded-xl bg-surface-container text-center">
                <Clock className="w-3.5 h-3.5 text-primary mb-1" />
                <span className="text-xs font-mono font-bold text-on-surface">{slot.time}</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-white">
                    {slot.code}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-on-surface">
                    {slot.title}
                  </h3>
                  {slot.status === 'Active' && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 animate-pulse">
                      Happening Now
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-xs text-on-surface-variant flex-wrap">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-outline" />
                    {slot.hall}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-outline" />
                    {slot.professor}
                  </span>
                </div>

                {slot.virgilNote && (
                  <p className="font-virgil text-xs text-tertiary pt-0.5 font-bold">
                    &ldquo;{slot.virgilNote}&rdquo;
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
