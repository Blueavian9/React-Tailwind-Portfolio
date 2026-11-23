# Agent Prompt — Replace placeholder card images in Projects.jsx

> Paste this whole file into the VS Code agent chat. It replaces the old `VSCode_Agent_Prompt.md` (merge task, finished).

Repo: `C:\Users\cesar\Bloomtech-dir\React-Tailwind-Portfolio`
Branch: `style/hero-redesign` (stay on it, never touch `main`)
Stack (trust package.json): React 18.3.1, Vite 7, Tailwind CSS 3.4.17.

First read `docs/AGENT_HANDOFF.md` and `docs/PORTFOLIO_PRD.md`. They are the source of truth.

## Rules

- One atomic task per commit. After each: `npm run build` passes, `npx eslint src` clean, Problems panel clean.
- Read each file fresh before editing and re-read it after saving.
- Max 3 retries per task, then stop and report the blocker.
- Do not reorder projects. The Online Booking Platform (id 1) stays first.
- Do NOT change any card text, links, badges, or tech tags. Image work only.
- Do not edit package.json or add dependencies. Ask before deleting anything outside the task.
- Do not invent images. Use only files in `src/assets/projects/_incoming/`.
- Do NOT use `fetchPriority` / `fetchpriority` anywhere (eslint issue seen in About.jsx).

## Phase 0 — READ-ONLY (no edits)

1. List files in `src/assets/projects/_incoming/` with format, pixel dimensions, and size in KB.
2. Grep every `picsum.photos` reference in `src/` and `index.html`.
3. Grep for conflict markers: `grep -rn "^<<<<<<<\|^=======$\|^>>>>>>>" src/ public/ tailwind.config.js`.
4. Propose a mapping of file to project id. If any filename is ambiguous, ask me.
5. Report, then STOP and wait for my approval.

## Phase 1 — after approval

**Task A (assets).** Move and rename files from `_incoming/` into `src/assets/projects/` as kebab-case: `online-booking-platform`, `ai-agent-rag`, `openai-api-demo`, `secure-auth-system`. Convert to WebP at 1280x720 (about 150 KB or less) ONLY if a converter runs via `npx` without changing package.json. Otherwise keep the originals and tell me. Delete `_incoming/` once files are moved.

**Task B (data).** Add `image` and `imageAlt` to each project object.

- Import with RELATIVE paths including the extension, e.g. `import onlineBooking from "../assets/projects/online-booking-platform.webp";`. Do not use the `@` alias.
- Alt text describes what is shown. Do not use the words "screenshot" or "image".
- Set `image: null` for any project without a file.

**Task C (markup).** Replace the picsum `<img>`:

- Wrapper: change `h-48` to `aspect-video` on the wrapper, keep `overflow-hidden rounded-3xl` and the existing border and dark classes.
- `<img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" width={1280} height={720} decoding="async" loading="lazy" />` on ALL cards.
- If `project.image` is null or `onError` fires, render a fallback panel: gradient using existing `app-*` tokens plus the project's initials or a react-icons glyph. No broken-image icon.
- Legible in light and dark mode, no layout shift.

**Task D (separate commit).** Delete the commented-out MOCK 1 block at the bottom of Projects.jsx.

## Acceptance criteria

- Zero `picsum.photos` references remain.
- Every card shows its image or the fallback with no layout jump.
- First card is still The Online Booking Platform.
- Build passes, lint clean, Problems panel clean.

## Report after each task

```
COMPLETED: <task>
VERIFIED: <build / lint / criteria result>
COMMIT: <hash or message>
NEXT: <next task>
```
