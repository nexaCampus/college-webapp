import React from 'react';
import { Users, Code, Trophy, Sparkles, Calendar } from 'lucide-react';

export default function ClubsPage() {
  const clubs = [
    { name: 'Nexa Developers & Open-Source Guild', lead: 'Alex Chen', members: 140, focus: 'Distributed Systems, Web3 & Next.js', event: 'Winter Hackathon 2026' },
    { name: 'Collegiate IEEE Student Chapter', lead: 'Priya Sharma', members: 210, focus: 'Semiconductors, Robotics & Paper Publications', event: 'Paper Presentation Summit' },
    { name: 'Debating & Literary Society', lead: 'R. Mukherjee', members: 85, focus: 'Parliamentary Debate & Model UN', event: 'Inter-College Chancellor Trophy' },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Collegiate Societies &amp; Technical Clubs
            </h1>
            <span className="font-virgil text-xs font-bold text-tertiary px-2.5 py-0.5 rounded-full bg-tertiary/10">
              Student Life
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Student governance, hackathons, cultural festivals, and IEEE technical chapters.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {clubs.map((c, i) => (
          <div key={i} className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive space-y-3">
            <div className="flex items-start justify-between">
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold">
                {c.members} Active Members
              </span>
              <Users className="w-4 h-4 text-primary" />
            </div>

            <h3 className="text-sm font-extrabold text-on-surface">{c.name}</h3>
            <p className="text-xs text-on-surface-variant">{c.focus}</p>

            <div className="p-2.5 rounded-xl bg-surface-container text-xs text-on-surface space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-outline">Upcoming Major Event:</span>
              <p className="font-bold text-primary flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <span>{c.event}</span>
              </p>
            </div>

            <button type="button" className="w-full py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-sm">
              Join Society
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
