# Portfolio PRD

## Purpose

Create a high-conversion engineering portfolio that instantly communicates Cesar’s identity, availability, and recruiter-friendly action path. This document aligns the current branch work with a practical product strategy, decision criteria, and a structured delivery plan.

## Objective

Position the site as a polished Full Stack Cloud & AI Engineer portfolio that earns recruiter trust in under 10 seconds by:

- Making identity obvious on every screen
- Preserving a visible, persistent CTA
- Ensuring the hero is not hidden behind the Navbar
- Prioritizing the highest-value production project first
- Keeping color, layout, and theme behavior consistent

## Recruiter Conversion Test

A successful portfolio must answer these questions without scrolling:

1. What does Cesar build? -> Full Stack AI / Cloud SaaS applications
2. Is he available? -> Remote ready badge + contact email
3. How do I contact him? -> Resume / email / visible CTA

## Strategy

Improve clarity and credibility by treating the portfolio like a product landing page, not a generic personal page.

- Left-nav identity anchor: logo or name in Navbar
- Persistent recruiter CTA: `Resume` pill next to ThemeToggle
- Hero top padding: avoid sticky Navbar overlap
- Projects order: therapy app first, since it demonstrates paying users, Stripe, OpenAI, and production-readiness
- Dark mode scroll background fix: ensure legible nav links on scroll

## Task Framework

This PRD uses four engineering task categories to structure the work and support a continuous improvement loop.

### 1. Prompt Engineering

Define the portfolio’s message and recruiter-facing prompts.

Deliverables:

- Hero messaging that says who Cesar is and what he builds
- Availability badge text and email link
- Resume CTA copy that is clear and direct
- Navbar logo/name label that serves as a home anchor

### 2. Context Engineering

Control how content is framed and surfaced for recruiter context.

Deliverables:

- Navbar layout that exposes identity, nav, and action buttons immediately
- Hero spacing and page structure so the first visible screen is fully readable
- Project ordering that surfaces the therapy app first
- Open Graph meta tags in `index.html` for link previews and referral trust

### 3. Harness Engineering

Build the UI and code patterns that make the portfolio reliable, theme-safe, and maintainable.

Deliverables:

- Navbar `bg-app-surface/95 dark:bg-app-dark-surface/95` fix on scroll
- Theme toggle visuals consistent with the palette and accessible
- Tailwind `app.*` tokens as the single source of truth
- Mobile responsive hero card with `sm:w-64 sm:h-64` and mobile min-height support

### 4. Loop Engineering

Establish feedback loops for quality, performance, and recruiter signals.

Deliverables:

- Validation criteria for recruiter conversion
- Prioritized issue list: CTA, hero padding, project order, dark mode nav
- Post-merge review checklist for `npm audit fix`, SEO tags, and recruiter usability
- Document success metrics and next sprint items in PRD

## Loop Engineering Process

Use a strict plan-execute-verify-refine cycle for each implementation task.

1. PLAN: select the next atomic task from the checklist below.
2. EXECUTE: apply only the minimal code changes required for that task.
3. VERIFY: run `npm run build` and any available linting or static analysis.
4. CRITIQUE: compare the result against the PRD acceptance criteria. If the task fails, log the failure mode, adjust the plan, and retry.
5. STOP CONDITION: conclude only when every checklist item passes, code builds successfully, and the recruiter conversion criteria are met.

Limit retries to 3 iterations per task before escalating with blocker details.

## Atomic Task Checklist

- [ ] Fix Navbar scroll background for both light and dark modes
- [ ] Add a left-side identity anchor in the Navbar (logo or name) that scrolls to the top
- [ ] Add a persistent `Resume` pill button in the Navbar next to ThemeToggle
- [ ] Add hero top padding (`pt-24` or `pt-28`) so the availability badge is not hidden by the Navbar
- [ ] Add mobile hero min-height support and responsive photo card sizing (`sm:w-64 sm:h-64`)
- [ ] Ensure the therapy app is the first card in the `Projects` grid
- [ ] Add Open Graph meta tags to `index.html` for social sharing
- [ ] Verify the recruiter conversion test passes on a live preview

## Acceptance Criteria

The current branch is complete when all of these are true:

- Navbar includes a left identity anchor and a right `Resume` pill button
- Scrolled Navbar uses a readable background in both light and dark mode
- Hero wrapper has `pt-24` or `pt-28` so the availability badge is visible on load
- Therapy app project card is first in the Projects grid
- Dark mode theme works consistently across components
- CTA is recoverable from the UI even if the hero content is not visible
- Recruiter conversion questions can be answered in under 10 seconds

## Success Metrics

- Recruiter can answer the 3 conversion questions without scrolling
- Resume CTA is visible on desktop and mobile
- First project card is production-ready therapy app
- Navbar remains legible after scrolling

## Next Sprint / Backlog

- Run `npm audit fix` and verify no high-severity vulnerabilities remain
- Add Open Graph meta tags for social sharing
- Add link preview image or featured screenshot to `index.html`
- Improve project details copy and add one more production case study

## Notes

This PRD is intentionally tactical: it connects current frontend changes to measurable recruiter outcomes and provides a structured implementation plan for the next branch.
