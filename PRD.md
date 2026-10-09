# PRD.md — NexaCampus College Webapp Product Requirements Document

## 1. Executive Summary & Product Vision

**NexaCampus College** is the next-generation digital campus platform engineered specifically for colleges, universities, and polytechnic institutes. Expanding upon the proven NexaCampus School ecosystem, the College platform is architected mobile-first to empower students with an intuitive, non-corporate, human-centric academic hub while introducing a military-grade, zero-tolerance **Online MCQ Examination Proctoring System**.

The platform is designed to completely avoid the sterile, boilerplate "AI-generated" look. It features tactile parchment surfaces, responsive divs that react with fluid micro-interactions to pointer and touch gestures, interactive study mindmaps, tangible to-do checklists, and an expressive typographic hierarchy pairing **Google Poppins** for crisp layout with **Virgil** (Excalidraw-style handwritten script) for annotations and alerts.

---

## 2. Target User Personas

1. **Undergraduate & Postgraduate Students (Primary):** Access course curricula, track real-time attendance, review digital grade sheets, and take proctored online exams directly on mobile phones or laptops.
2. **Faculty & Course Mentors:** Publish lecture routines, assign lab tasks, and monitor student academic progression.
3. **Examination Controllers & Chief Proctors:** Administer secure online MCQ evaluations, configure proctoring lockdown policies, and review tamper-evident violation reports.

---

## 3. Core Functional Pillars

### 3.1. Zero-Tolerance Online MCQ Examination Engine

The online exam system is built for high-stakes evaluations administered on mobile phones and laptops:
- **Locked Screen Mode:** On starting an exam, the student enters a forced full-screen lockdown environment.
- **Screen Share & Recording Prevention:** The application detects and prevents screen capture (`getDisplayMedia`, third-party screen recorders, and canvas overlays).
- **Split-Screen & Floating Window Prohibition:** On mobile devices (Android/iOS), attempting to engage split-screen mode or pop-up floating apps immediately triggers the violation detector.
- **Window Blur & App Switch Detection:** Any loss of window focus (`visibilitychange` or `blur`) triggers instantaneous session termination.
- **Instant Disqualification:** Unlike lenient platforms that give warnings, any single deliberate violation **instantly terminates the examination**, saves the current score up to that instant, and redirects the student to `/exams/terminated` with a cryptographic audit token.
- **Forensic Watermarking:** A dynamic semi-transparent watermark containing the Student ID, Roll Number, Client IP, and UTC Timestamp moves subtly across the screen to prevent external camera leaks.

### 3.2. Universal Student Authentication

The `/login` gateway supports three friction-free sign-in modalities:
1. **Student Roll Number & Institutional PIN:** Direct authentication against the Go college backend.
2. **Phone Number + Firebase SMS OTP:** Students enter their mobile number (+91), receive a high-speed SMS verification OTP via Firebase Auth, and confirm sign-in.
3. **Google Single Sign-On (SSO):** One-tap authentication using student `@campus.edu` institutional Google accounts.

### 3.3. Humanized, Organic Aesthetics (Anti-AI Design)

- **Touch & Mouse Reactive Cards:** Interactive divs use tactile elevation shifts (`translateY(-2px)`), delicate ink borders (`rgba(12, 26, 48, 0.08)`), and soft parchment backgrounds.
- **Interactive Mindmap Node Visualizer:** An interactive SVG/Canvas node map on the home dashboard mapping upcoming exam sprints, subject readiness percentages, and chapter dependencies.
- **Tangible Student To-Do List:** An interactive scratchpad where clicking tasks triggers dynamic strikethrough animations and instant task persistence.
- **Typography:**
  - `Poppins` (300, 400, 500, 600, 700) for headers, body, tables, and buttons.
  - `Virgil` / `Caveat` for notes, high-priority alert tags, professor marginalia, and sketched arrows.
- **Navigation & Footer:**
  - **Crisp Navbar:** Desktop top navigation with logo emblem and navigation links that collapses on mobile viewports into a sleek hamburger menu with a 3-dot options popover.
  - **Authentic NexaCampus Footer:** Institutional collegiate footer displaying affiliation credentials (CISCE / UGC), 256-Bit SSL encryption badges, multi-column navigation links, and copyright metadata.

