import React from 'react';
import { CreditCard, CheckCircle2, Download, AlertCircle } from 'lucide-react';

export default function FeesPage() {
  const transactions = [
    { term: 'Semester 5 Tuition & Exam Fee', amount: '₹45,000', status: 'Paid', date: 'Aug 14, 2026', txnId: 'TXN-NC-8842-55' },
    { term: 'Semester 4 Tuition & Lab Fee', amount: '₹45,000', status: 'Paid', date: 'Jan 10, 2026', txnId: 'TXN-NC-8842-42' },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Semester Fee Portal &amp; Receipts
            </h1>
            <span className="font-virgil text-xs font-bold text-emerald-700 px-2.5 py-0.5 rounded-full bg-emerald-50">
              No Outstanding Dues
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Accounts &amp; Finance Office &bull; Lions Calcutta Greater Vidya Mandir &amp; College.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment space-y-3">
          <span className="text-xs font-bold text-outline uppercase tracking-wider">Current Account Dues</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-emerald-700">₹0.00</span>
            <span className="text-xs font-bold text-emerald-800">Clear</span>
          </div>
          <p className="text-xs text-on-surface-variant">
            Semester 5 tuition, laboratory, and proctored examination fees fully cleared.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment space-y-3">
          <span className="text-xs font-bold text-outline uppercase tracking-wider">Next Term Projection</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-primary">₹45,000</span>
            <span className="text-xs text-outline font-medium">Due Dec 2026</span>
          </div>
          <p className="text-xs text-on-surface-variant">
            Semester 6 enrollment portal opens December 15, 2026.
          </p>
        </div>
      </div>

      <div className="bg-surface-bright rounded-2xl border border-outline/10 p-5 sm:p-6 shadow-parchment space-y-4">
        <h3 className="text-sm font-extrabold text-on-surface">Payment History &amp; Official Receipts</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-outline/10 text-outline uppercase font-bold text-[10px]">
                <th className="py-2.5 px-3">Transaction ID</th>
                <th className="py-2.5 px-3">Description</th>
                <th className="py-2.5 px-3">Amount</th>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline/10">
              {transactions.map((t) => (
                <tr key={t.txnId} className="hover:bg-surface-container/40 transition-colors">
                  <td className="py-3 px-3 font-mono font-bold text-primary">{t.txnId}</td>
                  <td className="py-3 px-3 font-semibold text-on-surface">{t.term}</td>
                  <td className="py-3 px-3 font-mono font-bold text-emerald-700">{t.amount}</td>
                  <td className="py-3 px-3 text-on-surface-variant">{t.date}</td>
                  <td className="py-3 px-3 text-right">
                    <button type="button" className="inline-flex items-center gap-1 font-bold text-primary hover:underline">
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
