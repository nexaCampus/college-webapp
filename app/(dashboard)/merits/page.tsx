import React from 'react';
import { Award, Trophy, Star, Sparkles } from 'lucide-react';

export default function MeritsPage() {
  const merits = [
    { title: "Dean's Commendation for Academic Excellence", session: 'Spring Term 2026', desc: 'Conferred for maintaining an SGPA of 9.14 in Semester 4.', badge: 'Gold Ribbon' },
    { title: 'First Place — Eastern Regional Collegiate Hackathon', session: 'Autumn 2026', desc: 'Built resilient zero-downtime microservices platform.', badge: 'Winner Medal' },
    { title: 'Best Undergraduate Research Paper Finalist', session: 'IEEE Student Track', desc: 'Authored paper on memory compaction in low-resource kernels.', badge: 'Honor Roll' },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Academic Merits &amp; Dean&apos;s Honor Roll
            </h1>
            <span className="font-virgil text-xs font-bold text-amber-700 px-2.5 py-0.5 rounded-full bg-amber-50">
              Honors Scholar
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Recognition of high scholastic distinction and co-curricular achievements.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {merits.map((m, i) => (
          <div key={i} className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive space-y-3">
            <div className="flex items-start justify-between">
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold">
                {m.badge}
              </span>
              <Trophy className="w-5 h-5 text-amber-500" />
            </div>

            <h3 className="text-sm font-extrabold text-on-surface">{m.title}</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">{m.desc}</p>
            <span className="text-[11px] font-mono text-outline block pt-2 border-t border-outline/10">
              {m.session}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
