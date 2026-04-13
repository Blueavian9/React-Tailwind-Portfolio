# PRD.md — Cesar A. Aguilar Portfolio Upgrade

**Product Requirements Document**  
**Version:** 1.7 (Portfolio roadmap — flagship rebuilds + batch hygiene)  
**Date:** April 13, 2026  
**Author:** Cesar A. Aguilar (with Grok)  
**Status:** In Progress (maintenance & optional backlog)

## Repository snapshot (latest check)

- **Branch:** `main` — **up to date** with `origin/main`
- **Working tree:** **clean** after each doc/code commit (re-check before releases)

---

## Executive Summary

Two deliverables from one repo:

- **React + Vite + Tailwind** — Primary SPA: theme (light/dark), full sections (Hero, About, Services, Projects, Contact, Blog, Footer), Formspree contact, `vercel.json` SPA rewrites.
- **Single-file HTML** (`portfolio-static.html` at repo root) — Fast static variant; SEO/OG tags, Formspree, process section; intended URL referenced in meta tags (`react-tailwind-portfolio-static.vercel.app`).

**Featured project URLs:** Do **not** wire per-repo links on the static page (or swap grid entries in React) until each new flagship repo is public, deployed, and README-ready. Until then, static featured cards use the **GitHub profile** link; `Projects.jsx` remains the live list of current work with pointers to this roadmap.

---

## Portfolio project replacement roadmap (planned)

This section is the **single planning source** for what replaces portfolio slots **1–4** and how to handle **5–9** without thrash. Code pointers: `src/components/Projects.jsx`, `portfolio-static.html` (featured strip).

### A. Meta-cognitive frame (how to decide, in order)

1. **Outcome** — For each slot, finish this sentence: “A hiring manager learns that I can ___.” If two ideas prove the same outcome, merge or defer.
2. **Constraints** — Time budget, recurring cost (e.g. K8s cluster), and dependencies (auth, WebSocket server, app store for RN). Put the expensive or fragile piece last once patterns exist.
3. **One flagship at a time** — One active “greenfield” repo until it has: public default branch, deployed demo, README with architecture diagram, and this PRD updated. Then start the next level.
4. **Portfolio sync rule** — When a flagship ships: update **React grid + static featured (if applicable) + PRD** in **one commit** so the site never points at empty repos.
5. **Retrospective** — After each flagship: one paragraph in README (“what broke, what I’d automate next”). That becomes interview content.

### B. Flagship replacements (slots 1–4 in `Projects.jsx` order)

| Slot | Working title | Intent (what it proves) | Notes |
|------|----------------|-------------------------|--------|
| **1** | **Smart Habit Tracker** — Valerie’s Wellness App + Habit Companion (React Native) | Therapists assign habits; clients track streaks/XP; **AI sentiment** on check-in notes; badges / tiers | Mobile + product + applied AI; good **first** flagship (visible end-to-end story). |
| **2** | **Real-time collaborative editor** — Cloud Ops AI Assistant + live incident runbook | **WebSockets**: two engineers edit AI-generated runbooks like Google Docs; low conflict | Realtime + DevOps domain; natural follow-on after APIs/auth from slot 1. |
| **3** | **Microservices visualizer → live platform** | **K8s**-orchestrated services, **Kafka/NATS** events, live traffic/pod health/logs in UI | Highest complexity; do **after** 1–2 so observability and backend patterns are warm. |
| **4** | *TBD* | Reserve until 1–3 are scoped; options: fourth vertical slice, shared platform spine (auth/tenant), or upgrade strongest legacy instead of a fourth greenfield | User to lock scope when Level 1–3 milestones exist. |

**Suggested build order (importance × dependencies):** **1 → 2 → 3**, then **4**. That order moves from mobile/product + AI → collaborative realtime → distributed systems, without paying cluster cost before you have backend habits.

### C. Batch plan for existing slots **5–9** (revive vs deprecate)

Goal: when you return “one project at a time,” you don’t re-discover state. For each repo in **5–9**:

1. **Label** — `revive` (ship small README + demo fix), `archive` (read-only + banner in README), or `merge` (ideas absorbed into a flagship).
2. **Minimum viable hygiene** (one session each): default branch builds, README “Status: active / maintenance / archived”, correct live URL or strikethrough, security (env samples, no secrets).
3. **Do not** block flagship **1–4** on 5–9 unless a dependency forces it (e.g. shared component lib).