---

## 4. 20+ Core Web Pages Catalog

| # | Route | Module Name | Key Functional Capabilities |
|---|---|---|---|
| 1 | `/` | **Student Hub & Landing** | Interactive mindmap, quick-task to-do list, emergency proctored exam countdown, live sync status. |
| 2 | `/login` | **Student Authentication** | Student ID/PIN login, Phone number SMS OTP via Firebase, Google SSO. |
| 3 | `/exams` | **Examination Central** | Scheduled midterm/final rosters, exam instructions, proctor checklist, hall ticket download. |
| 4 | `/exams/[id]` | **Proctored MCQ Engine** | Full-screen lockdown, timer HUD, question palette, anti-cheat detection, instant termination. |
| 5 | `/exams/terminated` | **Security Breach Dossier** | Incident violation telemetry, IP & viewport audit, forensic appeal token, proctor desk link. |
| 6 | `/academics` | **Curriculum & Syllabus** | Semester syllabus breakdown, unit credit tracker, lecture plan PDFs, course objectives. |
| 7 | `/timetable` | **Weekly Class Routine** | Day-by-day lecture timeline, active class indicator, room hall codes, calendar sync. |
| 8 | `/attendance` | **Monthly Attendance** | Aggregate attendance dial (75% UGC minimum), course-wise breakdown, leave & OD application. |
| 9 | `/results` | **Grade Sheets & Transcripts** | Cumulative CGPA/SGPA display, semester grade cards, Bklit-style GPA trend charts, official transcript PDF. |
| 10 | `/library` | **Digital Library Vault** | Searchable book catalog, IEEE research papers, issued books tracker, renewal buttons. |
| 11 | `/fees` | **Fee Portal & Payments** | Semester fee breakdown, online payment gateway, downloadable fee receipts. |
| 12 | `/notices` | **Notices & Circulars** | Department bulletins, emergency announcements, official college notifications with download attachments. |
| 13 | `/placements` | **Placement & Career Cell** | Corporate drive listings, eligibility filters, mock interview preparation, resume drop. |
| 14 | `/labs` | **Computing Labs & Gear** | Lab equipment reservation, virtual compute workstations, lab manual repository. |
| 15 | `/faculty` | **Faculty Directory** | Department professor list, research specializations, office hours schedule, direct email contact. |
| 16 | `/diary` | **Student Diary & Tasks** | Daily class assignments, homework submission portal, mentor feedback notes. |
| 17 | `/clubs` | **Societies & Clubs** | Technical & cultural student clubs, upcoming hackathons, membership registration. |
| 18 | `/canteen` | **Campus Canteen** | Daily dietary menu, nutrition info, digital meal token generation, contactless campus wallet. |
| 19 | `/bus` | **Campus Transit** | Real-time college bus route tracking, driver contact, bus pass renewal. |
| 20 | `/hallpass` | **Digital E-Hallpass** | Outpass generation, library pass, gate security QR verification. |
| 21 | `/health` | **Infirmary & Health** | Campus clinic appointment, medical history record, emergency SOS contact. |
| 22 | `/merits` | **Dean's List & Merits** | Academic merit badges, house points, competition victories, dean's commendation. |
| 23 | `/lostfound` | **Lost & Found Desk** | Report lost personal items, image uploads, claim status tracking. |
| 24 | `/helpdesk` | **Support & Help Desk** | Open support tickets, academic disputes, proctored exam technical appeals. |

---

## 5. Non-Functional & Technical Requirements

- **Mobile First Performance:** First Contentful Paint (FCP) < 1.2s on 4G mobile networks.
- **Responsive Viewports:** Fluid optimization for 360px (mobile phones), 768px (tablets), 1024px (laptops), and 1440px+ (desktop workstations).
- **Security & Privacy:** TLS 1.3, CSP header enforcement, strict sanitization of exam question content, Firebase Auth JWT verification.
- **Accessibility:** WCAG 2.1 Level AA compliant contrast ratios and accessible aria-labels for screen readers.
