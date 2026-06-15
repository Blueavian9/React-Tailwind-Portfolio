# PRD.md — Cesar A. Aguilar Portfolio Upgrade

**Product Requirements Document**
**Version:** 2.0 (Summer 2026 — Mid-Senior Hiring Sprint)
**Date:** June 15, 2026
**Author:** Cesar A. Aguilar
**Status:** 🔴 Active Sprint — EPIC 6 is the current critical path

## What changed in v2.0 vs v1.7

| Change | Reason |
|---|---|
| Added EPIC 13: Security hardening (esbuild CVE closed) | Completed today — GHSA-gv7w-rqvm-qjhr patched |
| Added EPIC 14: eslint v9 migration | Completed today — flat config live |
| Added EPIC 15: Dependabot automation | Completed today — .github/dependabot.yml live |
| EPIC 6 expanded: 6 projects scoped (3 real + 3 parked) | Aligned to micro1 gap analysis + Phase 1–4 hiring plan |
| Phase 1–4 hiring plan integrated | From mentor CoT doc, May 2026 |
| Metacognitive Architecture Questionnaire added | Required for K8s Visualizer interview prep |
| DSA sprint tracker added | 6-week plan, Week 1 starts now |

---

## Repository snapshot (June 15, 2026)

- **Branch:** `main` — up to date with `origin/main`
- **Security:** esbuild >=0.28.1 (overrides), 0 high vulnerabilities ✅
- **eslint:** v9 flat config (eslint.config.js), 0 errors, 16 warnings ✅
- **Dependabot:** Weekly Monday scans, semver-major ignored ✅
- **Vercel:** Production live, eslint-plugin-react-refresh peer dep resolved ✅
- **Pending Dependabot rescan:** GitHub alert will auto-clear within ~1hr

---

## Executive Summary

The portfolio has two surfaces (React SPA + static HTML) and is structurally complete (EPICs 1–5, 7–9, 11 done). The critical remaining work is **EPIC 6: 6 flagship projects** that prove Mid-Senior capability to hiring managers in under 60 seconds.

**The micro1 diagnosis (from mentor CoT, May 2026):**
- Production skills: mid-senior ✅
- DSA/algorithm fluency: beginner-intermediate ❌ — fixable in 6–8 weeks
- Think-aloud protocol: needs practice ❌
- System design vocabulary: not yet visible ❌

**The portfolio gap:** Projects 1–4 slots still show legacy work. Flagships are planned but not shipped. This PRD is the single source of truth for closing that gap.

---

## EPIC 6: Featured Projects — Full 6-Project Roadmap

**Status:** 🔴 Critical path — blocks all hiring momentum

### The 6-Project Strategy

| # | Project | Proves | Market Signal | Status |
|---|---|---|---|---|
| 1 | Smart Habit Tracker (Wellness App) | Mobile + AI + product | Therapist client story, React Native | 🗂 Parked — build first |
| 2 | Cloud Ops AI Assistant (Live Runbook Editor) | WebSockets + realtime + DevOps | Collaborative infra tooling | 🗂 Parked — build second |
| 3 | Microservices K8s Visualizer | Distributed systems + K8s + AI reasoning | Highest complexity anchor project | 🗂 Parked — build third |
| 4 | valeriemunozpsyc.com (Therapy Booking Platform) | Live production, Stripe, RBAC, email | Real paying client — #1 differentiator | ✅ Live — add to portfolio now |
| 5 | LangChain RAG / AI Pipeline | AI integration depth, OpenAI, AWS Polly | 2026 AI hiring signal | 🔄 Revive — README + deploy |
| 6 | AWS Polly V3 Text-to-Speech | AI + AWS integration | Cloud + AI breadth | 🔄 Revive — README hygiene |

**Build order: 4 → 5 → 6 (revive) in parallel with 1 → 2 → 3 (build)**

---

### Project 4: valeriemunozpsyc.com — Add to Portfolio NOW

This is your #1 hiring asset. It is live. It has a real client. It must be in slot 1 of Projects.jsx immediately.

**What to add to Projects.jsx entry:**
- Live URL: valeriemunozpsyc.com
- Stack tags: React, Node.js, Supabase, Stripe, PostgreSQL, RBAC, Email Automation
- Description: "Live therapy booking platform for a real therapist client. Handles patient bookings, Stripe payments, role-based access for clients/admins, and automated email notifications. HIPAA-conscious design."
- GitHub: link to repo
- Screenshot: add to /public/assets/

