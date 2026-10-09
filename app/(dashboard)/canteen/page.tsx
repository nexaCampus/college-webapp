import React from 'react';
import { Utensils, QrCode, Coffee, CheckCircle2 } from 'lucide-react';

export default function CanteenPage() {
  const menu = [
    { item: 'North Indian Thali Combo', price: '₹90', type: 'Lunch Special', calories: '650 kcal' },
    { item: 'Paneer Butter Masala with 3 Rotis', price: '₹80', type: 'Lunch Special', calories: '580 kcal' },
    { item: 'Masala Dosa with Sambar & Chutney', price: '₹60', type: 'Snacks / Breakfast', calories: '420 kcal' },
    { item: 'Espresso Coffee & Butter Toast', price: '₹35', type: 'Beverage', calories: '210 kcal' },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Campus Canteen &amp; Meal Tokens
            </h1>
            <span className="font-virgil text-xs font-bold text-tertiary px-2.5 py-0.5 rounded-full bg-tertiary/10">
              Campus Wallet: ₹420.00
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Nutritional dining court &bull; Lions Calcutta Greater Vidya Mandir &amp; College Cafeteria.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-on-surface">Active Meal Token</h3>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
              Ready for Pickup
            </span>
          </div>
          <div className="p-4 rounded-xl bg-surface-container flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-on-surface">Token #MC-204</p>
              <p className="text-[11px] text-on-surface-variant">North Indian Thali Combo</p>
              <p className="text-[10px] text-outline font-mono mt-1">Valid till 02:30 PM Today</p>
            </div>
            <div className="w-16 h-16 rounded-xl bg-white border border-outline/15 flex items-center justify-center p-1 shadow-xs">
              <QrCode className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment space-y-3">
          <h3 className="text-sm font-extrabold text-on-surface">Campus Meal Wallet</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-primary">₹420.00</span>
            <span className="text-xs text-emerald-700 font-bold font-virgil">Ready for quick tap</span>
          </div>
          <button type="button" className="w-full py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold shadow-sm">
            Top-up Balance via UPI
          </button>
        </div>
      </div>

      <div className="bg-surface-bright rounded-2xl border border-outline/10 p-5 sm:p-6 shadow-parchment space-y-4">
        <h3 className="text-sm font-extrabold text-on-surface">Today&apos;s Cafeteria Menu</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {menu.map((m, i) => (
            <div key={i} className="p-4 rounded-xl bg-surface-container border border-outline/10 space-y-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-surface-bright text-primary uppercase">
                {m.type}
              </span>
              <h4 className="text-xs font-bold text-on-surface">{m.item}</h4>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="font-mono font-bold text-primary">{m.price}</span>
                <span className="text-[10px] text-outline">{m.calories}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
