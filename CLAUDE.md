# rodenburg-bi.com — Development Brief v2

## TL;DR — What We're Building

A personal brand website that **proves Anne is different** — not through claims, but through the site itself. The website should feel like talking to Anne: direct, warm, competent, a little unexpected.

**Primary goal:** A visitor leaves thinking "She speaks my language — business impact *and* technical depth. I want to talk to her."

**Secondary goal:** Demonstrate AI fluency by having AI-powered features that actually work, not just buzzwords.

**The core tension to hold:** Anne is a Senior Data Engineer who thinks in Business Intelligence. Most data engineers can't translate their work into business outcomes. Most BI analysts can't build the pipelines that power them. Anne does both. The website must communicate this dual fluency — not as a list of tools, but as a *way of working*.

---

## Project Overview

Personal freelance website for **Anne Rodenburg** — Senior Data Engineer with a Business Intelligence background. She designs and builds the pipelines, warehouses, and data models that make BI actually work. Not just the dashboards at the end, and not just the ingestion at the start — the full stack, from raw source to business decision.

**Tech Stack:** Vue 3 + TypeScript + Tailwind CSS + Vite. Routing via Vue Router. Currently static — Phase 0 adds a lightweight serverless backend for AI features.

**Live URL:** rodenburg-bi.com

**Target audience:** DACH-market CTOs, Heads of Data, engineering leads, and technical recruiters seeking a senior freelance data engineer for 3–12 month engagements. Specifically: organisations that have *data* but not yet *insights* — where the BI layer exists but the engineering underneath is broken, slow, or untrustworthy.

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

## Brand Voice & Personality

Anne is **not** a generic BI consultant, and she is **not** a pure data engineer who hands off a pipeline and disappears. The website should reflect someone who holds both sides: the technical depth to build production-grade systems, and the BI instinct to know what *actually matters* to the business.

### Positioning Statement (internal — informs all copy)

> Anne builds the data infrastructure that makes Business Intelligence trustworthy.
> She speaks both languages: Databricks and Power BI. Azure Data Factory and stakeholder workshops.
> When the numbers are wrong, she can trace it from the dashboard back to the ingestion layer.
> That's rare. The site should make that rarity obvious.

### Tone
- **Direct** — No corporate fluff. Say what you mean.
- **Warm** — Approachable, not cold or salesy. Working with Anne should feel good.
- **Confident** — Leads with proof, not promises. Earned credibility.
- **Curious** — Genuinely interested in understanding business problems, not just implementing solutions.
- **A little unexpected** — A molecular medicine background. Won an international synthetic biology competition. Taught refugees to code. Not boring.

### The DE/BI Balance in Copy

Every section of the site should reflect *both* layers. Engineering depth earns the technical audience's respect. BI framing earns the business audience's attention. The copy should bridge them:

| Engineering frame | BI frame | Combined |
|---|---|---|
| "97% ingestion time reduction" | "Reports that used to take days are now ready each morning" | "97% faster ingestion — your team gets answers the same day, not next week" |
| "Snowflake + dbt warehouse" | "Single source of truth across departments" | "One warehouse, one version of the truth — no more spreadsheet debates" |
| "Parallelised ADF pipelines" | "Marketing and finance finally agree on the numbers" | "I built the pipeline. Now everyone trusts the dashboard." |

Use the combined framing wherever possible. Pure engineering claims speak only to engineers. Pure BI claims sound like every consultant. The combination is the differentiator.

### Voice Examples

**Instead of:** "I leverage cutting-edge technologies to drive data-driven transformation."
**Write:** "I build the pipelines your dashboards depend on. When your data is wrong, I can tell you exactly where it broke."

**Instead of:** "Let's connect to explore synergies."
**Write:** "Tell me what's broken. Let's figure out if I can help."

**Instead of:** "Passionate about data."
**Write:** "My background is in molecular medicine — where bad data costs lives. That standard carries into every pipeline and every dashboard I build."

