import React from 'react';
import { Bus, MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';

export default function BusTransitPage() {
  const routes = [
    { routeNo: 'Route 4A', dest: 'Subhasgram Campus to Ruby General Hospital / EM Bypass', nextTime: '16:15 PM', busReg: 'WB-19-J-4821', driver: 'M. K. Das (+91 98301 23456)', status: 'On Schedule' },
    { routeNo: 'Route 7B', dest: 'Subhasgram Campus to Garia Metro Station', nextTime: '16:30 PM', busReg: 'WB-19-J-5104', driver: 'S. Roy (+91 98302 98765)', status: 'Boarding' },
    { routeNo: 'Route 11C', dest: 'Subhasgram Campus to Howrah Station via Exide', nextTime: '16:45 PM', busReg: 'WB-19-J-6789', driver: 'A. Ghosh (+91 98303 54321)', status: 'On Schedule' },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Campus Transit &amp; Shuttle Tracking
            </h1>
            <span className="font-virgil text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">
              Live Fleet Sync
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Real-time GPS tracking for college student buses &bull; Central Transport Directorate.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {routes.map((r, i) => (
          <div key={i} className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-lg bg-primary text-white text-xs font-mono font-bold">
                  {r.routeNo}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {r.status}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-on-surface">{r.dest}</h3>
              <div className="flex items-center gap-3 text-xs text-on-surface-variant flex-wrap">
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-outline" />
                  Departs: {r.nextTime}
                </span>
                <span>Vehicle: {r.busReg}</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-outline" />
                  {r.driver}
                </span>
              </div>
            </div>

            <button type="button" className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline/15 text-xs font-bold text-on-surface self-start md:self-auto transition-all">
              Live GPS Radar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
