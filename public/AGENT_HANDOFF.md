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
- **Terminal paste caution:** the Git Bash terminal in this environment has been observed to silently drop standalone `<a` lines (a lone JSX opening tag on its own line) during large multi-line pastes or heredocs. After any large paste, sanity-check with `grep -n "^\s*<a$" <file>` (or the equivalent for whatever tag matters) before trusting the file. Prefer small, targeted `sed -i` edits over full-file pastes when possible.

## PLAN → EXECUTE → VERIFY → CRITIQUE loop

For every atomic task:

1. **PLAN**: state which single checklist item you're doing next.
2. **EXECUTE**: make the minimal change needed.
3. **VERIFY**: `npm run build`, lint/Problems panel, grep for conflict markers if relevant.
4. **CRITIQUE**: compare against the PRD acceptance criteria below. Pass → move on. Fail → log why, adjust, retry (max 3x total).

---

## Current State

_(update this block every session — delete stale info, don't just append)_

- **`main` is fully clean and verified.** Confirmed via `git status` (up to date, nothing to commit), `npm run build` (passes, 47 modules, only cosmetic CSS `#`-comment warnings, non-blocking), and `grep -n "^\s*<a$" src/components/Navbar.jsx` (returns exactly 3 lines — mailto link, desktop Resume pill, mobile Resume link).
- **PRD checklist status:**
  - ✅ Navbar scroll background fix — fully resolved, uses `app-dark-surface`/`app-dark-background`/`app-dark-border` tokens
  - ✅ Left identity anchor (`C·A` logo) — confirmed present
  - ✅ Resume pill button — confirmed present (desktop + mobile)
  - ⬜ **NEXT →** Add hero top padding (`pt-24` or `pt-28`) so availability badge isn't hidden by Navbar
  - ⬜ Mobile hero min-height + responsive photo card sizing (`sm:w-64 sm:h-64`)
  - ⬜ Ensure the therapy app (Valerie) is the first card in the Projects grid
  - ⬜ Add Open Graph meta tags to `index.html`
  - ⬜ Verify recruiter conversion test passes on a live preview
- **Immediate next step:** `git checkout -b feat/hero-padding-fix` off current clean `main`, review `Hero.jsx`, apply padding fix, verify with `npm run build`, commit, push, PR.
- **Minor backlog note:** `index.css` has `#`-style comment banners (e.g. `# ===== SPOTLIGHT EFFECT =====`) that esbuild's CSS minifier warns on (cosmetic only, doesn't break build) — swap to `/* */` next time that file is open. Also 7 Dependabot vulnerabilities (3 high, 3 moderate, 1 low) flagged on every push — matches existing PRD backlog item `npm audit fix`, worth doing before recruiter outreach.

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
- Clean up `#`-style comment banners in `index.css`

---

## Session Log

_(append one entry per session, newest at bottom — don't delete history)_

- **[2026-07-06]** Handoff file created. Repo was mid-merge on `fix/navbar-clsx-lint`: `About.jsx` cleanly resolved and staged; `Navbar.jsx` staged but still contained conflict markers (24 problems flagged — false-positive "resolved" state); 6 other files still unmerged (`App.jsx`, `Contact.jsx`, `Projects.jsx`, `Services.jsx`, `ThemeToggle.jsx`, `tailwind.config.js`). No PRD atomic tasks confirmed complete yet.
- **[2026-07-06]** Cleaned `Navbar.jsx` and `App.jsx`, re-staged both, confirmed no remaining markers via grep at that point.
- **[2026-07-06]** Fixed `ThemeToggle.jsx` — file had a stray orphaned `className`/`aria-label` pair sitting outside any JSX tag (leftover half of an unresolved conflict), causing a `ts(1382)` parser error. Rebuilt as a single clean `<button>`.
- **[2026-07-06]** Resolved `tailwind.config.js` conflict — kept the fuller "Updated upstream" token set (`accent-dim`, `pill`, full `dark-*` token family) over the stripped-down incoming side. Updated `Navbar.jsx` scroll-background classes to use the new `app-dark-surface`/`app-dark-background`/`app-dark-border` tokens instead of hardcoded hex, clearing the Tailwind IntelliSense `cssConflict` warning.
- **[2026-07-06]** Found `Contact.jsx` was not actually conflict-marker-broken but had two entire competing designs interleaved without markers (mismatched `<div>`/`<form>`/`<section>` nesting causing esbuild failures). Rebuilt as a single clean version using the `app-*` token design, discarding the older `min-h-screen` gradient/`bg-white` design entirely.
- **[2026-07-06]** **MERGE COMPLETE.** `npm run build` passed clean. Opened PR #23, merged into `main` (2 commits, 10 files changed, 3/3 checks passed).
- **[2026-07-10]** Discovered `Navbar.jsx` cssConflict lint warning was never actually fixed on `main` despite prior session claiming so. Attempted fix via select-all-paste in VS Code failed silently multiple times, producing duplicated/interleaved div blocks (same corruption pattern as the earlier `Contact.jsx` incident).
- **[2026-07-10]** **Root cause found:** the Git Bash terminal drops standalone `<a` lines (JSX opening tag alone on its own line) during large multi-line pastes, including heredocs. Confirmed via `grep -n "^\s*<a$"` returning 0 when it should have returned 3. Fixed using targeted `sed -i '/pattern/i\<a'` insertions instead of full-file pastes — reliable, no corruption.
- **[2026-07-10]** Opened PR #25 (`fix/navbar-token-cleanup` → `main`). Hit a real merge conflict in `tailwind.config.js` (two divergent token sets) — resolved by keeping `origin/main`'s fuller token set (includes `accent-dim`, `card`, `pill`, needed by `Contact.jsx`) via heredoc rewrite. Also found a stray uncommitted-to-remote commit on local `main` (`f7224b7`, superseded Navbar token work) causing a second local-only merge conflict — resolved by hard-resetting local `main` to `origin/main` after PR #25 merged.
- **[2026-07-10]** **FULLY RESOLVED.** `main` confirmed clean: `git status` clean, `npm run build` passes, all 3 `<a>` tags present in `Navbar.jsx`. Navbar scroll-background PRD task is done for real this time. Pivoting to hero top padding next.
