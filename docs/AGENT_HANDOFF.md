# React-Tailwind-Portfolio — Agent Handoff (Project Memory Bank)

> This file is the single source of truth. Read it first in every session. Update **Current State**, the **Roadmap** checkboxes, and add a **Session Log** entry before you stop.
> Last updated: 2026-11-19

## Roles

- **Cesar (owner / engineer in training):** supplies files, screenshots, and decisions. Runs commands. Approves every phase.
- **Claude (mentor / project manager):** plans, explains the "why", reviews output, writes prompts for the agent.
- **VS Code Cursor agent (builder):** edits repo files inside the rules below. Reports back after every task.

## Goal

Land a remote Full Stack / AI Engineer role. The portfolio (`react-tailwind-portfolio-murex.vercel.app`) must show the current design with real project images, honest copy, and working links.

## Stack (trust package.json over older docs)

React 18.3.1, Vite 7, Tailwind CSS 3.4.17 (`darkMode: "class"`, `tailwind.config.js` with `app-*` color tokens), react-icons, Formspree, clsx, tailwind-merge.
Tools: Git Bash (MINGW64), GitHub (PRs via browser, `gh` not installed), VS Code + Cursor agent, Vercel (deploys from `main`), Namecheap (domains/hosting), Neon (Postgres, replaces Supabase), Stripe (payments).

## Non-negotiable rules

1. Never commit to `main`. Branch, push, PR, merge.
2. One atomic task per commit.
3. Before every commit: `npm run build` passes, `npx eslint src` clean, Problems panel clean.
4. Read a file fresh before editing it; re-read it after saving.
5. Max 3 retries per task, then stop and log the blocker.
6. Ask before deleting files or changing dependencies. Do not edit files outside the current task.
7. Never invent facts about Cesar or his projects. Ask.
8. Never publish client or patient data in screenshots, copy, or commits.
9. Rollback: `git reset --soft HEAD~1`.

## Current State