**Instead of:** "Senior Data Engineer with BI experience."
**Write:** "I design the data architecture. I also care whether the dashboard at the end of it answers the right question."

### LinkedIn Alignment

Anne's LinkedIn voice is reflective, honest about learning, and shares real experiences (freelance → corporate transitions, what actually worked vs. what didn't). The website should feel like the same person.

Key themes from LinkedIn to echo:
- Speed vs. stability tradeoffs in pipeline design
- Going deep vs. wearing all hats as a freelancer
- The gap between what engineers build and what business users actually need
- Learning in public (e.g., "I'm still exploring how AI fits into data engineering")
- Building things that matter, not just things that work

---

## Development Phases

**Philosophy:** Ship fast. AI showcase is highest priority. Quick interactive wins over perfect phased rollout.

---

## Phase 0 — AI Showcase (PRIORITY: BUILD FIRST)

**Goal:** Prove AI fluency through the site itself. This is the differentiator. A data engineer who can actually implement AI, not just talk about it.

**Estimated effort:** 1–2 days

---

US-001 — "Ask Anne" Showcase Component (Non-Functional Display)

> **As a** visitor exploring the site,
> **I want** see a polished chat interface that demonstrates Anne can build AI features,
> **So that** I understand she has real AI implementation skills — even if the chat isn't live.

**What it is:**
A chat widget UI that looks functional but displays a friendly redirect message instead of actual AI responses.

**Technical implementation:**

Chat bubble UI (input field, send button, message bubbles)
On any submit OR on component mount, display a pre-written "Anne" response:

```
Hey! Yes, I built this chat interface — and yes, it could be powered 
by Claude right now. But AI tokens aren't free, and I'd rather spend 
that budget on actual client work. 😉

If you want to chat for real, I'm much better over email:
→ anne@rodenburg-bi.com

Or if you want to see if I can help with your data problem, 
try the diagnostic below — no AI required, just good questions.
```

Links to email (mailto:) and scrolls to decision tree section
Optional: 1-2 fake "visitor" messages pre-loaded to show the UI pattern ("What's your experience with Snowflake?")

Acceptance criteria:

- [ ] Chat UI renders with input field, send button, message bubbles
- [ ] Styled per SKILL file (dark theme, moss accents)
- [ ] On submit: displays the redirect message (no API call)
- [ ] Email link works (mailto:)
- [ ] "Try the diagnostic" scrolls to decision tree section
- [ ] Mobile responsive
- [ ] Position: dedicated section OR floating widget (bottom-right, collapsible)

**File structure:**
```
src/components/AskAnne/
  AskAnneWidget.vue    # Main widget container
  ChatMessage.vue      # Message bubble component
  ChatInput.vue        # Input + send button
```
---

### US-002 — Data Problem Diagnostic (Decision Tree)

> **As a** potential client unsure which data problem to solve first,
> **I want** an interactive diagnostic that reflects my situation, 
> **So that**  leave with a specific recommendation — and a reason to contact Anne.


**What it is:**
A branching decision tree that starts from business pain, not solution category. Each path leads to a specific recommendation + relevant project + CTA.


