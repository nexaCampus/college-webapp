'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  MoreVertical,
  ShieldCheck,
  BookOpen,
  Calendar,
  Award,
  BookMarked,
  User,
  LogOut,
  HelpCircle,
  FileText,
  Clock,
  Compass,
} from 'lucide-react';

export default function CrispNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dotsMenuOpen, setDotsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '/', icon: Compass },
    { label: 'Academics', href: '/academics', icon: BookOpen },
    { label: 'Timetable', href: '/timetable', icon: Calendar },
    { label: 'Exams', href: '/exams', icon: ShieldCheck, highlight: true },
    { label: 'Results', href: '/results', icon: Award },
    { label: 'Library', href: '/library', icon: BookMarked },
    { label: 'Attendance', href: '/attendance', icon: Clock },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-surface-bright/95 backdrop-blur-md border-b border-outline/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & College Emblem */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
                <span>NC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-primary tracking-tight group-hover:text-primary-light transition-colors">
                  NEXA CAMPUS
                </span>
                <span className="text-[10px] font-semibold text-tertiary uppercase tracking-wider -mt-0.5">
                  College Division
                </span>
              </div>
            </Link>

            <span className="hidden md:inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold border border-primary/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              UGC & CISCE Affiliated
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all ${
                    active
                      ? 'bg-primary text-white shadow-sm font-semibold'
                      : item.highlight
                      ? 'text-tertiary hover:bg-tertiary/10 font-semibold'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions & Student Badge */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-outline/10 text-xs font-semibold text-on-surface transition-all"
            >
              <User className="w-3.5 h-3.5 text-primary" />
              <span>Student Portal</span>
            </Link>

            {/* 3-Dots Desktop Options Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDotsMenuOpen(!dotsMenuOpen)}
                className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                aria-label="More options"
              >
                <MoreVertical className="w-5 h-5" />
              </button>

              {dotsMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-surface-bright rounded-xl shadow-lg border border-outline/15 py-1.5 z-50 animate-in fade-in zoom-in-95">
                  <Link
                    href="/notices"
                    onClick={() => setDotsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-xs text-on-surface hover:bg-surface-container"
                  >
                    <FileText className="w-3.5 h-3.5 text-primary" />
                    <span>Circulars & Notices</span>
                  </Link>
                  <Link
                    href="/placements"
                    onClick={() => setDotsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-xs text-on-surface hover:bg-surface-container"
                  >
                    <Award className="w-3.5 h-3.5 text-primary" />
                    <span>Placement Cell</span>
                  </Link>
                  <Link
                    href="/helpdesk"
                    onClick={() => setDotsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-xs text-on-surface hover:bg-surface-container"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-primary" />
                    <span>Proctor Helpdesk</span>
                  </Link>
                  <div className="my-1 border-t border-outline/10"></div>
                  <Link
                    href="/login"
                    onClick={() => setDotsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-xs text-rose-600 hover:bg-rose-50"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Right Bar: 3-Dots Options & Hamburger Button */}
          <div className="flex items-center gap-1 lg:hidden">
            {/* 3-Dots Options Button on Top Right */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDotsMenuOpen(!dotsMenuOpen)}
                className="p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors"
                aria-label="Options"
              >
                <MoreVertical className="w-5 h-5" />
              </button>

              {dotsMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-surface-bright rounded-xl shadow-xl border border-outline/15 py-1.5 z-50">
                  <Link
                    href="/notices"
                    onClick={() => setDotsMenuOpen(false)}
                    className="flex items-center gap-2 px-3.5 py-2 text-xs text-on-surface hover:bg-surface-container"
                  >
                    <FileText className="w-3.5 h-3.5 text-primary" />
                    <span>University Notices</span>
                  </Link>
                  <Link
                    href="/helpdesk"
                    onClick={() => setDotsMenuOpen(false)}
                    className="flex items-center gap-2 px-3.5 py-2 text-xs text-on-surface hover:bg-surface-container"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-primary" />
                    <span>Emergency Helpdesk</span>
                  </Link>
                  <div className="my-1 border-t border-outline/10"></div>
                  <Link
                    href="/login"
                    onClick={() => setDotsMenuOpen(false)}
                    className="flex items-center gap-2 px-3.5 py-2 text-xs text-primary font-bold hover:bg-surface-container"
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Student Login</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-outline/10 bg-surface-bright px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? 'bg-primary text-white shadow-sm'
                      : item.highlight
                      ? 'bg-tertiary/10 text-tertiary border border-tertiary/20'
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-outline/10 flex items-center justify-between">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary text-white text-xs font-bold shadow-sm"
            >
              <User className="w-4 h-4" />
              <span>Sign In to Student Account</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
