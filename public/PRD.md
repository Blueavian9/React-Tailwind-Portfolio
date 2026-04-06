# PRD.md — Cesar A. Aguilar Portfolio Upgrade

**Product Requirements Document**  
**Version:** 1.2 (With Time Estimates)  
**Date:** March 24, 2026  
**Author:** Cesar A. Aguilar (with Grok)  
**Status:** Active — Highly Granular & Time-Boxed

## Executive Summary

This PRD breaks the entire portfolio upgrade into **tiny, atomic subtasks** with **realistic time estimates**.  
Most subtasks are designed to be completed in **5–20 minutes**, so you can make consistent progress even on busy days.

You can work on **both** your existing React + Tailwind portfolio **and** the new single-file HTML version in parallel.

**Total estimated effort:** ~6–10 hours (spread across days/weeks).
React-Tailwind-Portfolio 
# PRD.md — Cesar A. Aguilar Portfolio Upgrade

**Product Requirements Document**  
**Version:** 1.4 (Refined Checklist)  
**Date:** March 24, 2026  
**Author:** Cesar A. Aguilar (with Grok)  
**Status:** In Progress

## Executive Summary
Working on two portfolios in parallel:
- **React + Tailwind** → Now live again ✅
- **Single-file HTML** → Premium fast version (current focus)

---

## EPICS & Atomic Subtasks (with Checkboxes)

### EPIC 1: Navigation & Layout Foundation
**Goal:** Sticky navbar, mobile menu, smooth scrolling, brand consistency.  
**Status:** COMPLETED  
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
- [✅] 10. Commit changes. → **3 min** -- COMPLETED


### EPIC 2: Hero Section
**Status:** COMPLETED  
**Estimated:** 45 min

- [✅] 1. Update hero name highlight. → **5 min** 
- [✅] 2. Replace tagline with exact bio sentence. → **8 min**
- [✅] 3. Update location badge. → **4 min**
- [✅] 4. Adjust trust badge numbers. → **10 min**
- [✅] 5. Tweak visual gradient if desired. → **8 min**
- [✅] 6. Test both CTA buttons. → **7 min**
- [✅] 7. Commit changes. → **3 min** -- COMPLETED

### EPIC 3: About Section
**Status:** IN PROGRESS  
**Estimated:** 48 min

- [✅] Profile photo integrated with gradient glow effect
- [✅] Bio/story copy updated (Neha, Munchie & Coco, job roles, volunteer work)
- [✅] Technical skills bars rendered
- [✅] Key achievements grid rendered
- [✅] GitHub + LinkedIn CTA (no "Talk to Me" button)
- [✅] Commit pushed — feat: EPIC 3 complete — about photo, GitHub/LinkedIn CTA, blog removed

### EPIC 4: Skills & Technologies
**Status:** Not Started  
**Estimated:** 45 min

- [✅] 1–3. Update frontend percentages  → **13 min**
- [✅] 4. Update backend/cloud percentages → **6 min**
- [✅] 5–6. Add missing tech pills → **10 min**
- [✅] 7. Test skill bar animations → **8 min**
- [✅] 8–9. Commit & push → **8 min**


### EPIC 5: Experience & Journey
**Status:** Not Started  
**Estimated:** 52 min

- [ ] 1–7. Update dates, titles, and bullets. → **49 min**
- [ ] 8. Commit changes. → **3 min**


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
**Status:** Not Started  
**Estimated:** 19 min

- [ ] 1–4. Update copyright and all social links. → **16 min**
- [ ] 5. Commit changes. → **3 min**


### EPIC 10: Animations, Interactions & Polish
**Status:** Not Started  
**Estimated:** 46 min

- [ ] 1–5. Improve animations + run Lighthouse. → **43 min**
- [ ] 6. Commit changes. → **3 min**


### EPIC 11: Vercel Deployment Fix & Dual Publishing
**Status:** ✅ Partially Completed (React site is live!)

**Completed:**
- [✅] 1. Created `vercel.json`
- [✅] 2. Pasted build config
- [✅] 3. Ran `npm run build`
- [✅] 4. Committed & pushed
- [✅] 5. Promoted deployment to Production

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

## Quick Status Overview

| EPIC       | Status              | Progress       |
|------------|---------------------|----------------|
| EPIC 1     | ✅ Completed        | 10/10 subtasks |
| EPIC 2     | ✅ Completed        | 7/7 subtasks   |
| EPIC 3     | ✅ Completed        | 6/6 subtasks   |
| EPIC 4     | ✅ In Progress      | 0/5 subtasks   |
| EPIC 11    | 🔄 Partially Done   | 5/8 subtasks   |
| EPIC 5–10  | Not Started         | 0%             |
| EPIC 12    | 🗂 Backlog          | 0%             |
---

