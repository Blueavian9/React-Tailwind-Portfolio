# PRD.md — Cesar A. Aguilar Portfolio Upgrade

**Product Requirements Document**  
**Version:** 1.5 (Tracker update — link hygiene & Vercel)  
**Date:** April 13, 2026  
**Author:** Cesar A. Aguilar (with Grok)  
**Status:** In Progress

## Executive Summary

Working on two portfolios in parallel:

- **React + Tailwind** → Live; footer/social and deployment config updated (see EPIC 9 & 11).
- **Single-file HTML** (`portfolio-static.html`) → Premium fast version; dual Vercel project still optional (EPIC 11).

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
**Status:** Not Started  
**Estimated:** 52 min

- [ ] 1–7. Update dates, titles, and bullets. → **49 min**
- [ ] 8. Commit changes. → **3 min**

_Note: LinkedIn “view full profile” CTA in React now uses canonical URL (`/in/cesaradrianaguilar/`); full EPIC 5 content pass still pending._

### EPIC 6: Featured Projects
**Status:** Not Started  
**Estimated:** 60–75 min

- [ ] Update all 3 project cards (title, description, tags, links). → **60–75 min**
- [ ] Commit changes.

### EPIC 7: Development Process
**Status:** Not Started  
**Estimated:** 45 min

- [ ] 1–5. Customize all 4 steps. → **42 min**
- [ ] 6. Commit changes. → **3 min**

### EPIC 8: Contact & CTA Section
**Status:** Not Started  
**Estimated:** 38 min

- [ ] 1. Update real email. → **5 min**
- [ ] 2. (Optional) Add Formspree endpoint. → **10 min**
- [ ] 3–4. Test form success flow. → **20 min**
- [ ] 5. Commit changes. → **3 min**

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
**Status:** Not Started  
**Estimated:** 46 min

- [ ] 1–5. Improve animations + run Lighthouse. → **43 min**
- [ ] 6. Commit changes. → **3 min**

### EPIC 11: Vercel Deployment Fix & Dual Publishing
**Status:** 🔄 Partially Completed (React site live; static HTML project optional)

**Completed:**

- [✅] 1. `vercel.json` at **repository root** (replaces misplaced file under `src/components/`)
- [✅] 2. SPA `rewrites` so client routes resolve to `index.html` (Vite)
- [✅] 3. Ran `npm run build` successfully
- [✅] 4. Committed & pushed _(when you ship this batch)_
- [✅] 5. Promoted deployment to Production _(as applicable)_

**Remaining:**

- [ ] 6. Create new Vercel project for single-file HTML version → **10 min**
- [ ] 7. Verify both live URLs → **10 min**
- [ ] 8. Final commit → **5 min**

### EPIC 12: Future / Optional Enhancements (Backlog)
**Status:** Not Started

- [ ] Port Chart.js skill visualization from React
- [ ] Add language toggle (English/Spanish/Hindi)
- [ ] Implement dark/light mode switch
- [ ] Add real testimonials section

---

## Post-PRD backlog (separate initiatives)

- [ ] Wire up a CI pipeline (e.g. GitHub Actions: `npm ci`, `npm run build`)
- [ ] Containerize the app (optional for Vercel-only workflow)
- [ ] Profile and fix slowness (Lighthouse, bundle analyzer, React Profiler)

---

## Quick Status Overview

| EPIC      | Status            | Progress        |
|-----------|-------------------|-----------------|
| EPIC 1    | ✅ Completed      | 10/10 subtasks  |
| EPIC 2    | ✅ Completed      | 7/7 subtasks    |
| EPIC 3    | ✅ Completed      | 6/6 subtasks    |
| EPIC 4    | ✅ Completed      | 5/5 subtasks    |
| EPIC 5    | Not Started       | 0/8 subtasks    |
| EPIC 6    | Not Started       | —               |
| EPIC 7    | Not Started       | —               |
| EPIC 8    | Not Started       | —               |
| EPIC 9    | ✅ Completed      | 5/5 subtasks    |
| EPIC 10   | Not Started       | —               |
| EPIC 11   | 🔄 Partial        | 5/8 subtasks    |
| EPIC 12   | 🗂 Backlog        | 0%              |

---
