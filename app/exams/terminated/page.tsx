'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ShieldAlert,
  AlertTriangle,
  Lock,
  ArrowRight,
  FileText,
  LifeBuoy,
  XCircle,
  Copy,
  Check,
} from 'lucide-react';
import { ExamViolationPayload } from '@/lib/api';

export default function ExamTerminatedPage() {
  const [telemetry, setTelemetry] = useState<ExamViolationPayload | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('nexa_exam_breach');
      if (stored) {
        setTelemetry(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const defaultViolation = telemetry?.violationType || 'SPLIT_SCREEN / APP_SWITCH';
  const incidentToken = `NX-BREACH-${Date.now().toString(36).toUpperCase()}-SEC77`;

  const copyToken = () => {
    navigator.clipboard.writeText(incidentToken);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-8 sm:py-12 flex items-center justify-center">
      <div className="w-full bg-surface-bright rounded-3xl border-2 border-rose-300 shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Urgent Disqualification Header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-rose-600 text-white flex items-center justify-center mx-auto shadow-lg ring-4 ring-rose-100">
            <XCircle className="w-9 h-9" />
          </div>

          <div className="space-y-1">
            <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-[11px] font-black uppercase tracking-wider">
              Zero-Tolerance Enforcement
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-rose-700 tracking-tight">
              EXAMINATION TERMINATED &bull; BREACH DETECTED
            </h1>
            <p className="text-xs text-on-surface-variant max-w-md mx-auto">
              Your examination session has been terminated by the Proctoring AI Engine due to an unauthorized environment event.
            </p>
          </div>
        </div>

        {/* Forensic Incident Dossier Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-rose-200">
            <span className="font-extrabold text-rose-900">Forensic Incident Report</span>
            <span className="font-mono text-[10px] text-rose-700 font-bold">
              Status: DISQUALIFIED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-on-surface">
            <div>
              <span className="text-[10px] uppercase font-bold text-outline">Detected Violation:</span>
              <p className="font-bold text-rose-700 mt-0.5">{defaultViolation}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-outline">Candidate Roll No:</span>
              <p className="font-mono font-bold mt-0.5">{telemetry?.rollNumber || '2024-CS-088'}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-outline">Incident Timestamp:</span>
              <p className="font-mono text-[11px] mt-0.5">{telemetry?.timestamp || new Date().toISOString()}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-outline">Viewport Geometry:</span>
              <p className="font-mono text-[11px] mt-0.5">
                {telemetry ? `${telemetry.viewportWidth}x${telemetry.viewportHeight}` : 'Anomalous Multi-Window'}
              </p>
            </div>
          </div>

          {/* Incident Appeal Token */}
          <div className="pt-2 border-t border-rose-200 flex items-center justify-between gap-2">
            <div>
              <span className="text-[10px] text-rose-800 font-bold block">
                Official Incident Appeal Token:
              </span>
              <span className="font-mono text-xs font-black text-rose-950 tracking-wider">
                {incidentToken}
              </span>
            </div>
            <button
              type="button"
              onClick={copyToken}
              className="px-2.5 py-1.5 rounded-lg bg-surface-bright border border-rose-300 text-rose-800 text-[11px] font-bold hover:bg-rose-100 flex items-center gap-1 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Regulatory Statutes & Next Steps */}
        <div className="p-4 rounded-2xl bg-surface-container border border-outline/10 text-xs space-y-2">
          <h3 className="font-bold text-on-surface">Academic Conduct Committee Directives:</h3>
          <p className="text-on-surface-variant leading-relaxed">
            In accordance with Ordinance 14-B of the University Examination Regulations, any attempt to engage in split-screen multitasking, floating window utilities, or app defocus constitutes an unfair means breach.
          </p>
          {/* Virgil Annotation */}
          <p className="font-virgil text-tertiary text-xs pt-1">
            &ldquo;If you experienced a hardware malfunction or legitimate OS notification popup, submit an appeal immediately with your token.&rdquo;
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/helpdesk"
            className="w-full py-3.5 px-4 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-black transition-all shadow-md flex items-center justify-center gap-2"
          >
            <LifeBuoy className="w-4 h-4 text-amber-300" />
            <span>Submit Official Proctor Appeal</span>
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-surface hover:bg-surface-container border border-outline/15 text-xs font-bold text-on-surface text-center"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
