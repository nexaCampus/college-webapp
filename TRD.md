# TRD.md — NexaCampus College Webapp Technical Requirements Document

## 1. System Architecture Overview

The NexaCampus College ecosystem operates as a modern distributed platform comprising:
1. **Frontend Web App (`college-webapp`):** Next.js 15 (App Router), React 19, TypeScript 5, and Tailwind CSS 3.4.
2. **Backend Services (`backend-college-go`):** Microservices written in Go (Golang 1.22+), providing high-throughput RESTful and gRPC endpoints.
3. **Authentication Layer:** Firebase Client SDK v11 (Google SSO, Phone SMS OTP via Firebase Auth), federated with Go backend JWT issuance.
4. **State Management & Caching:** TanStack React Query v5 for client cache synchronization and LRU caching.

```
+-------------------------------------------------------------+
|                      Client Webapp                          |
|         (Next.js 15 App Router • React 19 • Tailwind)       |
+-------------------------------------------------------------+
          |                                  |
          | Firebase SDK                     | REST / JSON
          v                                  v
+------------------------+        +---------------------------+
|  Firebase Auth (SMS)   |        |   Go Backend Services     |
|   Google OAuth 2.0     |        |  (/api/v1/college/...)    |
+------------------------+        +---------------------------+
```

---

## 2. Anti-Cheating & Proctoring Architecture (`useExamProctor.ts`)

The proctoring system enforces an uncompromising security boundary to prevent any unauthorized academic misconduct during online MCQ examinations.

### 2.1. Detection Vectors & Web APIs

| Violation Type | Web API / Detection Mechanism | Trigger Condition | Enforcement Action |
|---|---|---|---|
| **Tab Switching / Minimized Window** | `Page Visibility API` (`document.visibilityState`) | `document.hidden === true` | Instant Session Termination |
| **Window Defocus / App Switch** | Window Focus API (`window.onblur`) | Event `blur` fires on active window | Instant Session Termination |
| **Split-Screen / Floating App** | Viewport & Screen Geometry Delta | `(window.innerHeight / screen.availHeight) < 0.70` (without keyboard focus) | Instant Session Termination |
| **Fullscreen Exit** | Fullscreen API (`fullscreenchange`) | `!document.fullscreenElement` during exam | 5-Second Warning or Instant Termination |
| **Clipboard Copy / Paste** | Clipboard API & DOM Events | `copy`, `cut`, `paste` intercepted | `preventDefault()` + Violation Flag |
| **Inspection & DevTools** | Keyboard Event Listener | `F12`, `Ctrl+Shift+I`, `Ctrl+Shift+J`, `Ctrl+U`, `PrintScreen` | `preventDefault()` + Violation Flag |
| **Right-Click Context Menu** | Pointer Event Listener | `contextmenu` event fired | `preventDefault()` |
| **Screen Share / Recording** | Media Devices Probe | Detection of active screen capture tracks | Session Lockout |

### 2.2. Forensic Watermark & Telemetry Payload

A dynamic canvas overlay renders non-intrusive forensic watermark tokens at randomized coordinates:
```typescript
interface ViolationTelemetry {
  examId: string;
  studentId: string;
  rollNumber: string;
  timestamp: string; // ISO 8601 UTC
  violationType: 'SPLIT_SCREEN' | 'APP_SWITCH' | 'WINDOW_BLUR' | 'FULLSCREEN_EXIT' | 'KEY_VIOLATION';
  viewportWidth: number;
  viewportHeight: number;
  screenAvailWidth: number;
  screenAvailHeight: number;
  userAgent: string;
  incidentHash: string; // SHA-256 HMAC of telemetry signed on client
}
```

Upon violation trigger:
1. Telemetry is dispatched to Go backend via `navigator.sendBeacon('/api/v1/exams/violations', payload)` ensuring delivery even during page unload.
2. Local session state is locked and marked invalid.
3. Client immediately navigates to `/exams/terminated` with `sessionStorage` containing violation proof.

---

## 3. Student Authentication Architecture

### 3.1. Modalities & Token Exchange
1. **Student ID + Password:**
   - Client sends credentials directly to Go endpoint `POST /api/v1/auth/login`.
   - Returns `{ token: string, user: StudentProfile, refreshToken: string }`.
2. **Phone Number + Firebase SMS OTP:**
   - Client initializes `RecaptchaVerifier(container, { size: 'invisible' })`.
   - Calls `signInWithPhoneNumber(auth, phoneNumber, appVerifier)`.
   - On OTP submission: `confirmationResult.confirm(otpCode)`.
   - Resulting Firebase ID Token is exchanged with Go endpoint `POST /api/v1/auth/firebase-exchange`.
3. **Google Single Sign-On:**
   - Handled via `signInWithPopup(auth, googleProvider)`.
   - Token verified by backend against permitted campus domain (e.g., `@campus.edu`).

---

## 4. Typography, Assets & Styling Specifications

### 4.1. Fonts
- **Primary Interface Font:** Google Font `Poppins` (`--font-poppins`).
  - Weights: 300, 400, 500, 600, 700.
  - Used for buttons, navigation, headers, tables, and numeric data.
- **Handwritten / Marginalia Font:** `Virgil` (`Virgil.woff2` hosted in `/public/fonts/`).
  - Font family: `'Virgil', 'Caveat', cursive`.
  - Used for `.font-virgil` class on alerts, sketched arrows, sticky notes, and teacher marginalia.

### 4.2. Color Tokens (Collegiate Parchment Theme)
```css
:root {
  --color-surface: #f9f9ff;
  --color-surface-bright: #ffffff;
  --color-primary: #0c1a30; /* Deep Academic Navy */
  --color-primary-container: #1e3a8a;
  --color-secondary: #4059aa;
  --color-tertiary: #d97706; /* Burnished Amber */
  --color-on-surface: #111c2d;
  --color-on-surface-variant: #44474d;
  --color-outline: #75777e;
  --color-error: #ba1a1a;
  --color-success: #059669;
}
```

---

## 5. Go Backend API Endpoints (Specification)

| Endpoint | Method | Description |
|---|---|---|
| `/api/v1/auth/login` | POST | Authenticate student ID & password |
| `/api/v1/auth/firebase-exchange` | POST | Exchange Firebase JWT for session cookie |
| `/api/v1/student/profile` | GET | Retrieve student record, semester & GPA |
| `/api/v1/academics/courses` | GET | List enrolled courses, credits & syllabi |
| `/api/v1/attendance/summary` | GET | Monthly attendance counters & leave status |
| `/api/v1/exams/active` | GET | Retrieve proctored MCQ questions & exam timer |
| `/api/v1/exams/submit` | POST | Submit completed MCQ answers |
| `/api/v1/exams/violations` | POST | Ingest proctoring security breach telemetry |
| `/api/v1/results/transcript` | GET | Retrieve grade sheet, SGPA and CGPA history |
