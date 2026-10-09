import React from 'react';
import { Search, Plus, MapPin, Calendar, CheckCircle } from 'lucide-react';

export default function LostFoundPage() {
  const items = [
    { title: 'Graphing Scientific Calculator (Casio fx-991CW)', location: 'Found in Hall C-201', date: 'Yesterday', status: 'Unclaimed', reporter: 'Security Desk' },
    { title: 'Navy Blue College Spiral Notebook (Discrete Math)', location: 'Found in Turing Lab 3', date: 'Oct 22', status: 'Claimed', reporter: 'Lab Incharge' },
    { title: 'Black USB 3.2 Flash Drive (SanDisk 64GB)', location: 'Found near Library Counter', date: 'Oct 19', status: 'Unclaimed', reporter: 'Librarian Desk' },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Campus Lost &amp; Found Desk
            </h1>
            <span className="font-virgil text-xs font-bold text-tertiary px-2.5 py-0.5 rounded-full bg-tertiary/10">
              Subhasgram Security Wing
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Report misplaced student items or claim recovered articles.
          </p>
        </div>

        <button type="button" className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-sm flex items-center gap-1.5 self-start sm:self-auto">
          <Plus className="w-4 h-4" />
          <span>Report New Lost Article</span>
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  item.status === 'Claimed' ? 'bg-slate-100 text-slate-700' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {item.status}
                </span>
                <span className="text-xs text-outline">{item.date}</span>
              </div>
              <h3 className="text-sm font-extrabold text-on-surface">{item.title}</h3>
              <p className="text-xs text-on-surface-variant flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-outline" />
                <span>{item.location} &bull; Custody: {item.reporter}</span>
              </p>
            </div>

            <button type="button" className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline/15 text-xs font-bold text-on-surface self-start md:self-auto">
              File Claim Verification
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