**README must include (before wiring URL):**
- [ ] Architecture diagram (client → API → Supabase → Stripe flow)
- [ ] How to run locally
- [ ] Live demo link
- [ ] "What I'd automate next" retrospective paragraph

---

### Project 5: LangChain RAG Pipeline — Revive

**Minimum viable hygiene (one session):**
- [ ] Default branch builds cleanly
- [ ] README: "Status: Active" + what it does in 2 sentences
- [ ] Add architecture diagram: User → API → LangChain → Vector DB → OpenAI → Response
- [ ] Deploy demo (Vercel/Railway/Render)
- [ ] Add to Projects.jsx with stack tags: LangChain, OpenAI, RAG, Node.js, Python

---

### Project 6: AWS Polly V3 Text-to-Speech — Revive

**Minimum viable hygiene (one session):**
- [ ] Default branch builds cleanly
- [ ] README: "Status: Active" + live demo link or GIF
- [ ] Add to Projects.jsx with stack tags: AWS Polly, React, Node.js, REST API
- [ ] Add "Retrospective" paragraph to README

---

### Project 1: Smart Habit Tracker (Flagship — Build First)

**Proves:** Mobile development + applied AI + end-to-end product thinking

**Tech stack:**
- React Native (Expo) — mobile
- Node.js + Express — API
- Supabase — auth + database
- OpenAI API — sentiment analysis on check-in notes
- Push notifications

**Core features:**
- Therapist assigns habits to clients
- Client tracks streaks + earns XP/badges
- AI reads check-in notes and flags sentiment ("struggling" vs "thriving")
- Therapist dashboard sees client progress

**Repo checklist before wiring URL:**
- [ ] Public default branch
- [ ] README with C4 architecture diagram
- [ ] Deployed demo (Expo Go link or web build)
- [ ] /deploy folder with Dockerfile or docker-compose.yml
- [ ] Tests section (even 50% coverage)
- [ ] Retrospective paragraph
- [ ] Update Projects.jsx + PRD in one commit

**Interview story:** "A therapist needed a way to assign habits and monitor patient progress between sessions. I built a mobile app with AI sentiment analysis so she gets flagged when a client is struggling without waiting for the next appointment."

---

### Project 2: Cloud Ops AI Assistant — Live Runbook Editor (Flagship — Build Second)

**Proves:** WebSockets + real-time collaboration + DevOps domain knowledge

**Tech stack:**
- React — frontend collaborative editor
- Node.js + Socket.io — WebSocket server
- OpenAI API — generates incident runbooks
- Redis — presence/state sync
- PostgreSQL — runbook persistence

**Core features:**
- Two engineers can edit the same AI-generated runbook simultaneously (like Google Docs)
- AI generates initial runbook from incident description
- Real-time cursor presence
- Version history

**Repo checklist before wiring URL:**
- [ ] Public default branch
- [ ] README with WebSocket architecture diagram
- [ ] Live demo (Railway or Render for WebSocket support)
- [ ] /deploy folder with docker-compose.yml
- [ ] Retrospective paragraph
- [ ] Update Projects.jsx + PRD in one commit

**Interview story:** "During a production incident, engineers waste time on runbooks. I built a real-time collaborative editor where AI generates the initial runbook and two engineers can refine it simultaneously — no merge conflicts, no Slack back-and-forth."

---

### Project 3: Microservices K8s Visualizer (Flagship — Build Third / Anchor Project)

**Proves:** Distributed systems, Kubernetes, event-driven architecture, AI reasoning — the highest-complexity project in your portfolio

**Tech stack:**
- Go or Node.js — K8s watcher (reads K8s API)
- NATS or Kafka — event bus
- React — live dashboard (pod health, traffic, logs)
- OpenAI API — metacognitive reasoning engine (distinguishes normal restart from critical failure)
- Prometheus + Grafana — observability
- Helm chart — IaC deployment

**Core features:**
- Watches K8s cluster in real time (pods, deployments, events)
- Events flow through NATS to AI reasoning layer
- AI distinguishes "normal restart" from "critical failure" with explanation
- Frontend shows live pod health, event stream, and AI diagnosis
- Crashes are caught by its own logging/telemetry (dogfooding)

