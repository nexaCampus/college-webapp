import React from 'react';
import { HeartPulse, Phone, ShieldCheck, UserCheck } from 'lucide-react';

export default function HealthPage() {
  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Campus Health Center &amp; Infirmary
            </h1>
            <span className="font-virgil text-xs font-bold text-rose-700 px-2.5 py-0.5 rounded-full bg-rose-50">
              24x7 Emergency Care
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Full-time Resident Medical Officer &bull; On-campus ambulance and first-aid center.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment space-y-3">
          <div className="flex items-center gap-2 text-rose-600">
            <HeartPulse className="w-5 h-5" />
            <h3 className="text-sm font-extrabold text-on-surface">Campus Clinic &amp; Medical Officer</h3>
          </div>
          <div className="text-xs text-on-surface-variant space-y-1.5">
            <p>Attending Physician: <strong>Dr. S. K. Roy (MBBS, MD)</strong></p>
            <p>Clinic Hours: <strong>08:30 AM – 06:30 PM (Daily)</strong></p>
            <p>Location: <strong>Ground Floor, Subhasgram Infirmary Wing</strong></p>
          </div>
          <button type="button" className="w-full py-2.5 rounded-xl bg-primary text-white text-xs font-bold shadow-sm">
            Book Routine Health Checkup
          </button>
        </div>

        <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-rose-700 font-bold">
            <Phone className="w-5 h-5" />
            <h3 className="text-sm font-extrabold text-rose-900">Emergency Medical SOS</h3>
          </div>
          <p className="text-xs text-rose-800 leading-relaxed">
            In the event of an urgent medical emergency during laboratory hours or exams, contact the campus emergency ambulance dispatch immediately.
          </p>
          <div className="p-3 rounded-xl bg-surface-bright border border-rose-200 font-mono text-xs font-black text-rose-700 text-center">
            EMERGENCY HOTLINE: +91 91798 0679513
          </div>
        </div>
      </div>
    </div>
  );
}
