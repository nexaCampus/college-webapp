# DIRECTORY_STRUCTURE.md — NexaCampus College Webapp

This document outlines the complete directory layout and component architecture of the NexaCampus College Web Application.

---

## Workspace Layout

```
e:\nexaCampus\college\college-webapp\
├── .github/
│   └── workflows/
│       ├── pr-ci.yml             # Automated CI for lint, typecheck, Graphify & Archify checks
│       └── graphify-audit.yml     # Automated knowledge graph generation on PR
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx          # Multi-method Student Login (ID, Phone SMS OTP, Google SSO)
│   │   └── reset-password/
│   │       └── page.tsx          # Student Password / PIN Reset Portal
│   ├── (dashboard)/
│   │   ├── academics/
│   │   │   └── page.tsx          # Course curriculum, syllabus & lecture plans
│   │   ├── attendance/
│   │   │   └── page.tsx          # Monthly attendance analytics, leave & OD requests
│   │   ├── bus/
│   │   │   └── page.tsx          # Campus shuttle & transit live tracking
│   │   ├── canteen/
│   │   │   └── page.tsx          # Canteen menu, digital meal token & wallet
│   │   ├── clubs/
│   │   │   └── page.tsx          # Student societies, technical clubs & hackathons
│   │   ├── diary/
│   │   │   └── page.tsx          # Digital academic diary, assignments & homework
│   │   ├── faculty/
│   │   │   └── page.tsx          # Professor & department directory with office hours
│   │   ├── fees/
│   │   │   └── page.tsx          # Semester fee dues, receipts & payment gateway
│   │   ├── gallery/
│   │   │   └── page.tsx          # Campus media, convocation & event gallery
│   │   ├── hallpass/
│   │   │   └── page.tsx          # Digital campus outpass & gate exit tokens
│   │   ├── health/
│   │   │   └── page.tsx          # Campus infirmary, health records & medical emergency
│   │   ├── helpdesk/
│   │   │   └── page.tsx          # Academic & proctor support ticketing desk
│   │   ├── labs/
│   │   │   └── page.tsx          # Virtual labs, computing workstations & equipment booking
│   │   ├── library/
│   │   │   └── page.tsx          # Digital book repository, IEEE access & loan manager
│   │   ├── lostfound/
│   │   │   └── page.tsx          # Campus lost & found desk with image reports
│   │   ├── merits/
│   │   │   └── page.tsx          # Dean's list, merit citations & collegiate badges
│   │   ├── notices/
│   │   │   └── page.tsx          # Official university circulars & exam notifications
│   │   ├── placements/
│   │   │   └── page.tsx          # Campus placements, corporate drives & interview prep
│   │   ├── ptm/
│   │   │   └── page.tsx          # Academic advisor meetings & guardian scheduling
│   │   ├── results/
│   │   │   └── page.tsx          # Semester grade sheets, SGPA/CGPA transcripts & marks
│   │   ├── store/
│   │   │   └── page.tsx          # College bookstore, lab coat & stationary inventory
│   │   └── timetable/
│   │       └── page.tsx          # Weekly class schedule, lecture halls & lab timings
│   ├── exams/
│   │   ├── page.tsx              # Exam schedules, admit cards & proctored hall tickets
│   │   ├── [id]/
│   │   │   └── page.tsx          # High-security proctored online MCQ examination engine
│   │   └── terminated/
│   │       └── page.tsx          # Exam violation enforcement & termination incident report
│   ├── favicon.ico
│   ├── globals.css               # Material tokens, Collegiate Parchment variables & Virgil font
│   ├── layout.tsx                # Root layout with Poppins font, QueryClient & theme provider
│   └── page.tsx                  # Landing & Student Hub (Mindmap visualizer, to-do lists, alerts)
├── components/
│   ├── charts/
│   │   ├── AreaChart.tsx         # Bklit-inspired area progression chart
│   │   ├── BarChart.tsx          # Bklit-inspired bar chart for grade distribution
│   │   └── Sparkline.tsx         # Quick trend sparkline for attendance & credits
│   ├── features/
│   │   ├── ExamProctorHUD.tsx    # Active exam proctoring heads-up display
│   │   ├── MindmapVisualizer.tsx # Interactive canvas/SVG study milestone mindmap
│   │   ├── StudentTodoList.tsx   # Sketched interactive task scratchpad
│   │   └── WatermarkOverlay.tsx  # Dynamic forensic watermark against screen capture
│   ├── layout/
│   │   ├── CrispNavbar.tsx       # Desktop nav converting to 3-dot hamburger menu on mobile
│   │   └── InstitutionalFooter.tsx # NexaCampus institutional collegiate footer
│   └── ui/
│       ├── Button.tsx            # Styled tactile buttons with pressed states
│       ├── Card.tsx              # Parchment card container with touch hover response
│       ├── Input.tsx             # Collegiate input field with focus ring
│       ├── Modal.tsx             # Accessible modal drawer
│       └── StatusBadge.tsx       # Academic status and alert badges
├── hooks/
│   ├── useExamProctor.ts         # Zero-tolerance anti-cheating proctoring hook
│   └── useFirebaseAuth.ts       # Firebase Auth hook (Phone OTP, Google SSO, ID/Password)
├── lib/
│   ├── api.ts                    # Go backend HTTP client contracts
│   ├── firebase.ts               # Firebase Client initialization & auth config
│   └── utils.ts                  # Classname merging and formatting utilities
├── public/
│   ├── fonts/
│   │   └── Virgil.woff2          # Excalidraw-style Virgil handwritten font
│   ├── icons/                    # PWA icons and logos
│   └── manifest.json             # Progressive Web App manifest
├── AGENTS.md                     # Agent development guidelines & PR lifecycle
├── DIRECTORY_STRUCTURE.md        # Comprehensive file tree & component index
├── PRD.md                        # Product Requirements Document
├── TRD.md                        # Technical Requirements Document
├── next.config.mjs               # Next.js 15 build configuration
├── package.json                  # Dependencies & scripts
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration with Poppins & Virgil font families
└── tsconfig.json                 # TypeScript compiler options
```
