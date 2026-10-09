# AGENTS.md — NexaCampus College Webapp Protocol & Guidelines

Welcome to the **NexaCampus College Webapp** autonomous engineering protocol. All AI agents, contributors, and automated tooling operating within this repository must adhere strictly to the guidelines defined in this document.

---

## 1. Project Boundaries & Isolation

- **Scoped Workspace:** This codebase is located at `college/college-webapp`.
- **Strict Boundary Rule:** Agents must **NEVER** modify or touch sibling directories (`college/android-college-app`, `college/android-college-admin-app`, or `college/backend-college-go`) unless explicitly instructed with approval. All web frontend features, proctoring logic, authentication flows, and student dashboards reside exclusively within `college-webapp`.

---

## 2. Git Branching, Pull Request & Merge Lifecycle

To ensure repository stability, auditability, and clean git history, all code modifications must follow the **Strict PR Protocol**:

### Branch Naming Conventions
- `feature/<feature-name>`: New web pages, components, proctoring features.
- `fix/<bug-name>`: Bug fixes and security patches.
- `perf/<perf-name>`: Performance, animation, and bundle optimizations.
- `docs/<doc-name>`: Documentation, PRD, TRD, and architecture updates.

### The Lifecycle Steps for Every Atomic Change:
1. **Branch Creation:** Create a new branch off latest `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/<task-name>
   ```
2. **Atomic Development:** Implement the focused change. Verify linting, TypeScript types, and responsiveness (mobile and desktop).
3. **Commit with Conventional Messages:**
   ```bash
   git commit -m "feat(proctor): implement split-screen detection and termination HUD"
   ```
4. **Pull Request & Automated Audits:**
   - Every small change becomes a PR.
   - Run Graphify and Archify verification scripts (see Section 3).
5. **Squash and Merge:**
   - Merge PR using **Squash and Merge** strategy to maintain a clean linear commit graph on `main`.
6. **Immediate Branch Deletion:**
   - Delete the feature branch locally and remotely immediately after merge:
   ```bash
   git checkout main
   git pull origin main
   git branch -D feature/<task-name>
   # git push origin --delete feature/<task-name>
   ```

---

## 3. Graphify & Archify Integration

### Graphify (`/graphify`)
Graphify turns this Next.js codebase into a queryable, persistent knowledge graph with community clustering, AST extraction, and an honest audit trail.

- **Storage Location:** `graphify-out/` (containing `graph.json`, `graph.html`, `GRAPH_REPORT.md`).
- **CI / PR Enforcement:**
  - On every PR, agents must execute Graphify extraction to update `.graphify_extract.json` and generate the fresh `GRAPH_REPORT.md`.
  - Check for god nodes and unexpected cross-module dependencies (e.g. exams module leaking into unauthenticated public landing).
- **Execution:**
  ```powershell
  # Full graph pipeline
  /graphify .
  # Query architecture
  graphify query "How does useExamProctor communicate violation state?"
  ```

### Archify (Architecture-as-Code)
Archify enforces architectural boundary rules between frontend layers and the Go backend services.

- **Rule 1 — Anti-Cheating Invariants:** The proctoring system (`hooks/useExamProctor.ts`) must remain stateless on the client with signed violation beacons dispatched to `/api/v1/exams/violations` (Go backend).
- **Rule 2 — Component Layering:**
  - `components/ui/`: Atomic elements, buttons, inputs, bklit-adapted charts.
  - `components/features/`: Complex domain components (e.g., `ExamHUD`, `MindmapVisualizer`, `TodoList`).
  - `components/layout/`: Crisp Navbar with 3-dot hamburger, Institutional Portal Footer.
- **Rule 3 — GitHub Actions PR Sync:** Every PR must include updated Archify manifests (`ARCH_MAP.md` or `DIRECTORY_STRUCTURE.md`) validating that new routes correspond to documented PRD pages.

---

## 4. UI & Design System Guidelines

- **Design System:** Collegiate Parchment (`#0c1a30` navy, `#f9f9ff` paper background, `#d97706` amber accents).
- **Typography:**
  - Google Font: `Poppins` (`font-sans`) for structural UI labels, headers, data values.
  - Handwritten/Sketch Accent: `Virgil` / `Caveat` (`font-virgil`) for highlights, marginalia notes, and tactical alerts.
- **Anti-AI Design Rule:** Avoid generic corporate AI styling. Use handcrafted micro-interactions:
  - Interactive divs that react to mouse hover/pointer movement.
  - Tangible to-do lists with organic checked/strike-through interactions.
  - Visual mindmap node graphs connecting study sprints.
  - No bloated empty wrapper divs; clean, deliberate semantic HTML.
- **Component Stack:**
  - Next.js 15 App Router + React 19.
  - Tailwind CSS 3.4.
  - Bklit UI charts (Area, Bar, Performance Sparklines).
  - Flowbite / Lucide React icons.
  - Firebase 11 Client SDK (Phone OTP + Google SSO + Student ID).
- **Mobile First:** Ensure seamless single-thumb usability on phones (viewport < 640px) while maintaining rich multi-column layouts on laptop/desktop.

---

## 5. Anti-Cheating Proctoring Rules (MCQ Online Exams)

Online examination sessions in NexaCampus College enforce zero-tolerance proctoring:
1. **Screen Share / Screen Record Prevention:** Screen capture is strictly prohibited. Capture attempts or DRM violations immediately terminate the session.
2. **Split-Screen & Floating Window Prohibition:** If window width/height alters or aspect ratio indicates a floating multi-window on mobile/tablet, the exam terminates.
3. **App Switching / Tab Inactivity:** `visibilitychange` or `window.blur` triggers immediate session disqualification.
4. **Developer Tools & Clipboard Lock:** Right click (`contextmenu`), text selection, copy/cut/paste, and DevTools key combinations (`F12`, `Ctrl+Shift+I`) are blocked.
5. **Breach Redirection:** Any detected violation triggers immediate redirection to `/exams/terminated` with tamper-evident incident telemetry.
