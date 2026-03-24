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

---

## EPICS & Atomic Subtasks with Time Estimates

### EPIC 1: Navigation & Layout Foundation
**Goal:** Sticky navbar, mobile menu, smooth scrolling, brand consistency.

**Atomic Subtasks:**
1. Open the single-file `index.html` in VS Code. → **2 min**
2. Confirm or add Tailwind CDN script in `<head>`. → **3 min**
3. Update the logo text to exactly "Cesar A. Aguilar". → **5 min**
4. Change the CTA button text to your preferred phrasing (e.g. "Let's Collaborate"). → **5 min**
5. Add `class="scroll-smooth"` to the `<html>` tag. → **3 min**
6. Add `onclick="toggleMobileMenu()"` to every mobile menu link. → **8 min**
7. Test hamburger button on desktop. → **5 min**
8. Test mobile menu on phone / dev tools (iPhone viewport). → **10 min**
9. Adjust navbar scroll shadow/transition in JS if needed. → **10 min**
10. Commit changes. → **3 min**

**Epic 1 Total Estimate:** 54 minutes

### EPIC 2: Hero Section
**Atomic Subtasks:**
1. Update the hero `<h1>` with your exact name highlight. → **5 min**
2. Replace the main tagline paragraph with your bio sentence. → **8 min**
3. Update the location badge text. → **4 min**
4. Adjust the three trust badge numbers (years, projects, education). → **10 min**
5. Tweak gradient/opacity of the visual "CA" circle if desired. → **8 min**
6. Test both CTA buttons scroll to correct sections. → **7 min**
7. Commit changes. → **3 min**

**Epic 2 Total Estimate:** 45 minutes

### EPIC 3: About Section
**Atomic Subtasks:**
1. Paste first paragraph of your bio into the prose area. → **6 min**
2. Paste second paragraph. → **5 min**
3. Paste third paragraph. → **5 min**
4. Update the two differentiator card titles and short descriptions. → **12 min**
5. Replace placeholder LinkedIn URL with your real profile. → **5 min**
6. Update GitHub link to https://github.com/Blueavian9. → **4 min**
7. Adjust avatar placeholder size/position if needed. → **8 min**
8. Commit changes. → **3 min**

**Epic 3 Total Estimate:** 48 minutes

### EPIC 4: Skills & Technologies
**Atomic Subtasks:**
1. Update first frontend progress bar percentage (React). → **5 min**
2. Update second (Tailwind) percentage. → **4 min**
3. Update third (JS/TS) percentage. → **4 min**
4. Update first backend/cloud percentage. → **5 min**
5. Update second and third backend percentages. → **6 min**
6. Add one new tech pill (e.g. LangChain). → **5 min**
7. Add second new tech pill. → **5 min**
8. Scroll to section and test skill bar animations. → **8 min**
9. Commit changes. → **3 min**

**Epic 4 Total Estimate:** 45 minutes

### EPIC 5: Experience & Journey
**Atomic Subtasks:**
1. Update TalkAnimate date range. → **4 min**
2. Update TalkAnimate job title. → **4 min**
3. Rewrite/edit first bullet under TalkAnimate. → **8 min**
4. Edit second and third bullets. → **10 min**
5. Update Freelance/Bloomtech date range and title. → **6 min**
6. Edit Freelance bullets. → **10 min**
7. Update WGU education entry. → **7 min**
8. Commit changes. → **3 min**

**Epic 5 Total Estimate:** 52 minutes

### EPIC 6: Featured Projects (3 cards)
**Atomic Subtasks (repeat pattern per card — ~12–15 min per card):**

**Card 1 (AI Agent):**
1. Change emoji/gradient background. → **5 min**
2. Update the two tag spans. → **4 min**
3. Change project title. → **4 min**
4. Rewrite description paragraph. → **8 min**
5. (Optional) Add real GitHub/live link. → **6 min**

*(Repeat the same 5 steps for Card 2 and Card 3)*

**Epic 6 Total Estimate:** 60–75 minutes

### EPIC 7: Development Process
**Atomic Subtasks:**
1. Edit title + description of Step 01. → **8 min**
2. Edit Step 02. → **8 min**
3. Edit Step 03. → **8 min**
4. Edit Step 04. → **8 min**
5. Change icons/numbers if desired. → **10 min**
6. Commit changes. → **3 min**

**Epic 7 Total Estimate:** 45 minutes

### EPIC 8: Contact & CTA Section
**Atomic Subtasks:**
1. Replace placeholder email with your real email. → **5 min**
2. (Optional) Add real Formspree endpoint to form. → **10 min**
3. Test full form submit → success message flow. → **12 min**
4. Verify success message resets form correctly. → **8 min**
5. Commit changes. → **3 min**

**Epic 8 Total Estimate:** 38 minutes

### EPIC 9: Footer & Social Links
**Atomic Subtasks:**
1. Update copyright year. → **3 min**
2. Update GitHub icon link. → **4 min**
3. Update LinkedIn icon link. → **4 min**
4. Add X/Twitter link (if applicable). → **5 min**
5. Commit changes. → **3 min**

**Epic 9 Total Estimate:** 19 minutes

### EPIC 10: Animations, Interactions & Polish
**Atomic Subtasks:**
1. Adjust one hover transition speed (e.g. project cards). → **8 min**
2. Add one extra hover effect you liked from React version. → **10 min**
3. Run Lighthouse audit (Performance + Accessibility). → **10 min**
4. Fix the top 1–2 accessibility issues found. → **15 min**
5. Commit changes. → **3 min**

**Epic 10 Total Estimate:** 46 minutes

### EPIC 11: Vercel Deployment Fix & Dual Publishing
**Atomic Subtasks:**
1. Create `vercel.json` in React project root. → **5 min**
2. Paste correct build config into `vercel.json`. → **4 min**
3. Run `npm run build` and verify `dist/index.html` has content. → **10 min**
4. Push changes to GitHub. → **5 min**
5. In Vercel dashboard, promote latest deployment to Production. → **8 min**
6. Create new Vercel project for single-file HTML version. → **10 min**
7. Verify both live URLs load without blank page. → **10 min**
8. Commit changes in both repos. → **5 min**

**Epic 11 Total Estimate:** 57 minutes

### EPIC 12: Future / Optional Enhancements (Backlog)
- Port Chart.js radar chart from React → **~45 min**
- Add language toggle stub → **~30 min**
- Implement dark/light mode switch → **~60 min**
- Add testimonials section → **~40 min**

---

## How to Use This PRD Effectively

- **Recommended workflow:** Pick **one EPIC** per session.
- Complete subtasks in order — each is independent and testable.
- After every 3–4 subtasks, do a quick browser test + commit.
- Mirror high-impact changes in your React codebase when it feels natural.
- Track progress by checking off items (you can turn this into a checklist in VS Code or Notion).

**Pro tip:** Start with **EPIC 11** (Vercel fix) if the blank page is still bothering you — it will give you the biggest confidence boost.

Would you like me to:
- Convert any EPIC into a ready-to-use GitHub Issues template?
- Add priority levels (High/Medium/Low)?
- Create a simple progress tracker table?

Just say the word and we can keep refining or start executing the first EPIC together!