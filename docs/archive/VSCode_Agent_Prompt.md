# VS Code Agent Prompt — Finish Merge, Then Begin Loop Engineering

> Paste this whole file into your VS Code LLM chat (with filesystem + terminal access enabled). It's written so the agent reasons step-by-step (Chain of Thought) before each file edit, rather than guessing.

---

## Context

You have full read/write access to `C:\Users\cesar\Bloomtech-dir\React-Tailwind-Portfolio` and a Git Bash terminal in that directory. You are finishing an in-progress merge on branch `fix/navbar-clsx-lint`, then transitioning into PRD-driven feature work using a strict Loop Engineering cycle.

**Ground truth rule: don't trust file state from memory or from prior chat summaries — always `cat` or open the file fresh immediately before editing it, and re-check immediately after saving.** Several files in this repo have been incorrectly marked "resolved" while still containing conflict markers, so verification after every single edit is mandatory, not optional.

---

## Part 1 — Finish the merge (Chain of Thought required at each step)

For each file below, follow this reasoning loop out loud before acting:

1. **Observe**: read the file's current actual content (`cat` it or open it).
2. **Diagnose**: does it contain `<<<<<<<`, `=======`, or `>>>>>>>`? If yes, identify which side (upstream vs stashed/incoming) has the more complete/correct logic — don't default to "top half" or "bottom half" without reading both.
3. **Decide and state**: write one sentence explaining which side you're keeping and why, before editing.
4. **Edit**: remove markers, keep the decided content, save.
5. **Verify**: re-read the file, confirm zero marker strings remain, confirm the syntax is valid (matching brackets/tags).
6. **Stage**: `git add <file>` only after verification passes.

Files to process in this order:

1. **`tailwind.config.js`** — CURRENT KNOWN STATE: markers still present at lines ~9, ~29, ~37 per the Problems panel. The `colors.app` block may currently be missing entirely (check first). Correct resolution: keep the "Updated upstream" token set (it's the complete one — includes `accent-dim`, `pill`, and all `dark-*` tokens). Discard the "Stashed changes" side (it's a stripped-down subset). Do not touch `keyframes`/`animation`/`plugins` — those were never in conflict.

2. **`Navbar.jsx`** — after `tailwind.config.js` is fixed and saved, open `Navbar.jsx` and find the scrolled/unscrolled background className (around line 71–75). Replace the hardcoded hex dark-mode classes (`dark:bg-[#0F1829]/95`, `dark:bg-[#080D1A]/80`) with the new tokens: `dark:bg-app-dark-surface/95` and `dark:bg-app-dark-background/80` respectively. Also update the border hex to `dark:border-app-dark-border/10`. This both resolves the `cssConflict` lint warning and satisfies PRD checklist item "Fix Navbar scroll background."

3. **`Contact.jsx`** — has 3 conflict blocks (~line 41, ~59, ~81 per earlier grep). Read both sides of each block fully before deciding.

4. **`Projects.jsx`** — read fully; determine if it's still genuinely conflicted or already resolved (status has been ambiguous across sessions — verify from scratch).

5. **`ThemeToggle.jsx`** — VERIFY ONLY. This was likely already fixed in a prior session (button had duplicate/orphaned JSX attributes outside any tag — this is now believed corrected to a single clean `<button>` with `bg-slate-200/80 ... dark:bg-slate-800/80` styling). Confirm no conflict markers and no orphaned JSX before staging.

After all 5 files pass verification:

```bash
grep -rn "^<<<<<<<\|^=======$\|^>>>>>>>" src/ public/ tailwind.config.js
```

This must return nothing. If it returns anything, stop and fix that file before proceeding — do not commit with any marker still present anywhere in the tree.

```bash
npm run build
```

This must succeed with no errors. If it fails, read the actual error message (don't guess), fix, re-run.

```bash
git add -A
git commit -m "Merge branch 'fix/navbar-clsx-lint' — resolve all remaining conflicts (tailwind.config.js, Navbar.jsx, Contact.jsx, Projects.jsx, ThemeToggle.jsx)"
git push origin fix/navbar-clsx-lint
```

Do **not** push to `main`. Confirm the current branch with `git branch --show-current` before pushing if there's any doubt.

Then open a PR (via `gh pr create` if the GitHub CLI is available, otherwise report back that a manual PR needs to be opened on GitHub).

---

## Part 2 — Loop Engineering (only start after Part 1 is fully committed and pushed)

Now work the PRD's Atomic Task Checklist one item at a time using this exact cycle from `PRD.md`:

1. **PLAN**: state the single next unchecked checklist item.
2. **EXECUTE**: make the minimal code change for that item only. Don't bundle other checklist items into the same edit.
3. **VERIFY**: `npm run build` + check the Problems panel for new errors introduced by this change.
4. **CRITIQUE**: re-read the specific PRD acceptance criterion for this item. Does the change actually satisfy it, not just "look plausible"? If it fails, log the failure reason, adjust, retry — max 3 attempts before stopping and reporting the blocker instead of continuing to guess.
5. Move to the next unchecked item only after CRITIQUE passes.

Checklist, in priority order (already-satisfied items from Part 1 are marked):

- [x] Fix Navbar scroll background for both light and dark modes — _done in Part 1 via tailwind tokens_
- [ ] Add a left-side identity anchor in the Navbar (logo or name) that scrolls to top — _note: Navbar.jsx already has a `C·A` logo button wired to `smoothScrollTo("home")`; verify this satisfies the criterion before treating it as new work_
- [ ] Add a persistent `Resume` pill button in the Navbar next to ThemeToggle — _note: Navbar.jsx already has a Resume `<a>` pill; verify it renders correctly at all breakpoints before treating as new work_
- [ ] Add hero top padding (`pt-24` or `pt-28`) so availability badge isn't hidden by Navbar
- [ ] Add mobile hero min-height + responsive photo card sizing (`sm:w-64 sm:h-64`)
- [ ] Ensure the therapy app (Valerie) is the first card in the Projects grid
- [ ] Add Open Graph meta tags to `index.html`
- [ ] Verify recruiter conversion test passes on a live preview (run `npm run dev`, view without scrolling: can you tell what Cesar builds, that he's available, and how to contact him?)

Two items above are flagged as possibly already done — don't blindly re-implement them. Actually inspect the current rendered Navbar first (read the file, and if a dev server is running, look at the live output) and only make changes if the acceptance criterion genuinely isn't met yet.

For each completed item: commit it on its own small commit, on a new feature branch off the now-merged `fix/navbar-clsx-lint` (or off `main` once the PR lands) — one branch/PR per checklist item, per the project's branch-protection workflow.

---

## Reporting back

After finishing Part 1, and after each Loop Engineering item in Part 2, output a short status block like:

```
COMPLETED: <task name>
VERIFIED: build passed / lint clean / criterion met because <reason>
COMMIT: <hash or "pending commit message X">
NEXT: <next task>
```

This is what gets copied back into `AGENT_HANDOFF.md`'s Session Log to keep continuity across sessions.
