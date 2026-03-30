# rodenburg-bi.com

Personal brand and client acquisition website for **Anne Rodenburg** — Senior Data Engineer & BI Specialist.

**Live:** [rodenburg-bi.com](https://rodenburg-bi.com)

---

## What this site does

Not a CV. A client acquisition tool. A visitor leaves knowing:

1. What Anne does (DE + BI — the full stack, not just one end)
2. What working with her looks like (three-phase: Analysis → Discovery → Implementation)
3. Whether their data problem fits (interactive diagnostic tree)
4. What she's actually delivered (verified metrics, architecture diagrams, real client names)

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Vue 3 + TypeScript |
| Styling | Tailwind CSS (dark-mode first, `moss` palette) |
| Build | Vite |
| Routing | Vue Router |
| Hosting | Netlify |
| Icons | Lucide Vue Next |
| Analytics | PostHog |
| Backend | Netlify Functions (Node 24, esbuild) |

---

## Project Structure

```
src/
  components/
    AskAnne/            ← Chat widget (showcase UI, honest redirect)
      AskAnneWidget.vue
      ChatMessage.vue
      ChatInput.vue
    Diagnostic/         ← Interactive data problem diagnostic tree
      DiagnosticSection.vue
      DiagnosticTree.vue
      DiagnosticQuestion.vue
      DiagnosticResult.vue
      diagnosticData.ts
    Layout/             ← Nav, Header
    Sections/1_Main/    ← Page sections (numbered for order)
      0_ClientLogoStrip.vue
      1_HeroSection.vue
      2_AboutSection.vue
      2b_TimelineSection.vue
      3_FeaturedProjectsSection.vue
      4_ServicesSection.vue
      4b_HowIWorkSection.vue
      5_SkillsSection.vue
      5b_DashboardSection.vue
      6_BlogSection.vue
      7_ContactSection.vue
      ArchitectureDiagramModal.vue  ← shared modal (TDM, Solytic, EON)
  pages/
    Home.vue
    BookMeeting.vue
  config.ts             ← Shared constants (ANNE_EMAIL)
  style.css             ← Global Tailwind + .card, .section-title, .prose-links

netlify/
  functions/
    chat.ts             ← Claude API proxy (dormant — rate-limited, ready to enable)

public/
  images/               ← Profile photo, logo, background
```

---

## Local Development

```bash
npm install
npm run dev
```

To test Netlify Functions locally (requires `netlify-cli`):

```bash
npm install -g netlify-cli
# Add ANTHROPIC_API_KEY=sk-ant-... to .env
netlify dev
```

Build for production:

```bash
npm run build
```

---

## Environment Variables

| Variable | Where | Purpose |
|----------|-------|---------|
| `ANTHROPIC_API_KEY` | Netlify dashboard | Claude API — for chat function when enabled |
| `VITE_POSTHOG_API_KEY` | `.env` | Analytics |
| `VITE_POSTHOG_HOST` | `.env` | Analytics host (eu.i.posthog.com) |

---

## Key Features

### Interactive Diagnostic Tree
`src/components/Diagnostic/` — A branching decision tree that starts from business pain, not solution category. Four main branches (trust, speed, adoption, greenfield), 3 levels deep, 10 terminal result nodes. Each result links to a relevant project and pre-fills a mailto subject line.

### Ask Anne Widget
`src/components/AskAnne/` — A polished floating chat UI that demonstrates AI implementation capability. Intentionally non-functional (redirects to email) — the honest explanation is part of the UX.

### Architecture Diagram Modals
`src/components/Sections/1_Main/ArchitectureDiagramModal.vue` — Shared modal component used by three project cards (TDM, Solytic, EON). Each shows the pipeline architecture with annotated design decisions: parallelisation strategy, Snowflake Bronze/Silver/Gold layering, and enterprise migration with zero-downtime cutover.

### How I Work Section
`src/components/Sections/1_Main/4b_HowIWorkSection.vue` — Three-phase engagement model (Analysis → Discovery Day → Implementation). Placed immediately after the Diagnostic section. Each phase card has a CTA: email, `/meet-Anne`, or scroll to `#projects`.

### Animated Metrics
`src/components/Sections/1_Main/2_AboutSection.vue` — Count-up animation on scroll using `@vueuse/core` `useIntersectionObserver`. Respects `prefers-reduced-motion`.

---

## Design System

- **Primary accent:** `moss-500` (#22C55E)
- **Backgrounds:** `moss-950` (body), `gray-800` (sections), `moss-900/40` (cards)
- **Text:** `text-white` (headings), `text-gray-300` (body), `text-moss-500` (accent)
- **Cards:** `.card` utility — `bg-moss-900/50 rounded-lg shadow-md border border-moss-800/20`
- **Icons:** Lucide Vue Next exclusively

---

## Deployment

Deployed automatically to Netlify on push to `main`.

- Build: `npm run build`
- Publish: `dist/`
- Node: 24
- Functions: `netlify/functions/` (esbuild bundler)

---

## Development Guidelines (for Claude Code)

See `CLAUDE.md` for full development brief, brand voice, copy conventions, and backlog.

**Quick rules:**
- `<script setup lang="ts">` only — no Options API
- Colors: `moss-*` and `gray-*` only — no `primary-*`
- Icons: `lucide-vue-next` only — no external CDN images
- Shared constants in `src/config.ts` (email address, etc.)
- New sections go in `src/components/Sections/1_Main/` with a numeric prefix