### D. Checklist before any “wire URLs” task

- [ ] Repo is public (or demo is public with clear access).
- [ ] `README.md` has architecture + how to run.
- [ ] Deploy URL works (Netlify/Vercel/etc.).
- [ ] Replace entry in `Projects.jsx` and adjust `portfolio-static.html` featured cards if they showcase the same story.
- [ ] Bump this PRD version line + repository snapshot.

---

## EPICS & Atomic Subtasks (with Checkboxes)

### EPIC 1: Navigation & Layout Foundation
**Goal:** Sticky navbar, mobile menu, smooth scrolling, brand consistency.  
**Status:** ✅ COMPLETED  
**Estimated Total:** 54 min

- [✅] 1. Open the single-file `index.html` in VS Code. → **2 min**
- [✅] 2. Confirm Tailwind CDN script is in `<head>`. → **3 min**
- [✅] 3. Update logo text to exactly "Cesar A. Aguilar". → **5 min**
- [✅] 4. Update CTA button text to preferred phrasing. → **5 min**
- [✅] 5. Add `class="scroll-smooth"` to the `<html>` tag. → **3 min**
- [✅] 6. Add `onclick="toggleMobileMenu()"` to every mobile menu link. → **8 min**
- [✅] 7. Test hamburger button on desktop. → **5 min**
- [✅] 8. Test mobile menu on phone/dev tools. → **10 min**
- [✅] 9. Adjust navbar scroll shadow/transition if needed. → **10 min**
- [✅] 10. Commit changes. → **3 min**

### EPIC 2: Hero Section
**Status:** ✅ COMPLETED  
**Estimated:** 45 min

- [✅] 1. Update hero name highlight. → **5 min**
- [✅] 2. Replace tagline with exact bio sentence. → **8 min**
- [✅] 3. Update location badge. → **4 min**
- [✅] 4. Adjust trust badge numbers. → **10 min**
- [✅] 5. Tweak visual gradient if desired. → **8 min**
- [✅] 6. Test both CTA buttons. → **7 min**
- [✅] 7. Commit changes. → **3 min**

### EPIC 3: About Section
**Status:** ✅ COMPLETED  
**Estimated:** 48 min

- [✅] Profile photo integrated with gradient glow effect
- [✅] Bio/story copy updated (Neha, Munchie & Coco, job roles, volunteer work)
- [✅] Technical skills bars rendered
- [✅] Key achievements grid rendered
- [✅] GitHub + LinkedIn CTA (no "Talk to Me" button)
- [✅] Commit pushed — feat: EPIC 3 complete — about photo, GitHub/LinkedIn CTA, blog removed

### EPIC 4: Skills & Technologies
**Status:** ✅ COMPLETED  
**Estimated:** 45 min

- [✅] 1–3. Update frontend percentages → **13 min**
- [✅] 4. Update backend/cloud percentages → **6 min**
- [✅] 5–6. Add missing tech pills → **10 min**
- [✅] 7. Test skill bar animations → **8 min**
- [✅] 8–9. Commit & push → **8 min**

### EPIC 5: Experience & Journey
**Status:** ✅ COMPLETED (React — `src/components/Experience.jsx`)

**Notes:** Timeline, bullets, and tags are implemented in the SPA. `portfolio-static.html` uses a shorter alternate timeline (TalkAnimate / freelance / WGU); optional future task is copy parity between static and React.

- [✅] 1–7. Update dates, titles, and bullets. → **49 min**
- [✅] 8. Commit changes. → **3 min**

_LinkedIn “view full profile” / footer uses canonical URL (`/in/cesaradrianaguilar/`)._

### EPIC 6: Featured Projects
**Status:** 🔄 In progress — **UI done**; **content swap deferred** until flagship repos (see **Portfolio project replacement roadmap**)

- [✅] React: Project grid in `Projects.jsx` (images, links, hover sound guarded).
- [✅] Static: Featured strip uses **profile** link until new builds ship (no misleading per-repo URLs).
- [ ] Replace slots **1–4** with flagship projects when each repo + demo are ready.
- [ ] Batch-hygiene pass for slots **5–9** (README + demo + archive labels).
- [ ] Final “wire URLs” commit per **§D Checklist** in roadmap.

### EPIC 7: Development Process
**Status:** ✅ COMPLETED (static HTML — four-step process section)

