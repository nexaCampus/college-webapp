import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  LifeBuoy,
} from 'lucide-react';

export default function InstitutionalFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline/10 mt-auto pt-8 pb-20 md:pt-12 md:pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Institutional Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 pb-6 md:pb-8 border-b border-outline/10">
          <div className="flex items-start md:items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white font-extrabold text-lg shadow-sm flex-shrink-0">
              <span>NC</span>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[16px] md:text-[18px] font-extrabold text-on-surface tracking-tight">
                  Lions Calcutta Greater Vidya Mandir &amp; College
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                  <CheckCircle className="w-3 h-3 text-primary" />
                  CISCE &amp; UGC Affiliated
                </span>
              </div>
              <p className="text-[12px] md:text-[13px] text-on-surface-variant mt-0.5 leading-snug">
                Affiliation No. 2430095 • Institutional Code: 15632 • Academic Session 2026–2027
              </p>
            </div>
          </div>

          {/* Institutional Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-[11px] font-semibold text-on-surface-variant border border-outline/10">
              <Lock className="w-3.5 h-3.5 text-tertiary" />
              256-Bit SSL Encrypted
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-[11px] font-semibold text-on-surface-variant border border-outline/10">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              ISO 27001 Certified
            </span>
          </div>
        </div>

        {/* Multi-column Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-6 md:py-8 border-b border-outline/10 text-[12px] md:text-[13px]">
          {/* Column 1: Academic Modules */}
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-[11px] uppercase tracking-wider text-outline mb-1">
              Collegiate Academics
            </span>
            <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">
              Student Dashboard Hub
            </Link>
            <Link href="/academics" className="text-on-surface-variant hover:text-primary transition-colors">
              Courses &amp; Curriculum
            </Link>
            <Link href="/timetable" className="text-on-surface-variant hover:text-primary transition-colors">
              Lecture &amp; Lab Timetable
            </Link>
            <Link href="/exams" className="text-on-surface-variant hover:text-primary transition-colors">
              Proctored Exams &amp; Hall Tickets
            </Link>
            <Link href="/attendance" className="text-on-surface-variant hover:text-primary transition-colors">
              Monthly Attendance &amp; Leave
            </Link>
            <Link href="/results" className="text-on-surface-variant hover:text-primary transition-colors">
              Grade Sheets &amp; Transcripts
            </Link>
          </div>

          {/* Column 2: Campus Facilities & Tech */}
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-[11px] uppercase tracking-wider text-outline mb-1">
              Campus &amp; Facilities
            </span>
            <Link href="/library" className="text-on-surface-variant hover:text-primary transition-colors">
              Digital Library &amp; IEEE Vault
            </Link>
            <Link href="/labs" className="text-on-surface-variant hover:text-primary transition-colors">
              Computing Labs &amp; Cloud Workstations
            </Link>
            <Link href="/bus" className="text-on-surface-variant hover:text-primary transition-colors">
              Campus Transit &amp; Shuttle Bus
            </Link>
            <Link href="/canteen" className="text-on-surface-variant hover:text-primary transition-colors">
              Campus Canteen &amp; Meal Tokens
            </Link>
            <Link href="/health" className="text-on-surface-variant hover:text-primary transition-colors">
              Health Center &amp; Infirmary
            </Link>
            <Link href="/hallpass" className="text-on-surface-variant hover:text-primary transition-colors">
              E-Hallpass &amp; Gate Tokens
            </Link>
          </div>

          {/* Column 3: Career & Student Life */}
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-[11px] uppercase tracking-wider text-outline mb-1">
              Career &amp; Societies
            </span>
            <Link href="/placements" className="text-on-surface-variant hover:text-primary transition-colors">
              Placement Cell &amp; Drives
            </Link>
            <Link href="/clubs" className="text-on-surface-variant hover:text-primary transition-colors">
              Technical &amp; Cultural Clubs
            </Link>
            <Link href="/merits" className="text-on-surface-variant hover:text-primary transition-colors">
              Dean's Honors &amp; Merit Points
            </Link>
            <Link href="/notices" className="text-on-surface-variant hover:text-primary transition-colors">
              University Circulars &amp; Bulletins
            </Link>
            <Link href="/faculty" className="text-on-surface-variant hover:text-primary transition-colors">
              Faculty &amp; Advisor Directory
            </Link>
            <Link href="/lostfound" className="text-on-surface-variant hover:text-primary transition-colors">
              Lost &amp; Found Desk
            </Link>
          </div>

          {/* Column 4: Contact & Proctor Helpdesk */}
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-[11px] uppercase tracking-wider text-outline mb-1">
              Contact &amp; Proctor Helpdesk
            </span>
            <div className="flex items-start gap-2 text-on-surface-variant">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-[12px] leading-relaxed">
                Subhasgram Campus, Kolkata, West Bengal — 700147
              </span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-[12px]">+91 33 2437 1234 / +91 91798 0679513</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-[12px]">college.office@lcgvm.edu.in</span>
            </div>
            <div className="mt-2 pt-2 border-t border-outline/10">
              <Link
                href="/helpdesk"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary text-white text-[12px] font-bold hover:bg-primary/90 transition-colors shadow-sm"
              >
                <LifeBuoy className="w-4 h-4" />
                <span>Open Student Ticket</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & NexaCampus Brand Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-5 text-[11px] md:text-[12px] text-on-surface-variant">
          <div className="flex items-center gap-2 flex-wrap text-center md:text-left justify-center md:justify-start">
            <span>&copy; 2026 Lions Calcutta Greater Vidya Mandir &amp; College. All rights reserved.</span>
            <span className="hidden md:inline">&bull;</span>
            <span className="text-outline">Approved by UGC &amp; Affiliated to CISCE</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-outline">
              <CheckCircle className="w-3.5 h-3.5 text-tertiary" />
              NexaCampus College v3.0.0
            </span>
            <span>&bull;</span>
            <Link href="/helpdesk" className="hover:text-primary transition-colors">
              Help &amp; FAQ
            </Link>
            <span>&bull;</span>
            <span className="text-outline">Privacy &amp; Proctoring Charter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
