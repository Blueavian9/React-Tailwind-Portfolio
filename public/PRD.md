# Portfolio PRD — Cesar A. Aguilar
**Version:** 2.0 | **Goal:** Get hired remotely as a Full Stack / AI Engineer

---

## Problem
The portfolio exists and is live but doesn't convert fast enough.
Recruiters spend 8–15 seconds before deciding to read or bounce.
The current site doesn't give them an instant reason to stay.

## Target Audience
1. **Remote-first tech recruiters** — scanning 30+ portfolios/day
2. **Hiring managers** at startups / mid-stage companies building SaaS or AI products
3. **Freelance clients** needing a production-grade full-stack dev

## Single Job
Make Cesar look immediately hireable for a remote full-stack / AI engineer role
within the first viewport — before any scrolling.

---

## What Stays (Do Not Touch)
- React + Vite + Tailwind v4 stack
- Vercel deployment pipeline
- Formspree contact integration
- Chart.js skills visualization
- Section structure: Hero → About → Skills → Projects → Experience → Contact

## What Changes

### 1. Identity & Positioning
- **Title:** `Full Stack Cloud & AI Engineer` (already in meta — make it H1)
- **Tagline:** One tight sentence. "I build production SaaS apps powered by AI — currently open to remote roles."
- **Remove:** "Multilingual Support" section (adds noise, not signal for tech hiring)

### 2. Hero — The 8-Second Pitch
Must contain above the fold:
- Name + title
- One-line value prop
- Two CTAs: `Download Resume` (primary) + `See My Work` (secondary)
- Available badge: `🟢 Open to remote roles`
- Tech stack pill row (React, Node, OpenAI, AWS, Supabase, Stripe)

### 3. Color Palette — New Identity
**Signature:** Deep navy base + electric teal accent + warm off-white text
Intentional choice: avoids the "dark gray + blue" cliché while still reading as serious/technical.
Signals: precision, AI-native, trustworthy, modern.

| Role | Hex | Usage |
|------|-----|-------|
| Background | `#080D1A` | Page base |
| Surface | `#0F1829` | Cards, nav |
| Border | `#1E2D47` | Dividers |
| Accent | `#00D4AA` | CTAs, highlights, active nav |
| Accent dim | `#00A882` | Hover states |
| Text primary | `#F0F4FF` | Headings |
| Text secondary | `#8B9BB4` | Body, captions |
| Tech pill bg | `#112240` | Skill badges |

### 4. Projects — Lead with Credibility
Order:
1. **Valerie's Psychological Wellness** — live, real Stripe payments, Supabase, AI intake
2. **AI Agent (RAG + Tools)** — OpenAI, LangChain
3. **OpenAI API Demo Suite**
4. **Auth System** (if needed for breadth)

Each card must show: live link + GitHub + tech stack pills + one-line impact statement.

### 5. Skills Display
Keep Chart.js but simplify — recruiters don't read radar charts.
Add a simple tech pill grid above it for scannability.
Group: `Frontend` | `Backend` | `AI / Cloud` | `Dev Tools`

### 6. Typography
- Display: `Inter` (already available via Tailwind) — tight tracking, bold weight for hero
- Body: `Inter` regular
- Code/tech: `JetBrains Mono` for any code snippets or terminal moments

### 7. Available for Hire Badge
Sticky in nav (desktop) or top banner (mobile):
`🟢 Available for remote roles — cesar.aguilar.dev@gmail.com`

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