**Notes:** The React app uses a **Services** section instead of the same four-step “process” IA. No change required unless you want structural parity.

- [✅] 1–5. Customize all 4 steps (static). → **42 min**
- [✅] 6. Commit changes. → **3 min**

### EPIC 8: Contact & CTA Section
**Status:** ✅ COMPLETED

- [✅] Contact email surfaced in React (`Contact.jsx`); static uses copy-to-clipboard / encoded email where applicable.
- [✅] Formspree endpoint `https://formspree.io/f/xovkeoew` — React (JSON) and static (`FormData`).
- [✅] Test form success flow (manual QA on both surfaces).
- [✅] Commits on previous feature batches.

### EPIC 9: Footer & Social Links
**Status:** ✅ COMPLETED (React app — PRD link-hygiene items 3–5)  
**Estimated:** 19 min

- [✅] 1. Remove dead `href="#"` placeholders (Privacy, Terms, Accessibility, Business Proposition / VC Funding). → **5 min**
- [✅] 2. Remove Facebook & Instagram; keep professional links only (LinkedIn + GitHub). → **4 min**
- [✅] 3. Unify LinkedIn URL to `https://www.linkedin.com/in/cesaradrianaguilar/` (Footer + Experience CTA). → **3 min**
- [✅] 4. Point Services “Read More” to `#contact` (no dead `#`). → **3 min**
- [✅] 5. Commit changes. → **3 min**

_Single-file HTML footer was already aligned (no FB/IG, no legal placeholders)._

### EPIC 10: Animations, Interactions & Polish
**Status:** 🔄 Partially completed

**Done:**

- [✅] Project cards: hover sound uses guarded `audio.play()` — `document.hasFocus()`, `try/catch`, and promise rejection handling; only triggered from `onMouseEnter` / `onClick` (not on mount).

**Remaining:**

- [ ] Broader animation/Lighthouse pass → **43 min**
- [ ] Commit if further polish ships → **3 min**

### EPIC 11: Vercel Deployment Fix & Dual Publishing
**Status:** ✅ COMPLETED

- [✅] 1. `vercel.json` at **repository root** (replaces misplaced file under `src/components/`)
- [✅] 2. SPA `rewrites` so client routes resolve to `index.html` (Vite)
- [✅] 3. `npm run build` verified in workflow
- [✅] 4. Committed & pushed
- [✅] 5. Production deployment (React) — as applicable
- [✅] 6. Static HTML deploy — second surface (see OG URL in `portfolio-static.html`)
- [✅] 7. Verify both live URLs periodically after changes
- [✅] 8. Ship commits with feature batches

### EPIC 12: Future / Optional Enhancements (Backlog)
**Status:** Not Started

- [ ] Port Chart.js skill visualization from React
- [ ] Add language toggle (English/Spanish/Hindi)
- [ ] ~~Implement dark/light mode switch~~ — **Done in React** (`App.jsx` + `localStorage` / system preference); optional: extend pattern to static HTML
- [ ] Add real testimonials section

---

## Post-PRD backlog (separate initiatives)

- [✅] CI pipeline — `.github/workflows/ci.yml` (`npm ci`, `npm run build` on `main` / PRs)
- [ ] Containerize the app (optional for Vercel-only workflow)
- [ ] Profile and fix slowness (Lighthouse, bundle analyzer, React Profiler)

---

## Quick Status Overview

| EPIC    | Status            | Notes                                      |
|---------|-------------------|--------------------------------------------|
| EPIC 1  | ✅ Completed      | 10/10 subtasks                             |
| EPIC 2  | ✅ Completed      | 7/7 subtasks                               |
| EPIC 3  | ✅ Completed      | 6/6 subtasks                               |
| EPIC 4  | ✅ Completed      | 5/5 subtasks                               |
| EPIC 5  | ✅ Completed      | React `Experience.jsx`                     |
| EPIC 6  | 🔄 In progress    | Flagship roadmap §; wire URLs when repos ship |
| EPIC 7  | ✅ Completed      | Static process; React uses Services        |
| EPIC 8  | ✅ Completed      | Formspree + email patterns                 |
| EPIC 9  | ✅ Completed      | 5/5 subtasks                               |
| EPIC 10 | 🔄 Partial        | Project audio guarded; Lighthouse open     |
| EPIC 11 | ✅ Completed      | Root `vercel.json` + dual publish          |
| EPIC 12 | 🗂 Backlog        | See list above                             |

---
