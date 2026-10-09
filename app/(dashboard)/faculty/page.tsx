import React from 'react';
import { User, Mail, MapPin, Clock, BookOpen } from 'lucide-react';

export default function FacultyPage() {
  const professors = [
    { name: 'Dr. Arindam Banerjee', role: 'Professor & Head of Department', dept: 'Computer Science & Engineering', room: 'Faculty Bay CS-101', email: 'a.banerjee@lcgvm.edu.in', hours: 'Mon & Wed: 14:00 - 16:00' },
    { name: 'Prof. Subhasish Sengupta', role: 'Associate Professor', dept: 'Database Systems & Cloud Systems', room: 'Room CS-204', email: 's.sengupta@lcgvm.edu.in', hours: 'Tue & Thu: 11:30 - 13:00' },
    { name: 'Dr. Rina Mukhopadhyay', role: 'Assistant Professor', dept: 'Computer Networks & Security', room: 'Room CS-208', email: 'r.mukhopadhyay@lcgvm.edu.in', hours: 'Fri: 15:00 - 17:00' },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Faculty &amp; Academic Advisors
            </h1>
            <span className="font-virgil text-xs font-bold text-tertiary px-2.5 py-0.5 rounded-full bg-tertiary/10">
              Department of CSE
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Book faculty consultation slots and review departmental office hours.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {professors.map((p, i) => (
          <div key={i} className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-base flex-shrink-0">
                {p.name.slice(4, 6)}
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-on-surface">{p.name}</h3>
                <p className="text-xs text-primary font-semibold">{p.role}</p>
                <p className="text-[11px] text-on-surface-variant">{p.dept}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-outline/10 space-y-1.5 text-xs text-on-surface-variant">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-outline" />
                <span>{p.room}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-outline" />
                <span>{p.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-outline" />
                <span>Office Hours: {p.hours}</span>
              </p>
            </div>

            <button
              type="button"
              className="w-full py-2 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline/15 text-xs font-bold text-on-surface"
            >
              Request Advising Meeting
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