**Tree Structure:**
```
Q1: What's your biggest data frustration right now?

├─ "Our team argues about which numbers are correct"
│   └─ Q2: Where does the disagreement usually start?
│       ├─ "Different reports show different numbers"
│       │   └─ Result: DATA QUALITY / GOVERNANCE
│       │      → "You need a single source of truth."
│       │      → Links to: Solytic project (35% ingestion reduction)
│       │      → CTA: "Let's untangle this → Book a call"
│       │
│       └─ "Nobody trusts the data source itself"
│           └─ Q3: Is the issue with collection or transformation?
│               ├─ "Data comes in wrong/incomplete"
│               │   └─ Result: INGESTION / PIPELINE
│               │      → Links to: TDM project (97% improvement)
│               └─ "Data goes in fine but comes out wrong"
│                   └─ Result: TRANSFORMATION / DBT
│                      → Links to: EON project
│
├─ "Building reports takes days instead of hours"
│   └─ Q2: What slows it down most?
│       ├─ "Queries are painfully slow"
│       │   └─ Result: PIPELINE OPTIMIZATION
│       │      → Links to: Capgemini project (85% reduction)
│       ├─ "We have to manually combine data from multiple sources"
│       │   └─ Result: DATA WAREHOUSE ARCHITECTURE
│       │      → Links to: Junglück project (full restructure)
│       └─ "The data isn't where we need it"
│           └─ Result: DATA INTEGRATION
│              → Links to: TDM project
│
├─ "We have dashboards but nobody uses them"
│   └─ Q2: Why do you think that is?
│       ├─ "The data is outdated by the time they see it"
│       │   └─ Result: REAL-TIME / INCREMENTAL LOADS
│       │      → Links to: Solytic project
│       ├─ "They don't trust the numbers"
│       │   └─ (loops to trust branch above)
│       └─ "The dashboards don't answer their actual questions"
│           └─ Result: BI STRATEGY / REQUIREMENTS
│              → "This is a discovery problem, not a tech problem."
│              → CTA: "Let's talk about what your team actually needs"
│
└─ "We're starting from scratch / greenfield"
    └─ Q2: What's driving the project?
        ├─ "New company / no data infrastructure yet"
        │   └─ Result: GREENFIELD ARCHITECTURE
        │      → Links to: Solytic project (built from scratch)
        ├─ "Migrating away from legacy systems"
        │   └─ Result: MIGRATION / MODERNIZATION
        │      → Links to: TDM project
        └─ "Scaling beyond what current setup handles"
            └─ Result: SCALABILITY / PERFORMANCE
               → Links to: Capgemini project
```

