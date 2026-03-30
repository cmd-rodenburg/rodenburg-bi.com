# rodenburg-bi.com — Claude Code Instructions

> **Local context:** If `CONFIDENTIAL_BRIEF.md` exists in the project root, read it first.
> It contains client names, verified metrics, contact details, copy blocks, and business strategy
> that inform all content decisions. It is gitignored and will not be present in public forks.

## Project Overview

Personal freelance portfolio site for a Senior Data Engineer / BI Specialist.

**Tech Stack:** Vue 3 + TypeScript + Tailwind CSS + Vite. Routing via Vue Router. Serverless backend via Netlify Functions.

**Live URL:** rodenburg-bi.com

---

## Design System

**See:** `SKILL-rodenburg-styling.md` for complete color palette, component patterns, and styling conventions.

**Quick reference:**
- Primary accent: `moss-500` (#22C55E)
- Backgrounds: `gray-900`, `gray-800` (dark-mode-first)
- Text: `text-white` (headings), `text-gray-300` (body), `text-moss-500` (accent)
- Icons: Lucide Vue Next only
- Cards: `bg-gray-800 rounded-xl border border-gray-700 hover:border-moss-500`

---

## Component Conventions

- Components: `src/components/Sections/` or `src/components/AskAnne/`
- Pages: `src/pages/Home.vue`
- Routes: `src/router/index.ts`
- Use `<script setup lang="ts">` — no Options API
- Section IDs: `id="section-name"` for nav scroll targeting
- Dark mode: `dark:` Tailwind classes only
- Colors: Use existing `moss` and `gray` palette only
- Icons: Lucide Vue Next only — no flaticon/vecteezy

---

## File Structure

```
src/
  components/
    AskAnne/
      AskAnneWidget.vue
      ChatMessage.vue
      ChatInput.vue
    Diagnostic/
      DiagnosticSection.vue
      DiagnosticTree.vue
      DiagnosticQuestion.vue
      DiagnosticResult.vue
      diagnosticData.ts
    Sections/
      1_Main/
        0_ClientLogoStrip.vue
        1_HeroSection.vue
        2_AboutSection.vue
        2b_TimelineSection.vue
        3_FeaturedProjectsSection.vue
        4_ServicesSection.vue
        4b_HowIWorkSection.vue
        5b_DashboardSection.vue
        7_ContactSection.vue
        ArchitectureDiagramModal.vue
  pages/
    Home.vue
  config.ts
netlify/
  functions/
    chat.ts
```

---

## Tone

- **Direct** — No corporate fluff.
- **Warm** — Approachable, not salesy.
- **Confident** — Leads with proof, not promises.
- **Curious** — Interested in understanding problems, not just implementing solutions.

Copy pattern for service cards — name both layers:
- Line 1: What is built (engineering)
- Line 2: What the business gets (BI outcome)

---

## Out of Scope

- CMS or admin panel
- User authentication (except rate limiting on AI endpoint)
- Database (static site, JSON data)
- Multi-language i18n system

---

## Completed Features

- Node.js 24 on Netlify (`netlify.toml`)
- Decision Tree Diagnostic (`src/components/Diagnostic/`)
- Ask Anne chat widget (`src/components/AskAnne/`)
- Hero rewrite with outcome metrics and visitor-problem framing
- About section with science background and bridge-builder framing
- Project cards with verified metrics
- Client logo strip
- Service cards with DE+BI two-line framing; Lucide icons
- DACH/language signal in hero
- Animated count-up on metrics (scroll-triggered, respects `prefers-reduced-motion`)
- Technology filter chips on projects
- Career timeline (`2b_TimelineSection.vue`) with expandable cards
- Portfolio metrics dashboard (`5b_DashboardSection.vue`) with animated bar charts
- Architecture diagram modals on TDM, Solytic, and EON cards (`ArchitectureDiagramModal.vue`)
- "How I Work" section (`4b_HowIWorkSection.vue`) — three-phase engagement model
- TDM rehire pullquote above project filter chips
- Contact section rewrite with Discovery Day CTA

---

## Serverless Backend

Netlify Function at `netlify/functions/chat.ts`. Requires `ANTHROPIC_API_KEY` environment variable set in Netlify dashboard. CORS locked to production domain. In-memory rate limiter (20 req/hour per IP).

---

## Final Note

The goal is a site that **feels like the owner** — competent, warm, interesting — and **proves AI implementation skills** rather than just claiming them.
