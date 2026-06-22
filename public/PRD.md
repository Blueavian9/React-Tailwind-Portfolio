# Portfolio PRD

## Purpose

Provide a concise, recruiter-friendly product requirements document for the current portfolio update.

## Goal

Make the site clearly communicate that Cesar is a remote-ready Full Stack Cloud & AI Engineer who builds production SaaS applications.

## Key Changes Included

- Updated `Navbar.jsx` to remove duplicate nav/status markup and simplify desktop/mobile behavior.
- Standardized color tokens across `App.jsx`, `About.jsx`, `Contact.jsx`, `Projects.jsx`, `Services.jsx`, and `ThemeToggle.jsx`.
- Fixed Tailwind config duplication and ensured the custom `app.*` palette is the single source of truth.

## Hero Requirements

- Name and title visible immediately above the fold
- One sentence value proposition
- Two CTAs: `Download Resume` and `See My Work`
- Open availability badge with contact email
- Tech stack pills for key skills

## Design Direction

- Deep navy base with electric teal accent
- Clean, high-contrast card surfaces
- Minimal dark mode / light mode handling through theme-aware utilities

## Acceptance Criteria

- No duplicate Tailwind color key warnings
- Navbar renders cleanly on desktop and mobile
- Dark mode toggle functions correctly
- Hero image card tracks mouse movement using the card wrapper, not the image element

## Notes

This document is intentionally trimmed and focused on the current branch work. It is not a full long-form PRD; it is a practical summary for review and handoff.

---

## Out of Scope (This Sprint)

- New projects / case studies
- Blog section
- Animations (framer motion)
- Dark/light toggle

## Success Metric

A recruiter can answer these 3 questions in under 10 seconds without scrolling:

1. What does Cesar build?
2. Is he available?
3. How do I contact him?