**Acceptance criteria:**
- [ ] Minimum 3 levels deep on each branch
- [ ]  Each terminal node shows:
  - [ ] Problem category name
  - [ ] 1-2 sentence diagnosis
  - [ ] Link to relevant project card (scrolls to #projects with highlight)
  - [ ] Primary CTA: "Book a call" with pre-filled context (optional: pass diagnosis to   Calendly - [ ] URL param)
  - [ ] Secondary CTA: "Email me about this" (mailto: with subject line pre-filled)
- [ ] Back button to revise previous answer
- [ ] Progress indicator (e.g., "Question 2 of 3")
- [ ] Styled per SKILL file (cards, moss accents, dark bg)
- [ ] Mobile responsive
- [ ] Smooth transitions between questions (fade or slide)
- [ ] Section title: "Not sure where to start?" or "Diagnose your data problem"

**Position:** Between Services and Skills sections (or replaces Services if redundant)

**File structure:**
```
src/components/Diagnostic/
  DiagnosticSection.vue   # Main section wrapper
  DiagnosticTree.vue      # Tree logic + state
  DiagnosticQuestion.vue  # Single question display
  DiagnosticResult.vue    # Terminal node display
  diagnosticData.ts       # Tree structure as typed data
```
---

## Phase 0.5 — Infrastructure (Do Before Any Feature Work)

**Goal:** Keep the Netlify build healthy and on a supported runtime. Node.js 18 is end-of-life — Netlify warns on every deploy and will eventually break.

**Estimated effort:** 5 minutes

---

### US-050 — Upgrade Node.js to 24.x on Netlify

> **As a** developer deploying to Netlify,
> **I want** the build to run on a supported Node.js version,
> **So that** deploys don't fail or produce warnings as Node 18 reaches end-of-life.

**What to change:**

`netlify.toml` — already updated:
```toml
[build.environment]
  NODE_VERSION = "24"
```

**Acceptance criteria:**
- [ ] `netlify.toml` specifies `NODE_VERSION = "24"`
- [ ] Build completes without Node version warnings on Netlify dashboard
- [ ] All existing functionality works on Node 24 (Vite + Vue 3 are fully compatible)

**Note:** No `package.json` `engines` field update needed for a static site — `netlify.toml` is the authoritative source for the build runtime.

---

## Phase 1 — Quick Copy Wins (High ROI, Low Effort)

**Goal:** Fix the messaging. Replace generic copy with real proof points. 

**Estimated effort:** 2–4 hours

---

### US-101 — Rewrite Hero Section

> **As a** visiting CTO or recruiter,  
> **I want** to immediately understand who Anne is and why she's credible,  
> **So that** I don't bounce within 5 seconds.

**New copy:**

```
H1: Anne Rodenburg

Subtitle: Senior Data Engineer & BI Specialist — Azure · Databricks · Snowflake

Body: I build the data infrastructure that makes Business Intelligence
trustworthy. 97% faster pipelines. 85% less ingestion overhead.
Dashboards your team actually believes.

Available for DACH-market engagements in Dutch, English, and German.
```

**Framing note:** The subtitle should name both disciplines. "Senior Data Engineer & BI Specialist" positions Anne above pure DE contractors (who can't translate to business value) and above BI consultants (who can't build the plumbing). Neither alone is the differentiator — the combination is.

**CTAs:**
- Primary: "Schedule a call" → `/meet-Anne`
- Secondary: "See my work" → scroll to `#projects`

**Acceptance criteria:**
- [ ] H1 is Anne's name (personal brand)
- [ ] Subtitle includes core tech stack
- [ ] Body leads with 1–2 concrete metrics
- [ ] Language capability mentioned (DACH signal)
- [ ] Two CTAs: hard (book) and soft (scroll)
- [ ] Tech badges below hero link to `#skills`

---

### US-102 — Replace About Section Stats with Outcome Metrics

> **As a** potential client reviewing the About section,  
> **I want** to see measurable proof of impact rather than vanity counters,  
> **So that** I can assess whether Anne delivers results.

**Replace generic stats with:**

| Metric | Label |
|--------|-------|
| 97% | Pipeline time reduction |
| 85% | API ingestion time saved |
| 35% | Daily ingestion reduction |
| 1st / 268 | iGEM international rank |

**Acceptance criteria:**
- [ ] Four stats displayed in grid
- [ ] Each has metric (large, `text-moss-500`) + label (small, `text-gray-400`)
- [ ] Optional: tooltip with context on hover (e.g., "Achieved at TDM Systems through parallelization and dynamic mapping")

---

### US-103 — Add Real Metrics to Project Cards

> **As a** visitor reading the Featured Projects section,  
> **I want** each project to show a concrete business outcome,  
> **So that** I understand the scale and impact of Anne's work.

**Required metrics per project:**

| Project | Metric |
|---------|--------|
| TDM Systems | 97% reduction in ingestion time |
| Capgemini | 85% time reduction on API-based ingestions |
| Solytic | 35% reduction in daily ingestion load |
| EON | Add if metric exists in CV, otherwise "Enterprise-scale Snowflake + dbt" |
| Junglück | "Full data warehouse restructuring" or specific metric if available |

**Acceptance criteria:**
- [ ] Each project card displays one prominent metric
- [ ] Metrics styled with `text-moss-500`
- [ ] At minimum 5 projects shown (TDM, Capgemini, Solytic, EON, Junglück)

---

### US-104 — Add Science Background to About Section

> **As a** technical decision-maker,  
> **I want** to understand what makes Anne's perspective different,  
> **So that** I can assess her fit beyond a checklist of tools.

**Add to About section:**

```
My background is in molecular medicine — where bad data costs lives. 
I won first place in an international synthetic biology competition 
(iGEM, 1st of 268 teams). That standard of rigor carries into every 
pipeline and model I build.
```

**Acceptance criteria:**
- [ ] Science background mentioned explicitly
- [ ] iGEM win included with context (1st of 268)
- [ ] Framing connects science → data quality rigor

---

## Phase 2 — Credibility & Social Proof

**Goal:** Make the differentiators visible. A visitor who scrolls should encounter memorable, specific details.

**Estimated effort:** 4–6 hours

---

### US-201 — Add Client Logo Strip

> **As a** prospective client scanning the page,  
> **I want** to see which companies Anne has worked with,  
> **So that** I can quickly gauge her enterprise credibility.

**Implementation:**
- Horizontal strip with client logos: EON, Capgemini, Solytic, Accenture, TDM Systems
- Greyscale default, color on hover
- Position: between Hero and About, or between About and Projects
- Below logos: "TDM Systems brought Anne back by request to take their proof-of-concept to production."

**Acceptance criteria:**
- [ ] 5 logos displayed
- [ ] Greyscale → color on hover
- [ ] One-line social proof statement below
- [ ] Logos sourced legally (press kits or SVG recreations)

---

### US-202 — Replace Service Icons with Lucide

> **As a** visitor reviewing Services,  
> **I want** consistent, professional iconography,  
> **So that** the visual presentation matches the claimed expertise.

**Current problem:** Mixed external icon sources (flaticon, vecteezy) with inconsistent styles. Service copy also reads as pure-engineering — no BI outcome framing.

**Solution:** Replace all icons with Lucide Vue Next. Rewrite each service card to name the engineering layer *and* the business outcome it produces.

**Service copy pattern:**
- Line 1 (engineering): What Anne builds
- Line 2 (BI outcome): What the business gets

Example:
- Before: "Scalable, structured architecture ensuring efficient storage and retrieval"
- After: "I design the warehouse architecture. Your analysts stop waiting for queries to finish."

**Acceptance criteria:**
- [ ] All service icons from Lucide, styled `text-moss-500`
- [ ] Consistent size and color
- [ ] No external icon URLs
- [ ] Each service card uses the two-line engineering + BI framing

---

### US-203 — Add DACH/Language Signal to Hero

> **As a** German-speaking client,  
> **I want** to know Anne works in my language,  
> **So that** I feel confident about communication.

**Implementation:**
- Add to hero: "🇳🇱 🇬🇧 🇩🇪" flag emojis or text: "Working in Dutch, English, and German"
- Or include in subtitle: "Available for DACH-market engagements"

**Acceptance criteria:**
- [ ] Language capability visible in hero or directly below
- [ ] Not buried in footer or contact section

---

## Phase 3 — Interactive Engagement

**Goal:** Give visitors a reason to spend more than 60 seconds. Interactions should demonstrate BI thinking.

**Estimated effort:** 1–2 days

---

### US-301 — Animated Count-Up on Metrics

> **As a** visitor scrolling through the page,  
> **I want** key numbers to animate into view,  
> **So that** proof points are visually memorable.

**Implementation:**
- Metrics (97%, 85%, 35%, 268) animate from 0 on scroll-into-view
- Use VueUse `useIntersectionObserver`
- Duration: 1.2–1.8s, easing: ease-out
- Respect `prefers-reduced-motion`

**Acceptance criteria:**
- [ ] Numbers animate when scrolled into view
- [ ] Animation triggers once (not on every scroll)
- [ ] No animation if reduced-motion preference set

---

### US-302 — Technology Filter on Projects

> **As a** visitor who works with Databricks specifically,  
> **I want** to filter projects by technology,  
> **So that** I find relevant work quickly.

**Implementation:**
- Clickable tech filter chips above project grid
- Clicking filters visible project cards
- "All" chip resets filter
- Active chip: `bg-moss-500 text-white`

**Acceptance criteria:**
- [ ] Filter chips for major technologies (Databricks, Snowflake, dbt, Azure, Python)
- [ ] Filtering works reactively
- [ ] Active state clearly visible

---

### US-303 — Career Timeline Component

> **As a** recruiter reviewing Anne's experience,  
> **I want** a visual timeline with expandable detail,  
> **So that** I quickly grasp the scope without reading walls of text.

**Implementation:**
- New `TimelineSection.vue` between About and Projects
- Each node: company, role, dates, location
- Hover/click expands to show 1–2 key metrics
- TDM rehire marked specially ("Returned by client request")

**Acceptance criteria:**
- [ ] Timeline displays chronologically
- [ ] Expandable detail on interaction
- [ ] TDM rehire highlighted
- [ ] Mobile responsive (vertical layout)

---

## Phase 4 — Demonstration Features

**Goal:** The website itself proves Anne's skills. Show, don't tell.

**Estimated effort:** 2–3 days

---

### US-401 — Portfolio Metrics Dashboard

> **As a** visitor evaluating Anne's output,  
> **I want** to see a live snapshot of her professional activity,  
> **So that** I know she's active and producing real work.

**Implementation:**
- Dashboard section: projects by year, technologies used (bubble chart), GitHub activity (public repos)
- Data from static JSON or GitHub API
- Chart library: vue-chartjs or Apache ECharts

**Acceptance criteria:**
- [ ] At least 2 visualizations
- [ ] Styled to match dark theme
- [ ] Data is real (not placeholder)

---

### US-402 — Interactive Architecture Diagram

> **As a** technical visitor,  
> **I want** to see how Anne approached architecture, not just read about it,  
> **So that** I can evaluate her technical thinking.

**Implementation:**
- At least one project card includes expandable architecture diagram
- Built with Mermaid.js (renders from text, no image assets)
- Shown in modal or expandable panel
- Annotated with key decisions

**Acceptance criteria:**
- [ ] Diagram renders correctly
- [ ] Annotations explain technical choices
- [ ] Content is real (anonymized if needed)

---

## Content Reference — Verified Metrics

These are real, sourced from CV. Use exactly. Do not invent.

| Metric | Source | Placement |
|--------|--------|-----------|
| 97% reduction in ingestion time | TDM Systems | Hero, TDM card |
| 85% time reduction on API ingestions | Capgemini | Hero, Capgemini card |
| 35% daily ingestion reduction | Solytic | Solytic card |
| 1st place of 268 teams | iGEM 2015 | About section |
| 6+ years experience | CV | About |
| Trilingual NL/EN/DE | CV | Hero or contact |
| TDM client rehire | TDM 01/2026 | Social proof strip |

---

## Component Conventions

- Components: `src/components/Sections/` or `src/components/AskAnne/`
- Pages: `src/pages/Home.vue`
- Routes: `src/router/index.ts`
- Use `<script setup lang="ts">` — no Options API
- Section IDs: `id="section-name"` for nav scroll targeting
- Dark mode: `dark:` Tailwind classes only
- Colors: Use existing `moss` and `gray` palette only (see SKILL file)
- Icons: Lucide Vue Next only — no flaticon/vecteezy

---

## Out of Scope

- CMS or admin panel
- User authentication (except rate limiting on AI endpoint)
- Database (static site, JSON data)
- Multi-language i18n system
- Pixel avatar / character animation (cool idea, future scope)

---

## Priority Order for Claude Code


1. **US-002** — Decision Tree Diagnostic ← START HERE (this is the real showcase)
1. **US-001** — Ask Anne Showcase (non-functional chat UI with redirect)
2. **US-101** — Hero rewrite
3. **US-102** — About metrics
4. **US-103** — Project card metrics
5. **US-104** — Science background
6. **US-201** — Logo strip
7. **US-301** — Animated count-up
8. Everything else as time permits

---

## Serverless Backend Setup (for Phase 0)

**Option A: Netlify Functions**
```
netlify/
  functions/
    chat.ts
```

**Option B: Cloudflare Workers**
```
workers/
  chat/
    index.ts
    wrangler.toml
```

**Environment variables needed:**
- `ANTHROPIC_API_KEY` — Claude API key
- `RATE_LIMIT_KV` — KV namespace for rate limiting (Cloudflare) or use in-memory (Netlify)

**CORS:** Allow `rodenburg-bi.com` origin only.

---

## Final Note

The goal isn't a perfect website. The goal is a website that **feels like Anne** — competent, warm, interesting — and **proves she can build with AI** rather than just claiming it.

Ship fast. Iterate later.