**Architecture (C4 Model):**
```
K8s API → Watcher Service → NATS Event Bus → AI Reasoning Engine → WebSocket → React Dashboard
                                           ↓
                                    Prometheus metrics → Grafana
```

**Metacognitive Architecture Questionnaire (answer before interviews):**
- [ ] How does your Visualizer handle 10,000 pods? Where is the first bottleneck (CPU, memory, or network latency)?
- [ ] How do you handle out-of-order events when the network lags?
- [ ] How does the AI distinguish "normal restart" from "critical failure"? What is the reasoning logic?
- [ ] How are you securing the K8s API connection? Are you using RBAC?
- [ ] If your Visualizer crashes, how do you find out? What logging/telemetry did you implement?

**Repo checklist before wiring URL:**
- [ ] Public default branch
- [ ] README with C4 architecture diagram (K8s API → Watcher → Event Bus → AI → Frontend)
- [ ] /deploy folder with Dockerfile + Helm chart
- [ ] Tests section (unit + integration)
- [ ] Retrospective paragraph
- [ ] Update Projects.jsx + PRD in one commit

**Target companies for this project:** Datadog, Grafana, Pulumi, Vercel, HashiCorp, Weaveworks

**Interview story:** "I built a live visualizer that watches a Kubernetes cluster and uses AI to reason about what's happening — not just alerting on thresholds but explaining whether a pod restart is routine or the beginning of a cascade failure."

---

## Phase 1–4 Hiring Plan (from mentor CoT, May 2026)

### Phase 1: GitHub Storefront — Prove Mid-Senior in 60 Seconds

- [ ] Pin exactly 3 repos: K8s Visualizer, Cloud Ops AI Assistant, valeriemunozpsyc.com
- [ ] Unpin everything else
- [ ] Add C4 architecture diagram to K8s Visualizer README
- [ ] Add /deploy folder to each flagship (Dockerfile, docker-compose.yml, or Helm chart)
- [ ] Add Tests section to each flagship README
- [ ] Profile photo, bio, and location current on GitHub

### Phase 2: Metacognitive Research (Architecture Manifesto)

Answer each question in writing before your next interview:
- [ ] K8s scaling: how does the Visualizer handle 10k pods?
- [ ] Out-of-order event handling in event-driven systems
- [ ] AI reasoning logic: normal restart vs. critical failure
- [ ] K8s API security: RBAC implementation
- [ ] Self-observability: how do you detect your own system crashing?

### Phase 3: Hidden Market Outreach

- [ ] Identify 20 target companies (cloud-native, AI observability focus)
- [ ] Record 2-minute demo: terminal + network tab + architecture explanation
- [ ] Send 5 personalized engineering manager emails per day
- [ ] Template: "I've been researching [Company]'s approach to [Specific Tech]. I'm building an event-driven K8s visualizer with metacognitive AI reasoning. Looking for mid-senior role — would love to show you the architecture."

### Phase 4: Monetization + LinkedIn Authority

- [ ] Landing page for K8s Visualizer (Vercel) — collect beta emails
- [ ] Post 1 architectural breakdown per week on LinkedIn
  - Week 1: Why NATS over RabbitMQ for K8s events
  - Week 2: How AI reasoning differs from threshold alerting
  - Week 3: esbuild CVE story — security mindset post
  - Week 4: React Native vs. React Web tradeoffs for the Habit Tracker
- [ ] Decide open-core strategy: free = visualization, paid = AI reasoning engine

---

## DSA Sprint Tracker (6 Weeks — Start June 15, 2026)

**Target:** 75–100 LeetCode problems before next interview. Track in private GitHub repo.

| Week | Focus | Problems | Status |
|---|---|---|---|
| 1 | Arrays, Strings, Hash Maps | Two Sum, Valid Anagram, Contains Duplicate, Reverse String, Best Time to Buy Stock | 🔴 Not started |
| 2 | Sliding Window, Binary Search | Max Average Subarray, Longest Substring No Repeat, Binary Search, Find Min Rotated | 🔴 Not started |
| 3 | Stacks, Queues, Linked Lists | Valid Parentheses, Min Stack, Reverse Linked List, Merge Two Sorted Lists | 🔴 Not started |
| 4 | Trees + Recursion | Max Depth Binary Tree, Invert Binary Tree, Symmetric Tree, Level Order Traversal | 🔴 Not started |
| 5 | Graphs, BFS/DFS | Number of Islands, Course Schedule, Flood Fill, Word Ladder | 🔴 Not started |
| 6 | Dynamic Programming + Mock Interviews | Climbing Stairs, Coin Change, House Robber + 3x Pramp mock interviews | 🔴 Not started |

