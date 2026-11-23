# React-Tailwind-Portfolio — Product Requirements (PRD)

> Scope: Cesar's personal portfolio site only. The booking-app PRD is a separate project and lives in `docs/archive/`.
> Status tracking lives in `docs/AGENT_HANDOFF.md`. This file defines what "done" means.

## Overview

A React + Vite + Tailwind portfolio used to land remote Full Stack / AI Engineer roles. Live at `react-tailwind-portfolio-murex.vercel.app`, deployed from `main` on Vercel.

## Audience

Recruiters and hiring managers with about 10 seconds of attention. Secondary: engineers reviewing code quality in the repo.

## Problem

Production is an older build. The newer design is on `style/hero-redesign` (PR #54) but project cards still show random stock photos, and some card text and links do not match reality.

## Current release scope (branch `style/hero-redesign`)

1. Project cards show real screenshots (or a clean fallback panel), never stock photos.
2. Card copy, badges, tech tags, and links are accurate.
3. The Online Booking Platform card stays first.
4. The branch merges to `main` through PR #54 and production updates.

## Acceptance criteria (the release is done when ALL are true)

### Cards and images
- Zero `picsum.photos` references in `src/` and `index.html`.
- Every card shows its image or the fallback panel. No broken-image icon, no layout jump on load.
- Images are 16:9, WebP preferred, about 150 KB or less each, with descriptive alt text.
- `loading="lazy"` on all card images. No `fetchPriority`.
- Light and dark mode are both legible. Responsive at mobile, tablet, desktop.
- The Online Booking Platform is the first card.

### Honesty and safety
- No claim on the site that the owner has not verified (payment mode, paying users, compliance).
- No client or patient data, emails, or tokens appear in any screenshot, copy, or commit.
- Each card's Live Demo and GitHub link point to the same project the card describes, and the demo URL is a stable domain.

### Quality gates
- `npm run build` passes. `npx eslint src` is clean. Problems panel is clean.
- No conflict markers: `grep -rn "^<<<<<<<\|^=======$\|^>>>>>>>" src/ public/ tailwind.config.js` returns nothing.
- Vercel preview checked before merge. Production deployment is Ready after merge.

### Recruiter test
- On load, without scrolling: what Cesar builds, that he is available, and how to contact him are all visible.
- Navbar has a left identity anchor and a Resume pill, and stays legible after scroll in light and dark mode.
- Resume CTA is visible on desktop and mobile.

## Out of scope for this release (backlog)

Card padding cleanup, bottom-pinned card buttons, favicon, Open Graph tags, `npm audit fix`, extra case studies, repo clutter (`portfolio-src.zip`, `portfolio-static.html`).

## Stack (trust package.json)

React 18.3.1, Vite 7, Tailwind CSS 3.4.17, react-icons, Formspree, clsx, tailwind-merge. Hosting on Vercel. Domain via Namecheap.

## Success metrics

- Production shows the new design and real card images.
- A recruiter can open any card's Live Demo and GitHub link and land on the matching project.
- Build and lint stay green on every merge.
