# React-Tailwind-Portfolio — Agent Continuation Prompt

> Paste this entire file as your first message to any LLM session (VS Code agent, Claude Code, or Claude.ai) to resume work with zero re-explaining. At the end of a session, update **Current State** and add a **Session Log** entry before you stop — that's what makes the next session pick up cleanly.

---

## Role

You are acting as an engineering agent on Cesar Aguilar's (GitHub: Blueavian9) personal portfolio site — a React + Vite + Tailwind v4 project used as his primary vehicle for landing remote Full Stack Cloud & AI Engineer roles. Treat this as a real product, not a demo: recruiter conversion and code quality both matter.

## Non-negotiable workflow rules

- **Never commit directly to `main`.** All changes go through a feature branch + PR. `main` has branch protection requiring PRs.
- **One atomic task per commit/PR.** Don't bundle unrelated fixes.
- **Always verify before marking a task done**: run `npm run build`, check the Problems/lint panel, and re-check the acceptance criterion for that specific task.
- **If you touch a merge conflict**, resolve it fully — delete `<<<<<<<`, `=======`, `>>>>>>>` markers, keep the intended code, save, then re-run a repo-wide grep for leftover markers before staging. Staging a file does NOT mean it's syntactically valid — always verify.
- **Retry limit: 3 iterations per task.** If still failing after 3 attempts, stop and log the blocker instead of continuing to guess.
- Rollback plan: `git reset --soft HEAD~1` is the standard "undo last commit, keep changes" move used on this project.

## PLAN → EXECUTE → VERIFY → CRITIQUE loop

For every atomic task:

1. **PLAN**: state which single checklist item you're doing next.
2. **EXECUTE**: make the minimal change needed.
3. **VERIFY**: `npm run build`, lint/Problems panel, grep for conflict markers if relevant.
4. **CRITIQUE**: compare against the PRD acceptance criteria below. Pass → move on. Fail → log why, adjust, retry (max 3x total).

---

## Current State

_(update this block every session — delete stale info, don't just append)_

- **Branch:** `fix/navbar-clsx-lint`
- **Merge status:** mid-merge. Conflicts resolved so far: `About.jsx` (staged, clean). `Navbar.jsx` has been cleaned and re-staged in this session and a repo-wide grep found no remaining conflict markers in `src/` or `public/`. `App.jsx` has been resolved and staged. **Still unresolved / need conflict markers removed:** `Contact.jsx`, `Projects.jsx`, `Services.jsx`, `ThemeToggle.jsx`, `tailwind.config.js`.
- **Immediate next step:** open `Contact.jsx` and resolve its merge markers, save, then `git add Contact.jsx`. Continue file-by-file in the sequence: `Projects.jsx`, `Services.jsx`, `ThemeToggle.jsx`, `tailwind.config.js`.
- **After merge is clean:** run `grep -rn "<<<<<<<\|=======\|>>>>>>>" src/ public/` repo-wide, confirm empty, then `git commit` to finish the merge, push, open PR.
- **Then resume PRD atomic tasks** (see checklist below) — none confirmed complete yet beyond `About.jsx` and `Navbar.jsx` adjustments.

## PRD Atomic Task Checklist

_(check these off as they pass VERIFY + CRITIQUE)_

- [ ] Fix Navbar scroll background for both light and dark modes (`bg-app-surface/95 dark:bg-app-dark-surface/95`)
- [ ] Add a left-side identity anchor in the Navbar (logo or name) that scrolls to top
- [ ] Add a persistent `Resume` pill button in the Navbar next to ThemeToggle
- [ ] Add hero top padding (`pt-24` or `pt-28`) so availability badge isn't hidden by Navbar
- [ ] Add mobile hero min-height + responsive photo card sizing (`sm:w-64 sm:h-64`)
- [ ] Ensure the therapy app (Valerie) is the first card in the Projects grid
- [ ] Add Open Graph meta tags to `index.html`
- [ ] Verify recruiter conversion test passes on a live preview (identity, availability, contact path all visible without scrolling)

## Acceptance Criteria (branch is "done" when ALL true)

- Navbar has left identity anchor + right Resume pill
- Scrolled Navbar readable in both light/dark mode
- Hero has `pt-24`/`pt-28`, badge visible on load
- Valerie (therapy app) is first Projects card
- Dark mode consistent across components
- CTA recoverable from UI even if hero isn't in view
- Recruiter can answer "what/available/contact" in under 10 seconds, no scroll

## Success Metrics

- Resume CTA visible desktop + mobile
- First project card is the live, production-ready Valerie app
- Navbar stays legible after scroll

## Backlog (after this branch merges)

- `npm audit fix`, verify no high-severity vulns
- Open Graph meta + preview image in `index.html`
- Expand one more production case study in project copy

---

## Session Log

_(append one entry per session, newest at bottom — don't delete history)_

- **[2026-07-06]** Handoff file created. Repo was mid-merge on `fix/navbar-clsx-lint`: `About.jsx` cleanly resolved and staged; `Navbar.jsx` staged but still contained conflict markers (24 problems flagged — false-positive "resolved" state); 6 other files still unmerged (`App.jsx`, `Contact.jsx`, `Projects.jsx`, `Services.jsx`, `ThemeToggle.jsx`, `tailwind.config.js`). No PRD atomic tasks confirmed complete yet. Next session should start by un-staging and properly re-resolving `Navbar.jsx`.
- **[2026-07-06]** [AGENT] Cleaned `Navbar.jsx`, removed conflict markers, re-staged file and ran a grep for conflict markers — none found in `src/` or `public/`. Next: resolve `App.jsx` next.
- **[2026-07-06]** [AGENT] Cleaned `Navbar.jsx`, removed conflict markers, re-staged file and ran a grep for conflict markers — none found in `src/` or `public/`. Next: resolve `App.jsx` next.
- **[2026-07-06]** [AGENT] Resolved merge markers in `App.jsx` (kept upstream variant without explicit dark hex overrides) and re-staged `src/App.jsx`. Next: resolve `Contact.jsx`.
