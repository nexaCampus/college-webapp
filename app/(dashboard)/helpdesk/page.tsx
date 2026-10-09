'use client';

import React, { useState } from 'react';
import { HelpCircle, Send, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function HelpdeskPage() {
  const [ticketType, setTicketType] = useState('Proctored Exam Appeal');
  const [token, setToken] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Collegiate Helpdesk &amp; Proctor Appeals
            </h1>
            <span className="font-virgil text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">
              Direct Proctor Office Hotline
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Submit technical appeals for proctored examination terminations or IT issues.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto bg-surface-bright rounded-3xl border border-outline/10 p-6 sm:p-8 shadow-parchment space-y-6">
        {submitted ? (
          <div className="text-center space-y-3 py-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h2 className="text-base font-extrabold text-on-surface">Appeal Docket Registered</h2>
            <p className="text-xs text-on-surface-variant max-w-md mx-auto">
              Your appeal docket #APL-2026-9921 has been submitted directly to the Academic Conduct Board. Decisions are posted within 24 working hours.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 rounded-xl bg-surface-container text-xs font-bold text-on-surface"
            >
              Submit Another Query
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-on-surface mb-1">
                Query / Appeal Category
              </label>
              <select
                value={ticketType}
                onChange={(e) => setTicketType(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl bg-surface border border-outline/15 text-on-surface font-semibold focus:outline-none focus:border-primary"
              >
                <option value="Proctored Exam Appeal">Proctored Exam Disqualification Appeal</option>
                <option value="Attendance Discrepancy">Attendance &amp; Leave Condonation</option>
                <option value="Grade Sheet Inquiry">Grade Sheet / SGPA Verification</option>
                <option value="IT Portal Support">Campus Wi-Fi / Student Portal Bug</option>
              </select>
            </div>

            {ticketType === 'Proctored Exam Appeal' && (
              <div>
                <label className="block text-xs font-bold text-rose-700 mb-1">
                  Incident Breach Appeal Token (from termination screen)
                </label>
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="e.g. NX-BREACH-XXXXX-SEC77"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-surface border border-rose-300 font-mono text-on-surface focus:outline-none focus:ring-2 focus:ring-rose-200"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-on-surface mb-1">
                Detailed Statement / Justification
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Provide precise details of hardware issue, notification interruption, or academic inquiry..."
                className="w-full p-3 text-xs rounded-xl bg-surface border border-outline/15 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-extrabold shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Official Ticket</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