**Daily protocol (every session):**
1. RESTATE the problem in your own words
2. CLARIFY edge cases out loud
3. PLAN the approach and name the pattern
4. CODE with clear variable names
5. TEST with the given example, trace through manually
6. OPTIMIZE — state the complexity improvement

---

## EPICS 1–12 Status (carried from v1.7)

| EPIC | Status | Notes |
|---|---|---|
| EPIC 1 | ✅ Completed | Navigation & Layout |
| EPIC 2 | ✅ Completed | Hero Section |
| EPIC 3 | ✅ Completed | About Section |
| EPIC 4 | ✅ Completed | Skills & Technologies |
| EPIC 5 | ✅ Completed | Experience & Journey |
| EPIC 6 | 🔴 Critical path | 6 projects — see full roadmap above |
| EPIC 7 | ✅ Completed | Development Process (static) |
| EPIC 8 | ✅ Completed | Contact & CTA |
| EPIC 9 | ✅ Completed | Footer & Social Links |
| EPIC 10 | 🔄 Partial | Lighthouse pass remaining |
| EPIC 11 | ✅ Completed | Vercel Deployment |
| EPIC 12 | 🗂 Backlog | Language toggle, Chart.js port |

---

## EPICS 13–15 (New — Completed June 15, 2026)

### EPIC 13: Security Hardening
**Status:** ✅ Completed

- [✅] esbuild CVE GHSA-gv7w-rqvm-qjhr patched — upgraded to >=0.28.1 via overrides
- [✅] esbuild removed from devDependencies (was conflicting with overrides)
- [✅] npm audit: 0 high/critical vulnerabilities
- [✅] Committed and pushed to main

### EPIC 14: eslint v9 Migration
**Status:** ✅ Completed

- [✅] Upgraded eslint 8 → 9
- [✅] Migrated .eslintrc.cjs → eslint.config.js (flat config)
- [✅] Added full browser globals (localStorage, fetch, setTimeout, IntersectionObserver, etc.)
- [✅] Downgraded no-unused-vars to warn, turned off no-unescaped-entities
- [✅] 0 errors, 16 warnings (all harmless — unused React imports + dead Navbar vars)
- [✅] Build passing on Vercel

### EPIC 15: Dependabot Automation
**Status:** ✅ Completed

- [✅] .github/dependabot.yml created and pushed
- [✅] Weekly Monday scans at 09:00 PT
- [✅] semver-major updates ignored (no surprise breaking changes)
- [✅] Labels: dependencies, security
- [✅] commit-message prefix: fix (prod), chore (dev)

---

## Immediate Next Actions (priority order)

1. **TODAY** — Add valeriemunozpsyc.com to Projects.jsx (slot 1). It's live. Wire it now.
2. **THIS WEEK** — Revive LangChain RAG repo: README + deploy + add to Projects.jsx
3. **THIS WEEK** — Revive AWS Polly repo: README hygiene + add to Projects.jsx
4. **START DSA SPRINT** — Week 1 problems daily (1.5 hrs/day)
5. **WEEK 2** — Begin Smart Habit Tracker repo scaffold
6. **ONGOING** — 1 LinkedIn architectural breakdown post per week

---

## Portfolio sync rule (unchanged from v1.7)

When any flagship ships: update **React Projects.jsx + portfolio-static.html featured cards + this PRD** in **one commit**. Never point the portfolio at an empty or broken repo.

---

## Quick checklist before wiring any URL

- [ ] Repo is public
- [ ] README has architecture diagram + how to run
- [ ] Deploy URL works
- [ ] Projects.jsx updated
- [ ] portfolio-static.html featured cards updated if applicable
- [ ] PRD version bumped

---

*PRD v2.0 — Audited and updated June 15, 2026*
*Previous version: v1.7, April 13, 2026*