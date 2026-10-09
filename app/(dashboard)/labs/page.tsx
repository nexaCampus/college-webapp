import React from 'react';
import { Layers, Cpu, Terminal, CheckCircle2, Clock, Monitor } from 'lucide-react';

export default function LabsPage() {
  const labs = [
    { name: 'Turing Advanced Computing Lab (Lab 3)', capacity: '60 Workstations', os: 'Ubuntu 24.04 LTS / CUDA 12', status: 'Available', gear: 'NVIDIA RTX 4080 GPUs' },
    { name: 'Ada Lovelace Database Systems Bay (Lab 2)', capacity: '45 Workstations', os: 'Debian 12 / PostgreSQL 16', status: 'In Session', gear: 'High-IOPS NVMe Array' },
    { name: 'Von Neumann Embedded & IoT Lab (Lab 5)', capacity: '30 Benches', os: 'RTOS / ARM Cortex-M4', status: 'Available', gear: 'Oscilloscopes & Logic Analyzers' },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Computing Laboratories &amp; Cloud Workstations
            </h1>
            <span className="font-virgil text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">
              Department of CSE
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Book compute workstations, access GPU virtual machines, and download lab manuals.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {labs.map((lab, i) => (
          <div key={i} className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive space-y-3">
            <div className="flex items-start justify-between">
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                lab.status === 'Available' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'
              }`}>
                {lab.status}
              </span>
              <Cpu className="w-4 h-4 text-primary" />
            </div>

            <h3 className="text-sm font-extrabold text-on-surface">{lab.name}</h3>
            <div className="space-y-1 text-xs text-on-surface-variant">
              <p>Capacity: <strong>{lab.capacity}</strong></p>
              <p>Environment: <strong>{lab.os}</strong></p>
              <p>Hardware: <strong>{lab.gear}</strong></p>
            </div>

            <div className="pt-2 border-t border-outline/10 flex items-center justify-between">
              <button
                type="button"
                className="w-full py-2 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold transition-all shadow-sm"
              >
                Reserve Seat for Evening Slot
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
