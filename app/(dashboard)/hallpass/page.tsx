import React from 'react';
import { QrCode, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function HallpassPage() {
  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Digital E-Hallpass &amp; Campus Outpass
            </h1>
            <span className="font-virgil text-xs font-bold text-emerald-700 px-2.5 py-0.5 rounded-full bg-emerald-50">
              Approved
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Contactless gate security verification &bull; Lions Calcutta Greater Vidya Mandir &amp; College.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto p-6 rounded-3xl bg-surface-bright border border-outline/10 shadow-2xl space-y-4 text-center">
        <div className="space-y-1">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase">
            Active Campus Gate Outpass
          </span>
          <h2 className="text-base font-extrabold text-on-surface">Alex Chen &bull; Roll #2024-CS-088</h2>
          <p className="text-xs text-on-surface-variant">Purpose: Central Library Book Vault &bull; Valid today till 18:00</p>
        </div>

        <div className="w-48 h-48 mx-auto p-3 rounded-2xl bg-white border border-outline/15 shadow-md flex items-center justify-center">
          <QrCode className="w-40 h-40 text-primary" />
        </div>

        <div className="p-3 rounded-xl bg-surface-container text-xs text-on-surface-variant space-y-1">
          <p className="font-mono text-[11px] font-bold text-primary">Token: NC-PASS-8842-OCT26</p>
          <p>Scan at Security Gate 1 (Subhasgram Main Portal)</p>
        </div>

        <p className="font-virgil text-xs text-tertiary">
          &ldquo;Remember to present student physical ID card upon exit.&rdquo;
        </p>
      </div>
    </div>
  );
}