- **Branch:** `style/hero-redesign`, pushed, working tree clean. Latest commit: see `git log --oneline -1`.
- **PR:** #54 open to `main`, no description yet.
- **Production (Vercel):** still the Oct 29 build from `main` (PR #53). It shows the old design.
- **Decision:** "Fix first". Replace placeholder card images before merging PR #54.
- **In progress:** capturing four 16:9 project screenshots (1280x720, dark mode) into `src/assets/projects/_incoming/` (folder exists, empty).
- **Known facts from repo inspection (2026-11-19):**
  - `picsum.photos` appears only in `src/components/Projects.jsx` (line ~79 live, line ~216 in the commented MOCK 1 block).
  - No conflict markers anywhere.
  - All `app-*` tokens needed for a fallback panel exist in `tailwind.config.js`.
  - `vercel.json` rewrite skips `/assets/`, so imported images serve correctly.
  - `fetchPriority` caused an eslint issue in About.jsx. Do not use it.

## Docs map (docs/ folder)

| File                            | Job                                                             |
| ------------------------------- | --------------------------------------------------------------- |
| `AGENT_HANDOFF.md`              | State and roadmap. Read first, update every session.            |
| `PORTFOLIO_PRD.md`              | What "done" means for this site (acceptance criteria).          |
| `AGENT_PROMPT_project-cards.md` | The current agent task prompt.                                  |
| `Continue_Prompt.md`            | Paste into a new chat to resume after running out of tokens.    |
| `archive/`                      | Finished or unrelated docs (old merge prompt, booking-app PRD). |

## Roadmap

### Phase 0 — Docs cleanup (do first, one commit)

- [x] 0.1 Put the four new docs above into `docs/`
- [x] 0.2 Move old `VSCode_Agent_Prompt.md` (merge task, finished) to `docs/archive/`
- [x] 0.3 Move the booking-app `PRD.md` to `docs/archive/booking-app-PRD.md` (or to that project's own repo). It describes a different product and lists a stale stack (Firebase, Hono, Cloudflare).
- [x] 0.4 Commit: `docs: reorganize project docs and add portfolio PRD`

### Phase 1 — Real project card images (current)

- [ ] 1.1 Capture 4 screenshots (booking landing page, AI agent app, OpenAI demo, auth login). No private data.
- [ ] 1.2 Copy into `_incoming/` as `online-booking-platform`, `ai-agent-rag`, `openai-api-demo`, `secure-auth-system`
- [ ] 1.3 Claude reviews screenshots for privacy and consistency
- [ ] 1.4 Agent Phase 0 audit (read-only) and Claude reviews the report
- [ ] 1.5 Agent Task A: move/rename assets (WebP 1280x720, ~150 KB, only if convertible without touching package.json)
- [ ] 1.6 Agent Task B: add `image` / `imageAlt` to project data (relative imports with extension, no `@` alias)
- [ ] 1.7 Agent Task C: swap the picsum `<img>` for the real one: `aspect-video` wrapper, `h-full w-full object-cover`, `width={1280} height={720}`, `decoding="async"`, `loading="lazy"` on all cards, NO fetchPriority; fallback panel when image is missing
- [ ] 1.8 Agent Task D: delete the commented MOCK 1 block (separate commit)
- [ ] 1.9 Verify: `npm run dev`, light + dark, phone width, `npm run build`, no picsum left

### Phase 2 — Card credibility (copy and links)

- [ ] 2.1 Booking platform `impact` text matches reality (Stripe live vs test mode, Neon vs Supabase). **Needs Cesar's answer.**
- [ ] 2.2 Booking platform Live Demo uses the stable production domain, not a deployment-specific Vercel URL
- [ ] 2.3 AI Agent card: correct Live Demo (currently points at the therapy site)
- [ ] 2.4 OpenAI card: correct Live Demo + GitHub pair (currently NASA app + Polly repo)
- [ ] 2.5 Tech tags and badges match each real repo

### Phase 3 — Ship

- [ ] 3.1 Push branch, check Vercel preview
- [ ] 3.2 Write PR #54 description
- [ ] 3.3 Merge PR #54, confirm Production deployment Ready, hard refresh the live site
- [ ] 3.4 Update this file and log the session

### Phase 4 — Polish backlog (separate branches, one PR each)

- [ ] Remove doubled padding on cards (`p-6` on both article and content div)
- [ ] Pin card buttons to the bottom (make article `flex flex-col`)
- [ ] favicon.ico 404
- [ ] Open Graph meta tags in `index.html`
- [ ] `npm audit fix`
- [ ] Decide on `portfolio-src.zip` and `portfolio-static.html` in the repo root
- [ ] `require()` in `tailwind.config.js` (ES module file); switch to import if it ever errors

## Open Questions (Cesar to answer)

1. Booking platform: is Stripe live with real payments, or test mode? Are there paying users today? Supabase or Neon for auth/data?
2. What is the stable production URL for the booking platform?
3. Correct Live Demo + GitHub repo for the AI Agent and OpenAI cards?
4. Which app should the OpenAI card's screenshot show?

## Session Log (newest at bottom)

- **[2026-11-19]** Phase 0 docs cleanup done (commit d942619): archived merge prompt and booking-app PRD, replaced Continue_Prompt.md, added AGENT_PROMPT_project-cards.md. PORTFOLIO_PRD.md added in a follow-up commit. Next: capture 4 card screenshots (task 1.1).

- **[2026-11-19]** Pushed 53976f6. Inspected repo: clean, tokens present, picsum only in Projects.jsx. Chose "fix first" path. Reviewed Projects.jsx and found: doubled padding, dead `description` field with a contradicting Stripe claim, deployment-specific demo URL, mismatched links on cards 2 and 3. Reorganized this doc into phases. Next: capture screenshots (task 1.1).
