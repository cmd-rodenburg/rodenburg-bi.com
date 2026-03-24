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

### ✅ Completed
- **US-050** — Node.js 24 on Netlify (`netlify.toml` already set)
- **US-002** — Decision Tree Diagnostic (`src/components/Diagnostic/`)
- **US-001** — Ask Anne Showcase (`src/components/AskAnne/`)

- **US-101** — Hero rewrite (subtitle + body copy)
- **US-102** — About outcome metrics (97%, 85%, 35%, iGEM)
- **US-103** — Project card metrics (all 6 projects)
- **US-104** — Science background in About section

- **US-201** — Client logo strip (styled text, between Hero and About)
- **US-202** — Service cards rewritten with DE+BI two-line framing; icons already Lucide
- **US-203** — DACH/language signal (already in hero from Phase 1)

- **US-301** — Animated count-up on metrics (scroll-triggered, respects prefers-reduced-motion)
- **US-302** — Technology filter chips on projects (Databricks, Snowflake, dbt, Azure, Python, BigQuery, Power BI)
- **US-303** — Career timeline (`2b_TimelineSection.vue`) between About and Projects; expandable cards; TDM rehire highlighted

- **US-401** — Portfolio metrics dashboard (`5b_DashboardSection.vue`) — 2 animated bar charts: tech coverage + performance improvements
- **US-402** — Architecture diagram modal on TDM card — annotated pipeline flow with parallelisation + dynamic mapping explanations

### ✅ Phase 5 — Client Strategy Pivot

- **US-502** — Hero: visitor-problem body copy, "Diagnose my problem" CTA → #diagnostic, Q2 2026 availability
- **US-505** — About: replaced CV paragraphs 2–3 with bridge-builder / trust-problem framing
- **US-504** — TDM rehire: promoted to pullquote above project filter chips; removed from logo strip
- **US-503** — Website Redesign card: moved last, rewritten as AI methodology showcase, AI filter chip added
- **US-501** — "How I Work" section (`4b_HowIWorkSection.vue`) after Diagnostic; 3-phase engagement model
- **US-506** — Contact: "Tell me what's broken" title, Discovery Day primary CTA, email secondary CTA
- **US-507** — Architecture diagrams on Solytic + EON; shared `ArchitectureDiagramModal.vue` extracted

---

## Phase 5 — Client Strategy Pivot

**Strategic shift:** The site is currently a well-designed CV — every section answers "what has Anne done?" Phase 5 reorients it to answer "what can Anne do for you, and how do I get started?" The three-phase engagement model (Analysis → Discovery Day → Implementation) is the conversion engine. Everything in this phase serves that goal.

**Priority order:**
1. US-502 — Hero CTA fix (1 line, immediate impact)
2. US-505 — About copy fix (remove CV language)
3. US-504 — TDM rehire callout (upgrade social proof)
4. US-503 — Fix Website Redesign card (credibility risk)
5. US-501 — "How I Work" section (conversion engine)
6. US-506 — Contact section rewrite (close the loop)
7. US-507 — Architecture diagrams on Solytic + EON

---

### US-501 — "How I Work" Engagement Model Section

> **As a** CTO or Head of Data considering hiring Anne,
> **I want** to understand exactly how an engagement starts and what I commit to,
> **So that** I can propose it internally without needing a sales call first.

**What it is:**
A three-card section explaining the engagement model: Analysis (free) → Discovery Day (fixed fee, one day) → Implementation (3–12 months). This is the conversion engine that turns curious visitors into qualified leads. The Diagnostic tree is the online version of Phase 1 — this section names that explicitly.

**Position:** Immediately after `DiagnosticSection`, before `ServicesSection`.

**Copy:**

```
Section title: "How I work"
Subtitle: Not a proposal. Not a pitch deck. A structured process from problem to production.
```

| Card | Title | Body | CTA |
|------|-------|------|-----|
| Phase 1 | Understand the problem | I won't quote a solution before I understand the problem. A brief conversation or written summary is enough to tell if I can help. | "Tell me what's broken" → mailto:anne@rodenburg-bi.com |
| Phase 2 | Discovery Day | One day, on-site or remote. I map what's broken, why it's broken, and what fixing it would actually take. Deliverable: a scope document you can take into any internal approval process. | "Book a Discovery Day" → /meet-Anne |
| Phase 3 | Implementation | Embedded in your team for 3–12 months. From raw source to production pipeline to trusted dashboard. I own the full stack — not just the ingestion, not just the reporting. | "See the work" → #projects |

**Acceptance criteria:**
- [ ] Three-card layout (horizontal on desktop, stacked on mobile)
- [ ] Each card has: phase number, title, body copy, CTA button
- [ ] Phase numbers styled as large moss-accented numerals (01, 02, 03)
- [ ] Phase 1 CTA: `mailto:anne@rodenburg-bi.com`
- [ ] Phase 2 CTA: `/meet-Anne` router link
- [ ] Phase 3 CTA: scrolls to `#projects`
- [ ] Bridge text above section: "The diagnostic above is Phase 1 — online. Here's what comes next."
- [ ] Styled per design system (cards, moss accents, dark bg)
- [ ] Mobile responsive

**File structure:**
```
src/components/Sections/1_Main/4b_HowIWorkSection.vue
```

---

### US-502 — Hero Secondary CTA Fix

> **As a** first-time visitor who doesn't know Anne yet,
> **I want** the hero's secondary CTA to meet me at my problem,
> **So that** I immediately find something useful rather than a portfolio I lack context to evaluate.

**What to change:**
In `1_HeroSection.vue`, update the secondary CTA:
- From: `"See my work" → #projects`
- To: `"Diagnose my problem" → #diagnostic`

Also update the hero body copy to visitor-problem framing:

```
Body: Your pipelines ingest the wrong data. Your reports contradict each other.
Your team argues about numbers instead of acting on them. I've fixed this at
EON, Henkel, and TDM Systems — cutting ingestion times by up to 97%.

Available for DACH-market engagements from [month] 2026.
Dutch · English · German.
```

**Acceptance criteria:**
- [ ] Secondary CTA text: "Diagnose my problem"
- [ ] Secondary CTA href: `#diagnostic`
- [ ] Hero body copy updated to visitor-problem framing
- [ ] Availability signal present ("Available from [month] 2026")
- [ ] Primary CTA unchanged: "Schedule a call" → `/meet-Anne`

---

### US-503 — Fix "Website Redesign" Project Card

> **As a** CTO evaluating Anne for a senior engagement,
> **I want** the AI project card to demonstrate methodology — not speed,
> **So that** it builds credibility rather than raising a red flag about quality.

**Current problems:**
1. Listed first — above EON, Henkel, TDM Systems
2. Description says "HTML, CSS, and JavaScript" — incorrect (Vue 3 + TypeScript + Tailwind)
3. "2 hours" reads as rushed to a senior buyer
4. Filter chip tags "Claude code" and "AI" match no filter chips — card is invisible in all filtered views

**Changes in `3_FeaturedProjectsSection.vue`:**

| Field | Old | New |
|-------|-----|-----|
| Position | First | Last |
| Title | "Website Redesign \| Claude code implementation" | "rodenburg-bi.com — AI-Assisted Development" |
| Metrics | "Delivered fully functional website in 2 hours" | "Production Vue 3 site architected and shipped in a single session" |
| Description | (HTML/CSS/JS copy) | "Used Claude Code to architect, build, and iterate on this portfolio site — validating AI-assisted development as a practical workflow for production delivery. Full component library, interactive diagnostic tool, animated data visualisations, and architecture diagrams — one developer, one AI assistant." |
| Technologies | `['Claude code', 'AI', 'Vue3']` | `['Vue 3', 'TypeScript', 'Tailwind CSS', 'Claude Code', 'Netlify']` |

Also add `'AI'` to the `filterChips` array so the card is visible when filtering.

**Acceptance criteria:**
- [ ] Card appears last in the projects grid
- [ ] Title, metrics, description rewritten per above
- [ ] Technologies array corrected
- [ ] "AI" filter chip added to filter row
- [ ] Card appears when "AI" filter is active

---

### US-504 — TDM Rehire Featured Callout

> **As a** visitor scanning for social proof,
> **I want** the TDM rehire to have visual weight proportional to its significance,
> **So that** it registers as a standout credential rather than a footnote.

**What it is:**
Upgrade the TDM rehire from the one-line footnote in the logo strip to a standalone pullquote block placed at the top of the Projects section (above the filter chips).

**Remove** the social proof line from `0_ClientLogoStrip.vue`.

**Add** a callout block to `3_FeaturedProjectsSection.vue` above the filter chips:

```
"TDM Systems brought Anne back by request — from proof-of-concept to full
production. That's the engagement that matters: not just delivering, but
being trusted to own what you built."
```

**Style:** `border-l-4 border-moss-500 pl-6`, `text-xl text-gray-200 italic`, attribution line in `text-gray-500 text-sm`.

**Acceptance criteria:**
- [ ] Pullquote block appears above filter chips in Projects section
- [ ] Styled with left moss border, italic text, attribution
- [ ] Social proof line removed from logo strip
- [ ] Mobile responsive

---

### US-505 — About Section Copy Fix

> **As a** potential client reading the About section,
> **I want** to understand what Anne solves — not where she's been,
> **So that** I can picture her working on my problem.

**Replace** paragraphs 2–3 in `2_AboutSection.vue` with client-facing framing:

**Remove:**
> "I have delivered high-impact data solutions for international organizations including Accenture, Cargill, Transavia, and Capgemini..."
> "For nearly a year as an independent freelancer, I have helped companies centralize their data..."

**Replace with:**
> "Most data problems aren't data problems. They're trust problems — engineers who built something the business doesn't understand, or analysts who never got what they asked for. I've worked across five countries, from FMCG to energy to e-commerce, and the pattern repeats everywhere: good engineers and good analysts, operating in silos that nobody built a bridge between."
>
> "I build that bridge. The pipelines that feed the dashboards. The models that the dashboards trust. When a number looks wrong, I can trace it from the report back to the source system and tell you exactly where it broke."

**Acceptance criteria:**
- [ ] Paragraphs 2–3 replaced with new copy
- [ ] No name-dropping without outcome context
- [ ] Paragraph 1 (positioning) and paragraph 4 (iGEM/science) unchanged
- [ ] Formatting and spacing consistent with existing section

---

### US-506 — Contact Section Rewrite

> **As a** qualified visitor ready to reach out,
> **I want** a contact section that tells me exactly what to do next,
> **So that** I don't have to guess how Anne wants to be approached.

**Rewrite `7_ContactSection.vue`:**

```
Title: "Tell me what's broken."

Body: I don't do discovery calls by default — I do them when it's worth both
our time. Use the diagnostic above to describe your situation, then reach out.
If it sounds like a fit, I'll suggest a next step.

Primary CTA: "Book a Discovery Day" → /meet-Anne
Secondary CTA: "Email first" → mailto:anne@rodenburg-bi.com
```

**Remove** the generic "Curious to learn more about how I can help your business grow?" copy.

**Acceptance criteria:**
- [ ] Title: "Tell me what's broken."
- [ ] Body copy updated per above
- [ ] Primary CTA: "Book a Discovery Day" → `/meet-Anne`
- [ ] Secondary CTA: "Email first" → `mailto:anne@rodenburg-bi.com`
- [ ] Reference to the diagnostic in the body
- [ ] Existing contact form (if present) retained or clearly replaced

---

### US-507 — Architecture Diagrams on Solytic and EON

> **As a** technical visitor reviewing the Projects section,
> **I want** to see the architecture thinking behind more than one project,
> **So that** I can evaluate Anne's design decisions across different problem types.

Apply the same architecture modal pattern from the TDM card to:

**Solytic — Greenfield Data Warehouse:**
- Flow: Raw source systems → Airflow (orchestration) → Snowflake Bronze → dbt (Silver/Gold) → Power BI
- Annotations:
  - "Greenfield decision: Snowflake chosen over legacy DWH for scalability and cloud-native BI integration"
  - "dbt for testable, version-controlled transformations — every model documented and tested"

**EON — Enterprise Snowflake Migration:**
- Flow: Legacy on-prem sources → migration / staging layer → Snowflake + dbt → governance layer → reporting
- Annotations:
  - "Parallel run strategy: legacy and new pipelines ran simultaneously during cutover — zero downtime"
  - "Governance layer: row-level security per business unit, audit trail for compliance"

**Implementation:** Add `hasArchitecture: true` and an `architectureId` field to the Solytic and EON entries in the projects array. Extract the modal into a shared `ArchitectureDiagramModal.vue` component rather than duplicating the modal markup.

**Acceptance criteria:**
- [ ] "View pipeline architecture →" link on Solytic card
- [ ] "View pipeline architecture →" link on EON card
- [ ] Each modal shows correct pipeline flow with annotations
- [ ] Architecture modal extracted to shared component
- [ ] TDM modal continues to work
- [ ] Modals are mobile scrollable

**File structure:**
```
src/components/Sections/1_Main/ArchitectureDiagramModal.vue   # shared modal wrapper
```

---

## Site Critique & Recommendations

*Documented after full site review, March 2026.*

---

### 1. Hook & First Impression

**What works:**
- "Anne Rodenburg" as H1 — personal branding, not company branding. Correct.
- DE+BI dual subtitle is differentiated and immediately communicates the rare combination.
- Verified metrics in the hero body make it scannable and credible.
- Logo watermark is a subtle design touch that shows craft.

**What's weak:**
The hero body still speaks about Anne, not about the visitor's problem. "I build the data infrastructure that makes Business Intelligence trustworthy" is a positioning statement, not a hook. A hook should make the visitor feel *seen* — recognised before they've said anything.

Compare:
- Current: "I build the data infrastructure that makes Business Intelligence trustworthy."
- Stronger: "Your dashboards are unreliable, and everyone blames someone else. I find where it actually broke."

No availability signal. A CTO landing on this page wants to know: can I hire this person? Right now there's no "available from [month]" — without this, a qualified lead bounces to check LinkedIn instead.

The secondary CTA ("See my work") scrolls to Projects — the wrong destination. Projects require context to interpret. The Diagnostic tree requires none: it meets the visitor exactly where they are. The secondary CTA should scroll to `#diagnostic`.

**Recommended hero rewrite:**
```
H1: Anne Rodenburg
Subtitle: Senior Data Engineer — I find where your data broke.

Body: Your pipelines ingest the wrong data. Your reports contradict each other.
Your team argues about numbers instead of acting on them. I've fixed this at
EON, Henkel, and TDM Systems — cutting ingestion times by up to 97%.

Available for DACH-market engagements from [month] 2026.
Dutch · English · German.
```

CTAs: "Diagnose my data problem" (→ #diagnostic) | "Schedule a call" (→ /meet-Anne)

---

### 2. Showcasing Qualities & Differentiation

**What works:**
- DE+BI framing in services is excellent — two-line format (engineering + outcome) is the strongest copy on the site.
- Architecture diagram on TDM is the best "show don't tell" feature. Every technical visitor will click it.
- TDM rehire is a killer credential.
- The diagnostic tree demonstrates consulting instinct, not just technical skill.

**What's weak:**

**"Website Redesign | Claude code implementation" project card — needs fixing:**
- It is currently the *first* project shown and precedes engagements at EON and Henkel.
- The description incorrectly states "HTML, CSS, and JavaScript" — the site is Vue 3 + Tailwind.
- "Delivered fully functional website in 2 hours" can read as "rushed" to a CTO evaluating someone for a 6-month engagement.
- Fix: Move to last. Rewrite copy to celebrate the *methodology* ("Validated AI-assisted development workflow: architected and shipped a production Vue 3 site using Claude Code in a single session") not the speed.
- Fix: Add to filter chips as "AI" tag. Current filter chips don't include "AI" or "Claude Code."

**TDM rehire is underweighted:**
The single most powerful proof point on the site ("TDM Systems brought Anne back by request") appears as a one-line footnote under the logo strip. A client being invited back is rarer than any metric. It deserves its own visual callout — a quote block, a featured card, something with visual weight.

**The molecular medicine angle is mentioned but not leveraged:**
"My background is in molecular medicine — where bad data costs lives." This is the most distinctive thing about Anne's background. But it appears as one sentence in a paragraph. It should have visual prominence — a pullquote, a section of its own, or integrated into the hero.

**About section paragraphs 2–3 are CV-language:**
"I have delivered high-impact data solutions for international organizations including Accenture, Cargill, Transavia, and Capgemini" — this is name-dropping without context. What problem did she solve at Cargill? Why does Transavia matter? Remove this or replace with a specific outcome for each.

---

### 3. Gamification Opportunities

**What works:**
- Diagnostic tree is the best interactive feature on the site.
- Count-up stats are an effective micro-interaction.
- Architecture diagram modal demonstrates real technical thinking.

**What's missing:**
- Architecture diagrams on only one project. Solytic (greenfield warehouse) and EON (enterprise Snowflake migration) both have interesting enough architecture to diagram. This would meaningfully upgrade the Projects section.
- The diagnostic result nodes don't close the loop with an ROI framing. After the diagnosis, show why it matters financially: "If you freed up 85% of pipeline processing time, three analysts could spend that time on analysis instead of waiting."
- The "Website Redesign" project's technologies ("Claude code, AI, Vue3") don't match any filter chip — it shows under "All" but never under a specific filter, making it invisible to filtered views.

---

### 4. AI Implementation Showcase

**What works:**
- The chat widget's honest redirect is one of the best personality moments on the site. It demonstrates self-awareness and saves money while making a point. Don't change it.
- "Built with Claude Code" project shows AI-assisted development in practice.

**What's weak:**
- The "Website Redesign" card description doesn't explain *how* AI was used. "Combination of HTML, CSS, and JavaScript" reads like a 2012 portfolio. Rewrite to explain the Claude Code workflow.
- The dormant Netlify function (`netlify/functions/chat.ts`) is the real AI technical flex — it's not visible anywhere on the site. Consider a technical note: "This site has a dormant Claude API integration. Ask me to turn it on."
- The diagnostic tree could be framed as "AI-structured problem diagnosis" — it's rule-based, but the *thinking* behind it (business pain → root cause → solution path) is exactly how AI consulting tools are built.

---

### 5. Dashboard/Portfolio Showcase

**What works:**
- Real data, honest metrics. "Verified metrics from client engagements" is the right framing.
- Clean visual design matches the site.

**What's weak:**
- "By the Numbers" is a generic section title. Better: "What the work actually looked like."
- The tech stack chart counts only 5 projects, but 6 are visible. The discrepancy is visible if you count.
- Three bars on a performance chart is a shallow "dashboard." It demonstrates charting capability, not data thinking.
- A Head of Data evaluating Anne doesn't want to know how many times she used dbt. They want to know: what's the typical engagement model? What industries? What scale of data?
- Consider replacing or augmenting with: engagement timeline (Gantt-style), industry distribution, data volume ranges handled, or a "before/after" framing per project.

---

### 6. CV vs. Client-Facing Strategy — The Core Gap

**The diagnosis:**
The site is a well-designed CV. Every section answers "what has Anne done?" rather than "what can Anne do for you, and how do I get started?"

The difference matters because:
- A CV is evaluated by someone who's already decided to hire — they're just verifying.
- A client site needs to *create* the decision to hire — and lower the friction to starting.

**The three-phase engagement model is completely missing from the site.**

This model — Analysis → Discovery Day → Implementation — is the key to converting a curious visitor into a paying client. It should be a prominent, named section.

---

## Phase 5 — Client Strategy Implementation

### The Three-Phase Engagement Model

```
Phase 1 — Analysis (No charge)
Anne reviews available context before scoping anything. A short call or
written brief. She doesn't sell a solution before understanding the problem.

Phase 2 — Discovery Day (1 day, fixed fee)
On-site or remote. Scope assessment: what's broken, what's the ROI of fixing
it, what would an engagement look like. Deliverable: a structured scope
document the client can use in any internal procurement process.
Output: Architecture recommendation + effort estimate + risk map.

Phase 3 — Implementation (3–12 month engagement)
The actual work. Full-stack data engineering: raw source → production pipeline
→ governed data model → trusted dashboard. Embedded in the team.
```

**Why this model converts better:**
- Low barrier entry: "one day" vs. committing to 6 months upfront.
- Reduces procurement risk: scoped output gives the client something to present internally.
- Self-selects serious clients: people willing to pay for a discovery day are qualified.
- Differentiates from agencies: most agencies start with a sales pitch, not a structured diagnosis.

The Diagnostic tree is already the *online version of Phase 1*. It should explicitly lead to: "Ready to go deeper? Book a Discovery Day — one day, fixed fee, structured scope document."

---

### US-501 — "How I Work" Engagement Model Section

**Position:** Place immediately after the Diagnostic.

**Copy structure:**
```
Section title: "How I work"

Not a proposal. Not a pitch deck. A structured process from problem to production. Make it interactive and use charts

[Phase 1 card] Understand the problem
I won't quote a solution before I understand the problem.
A brief conversation or written summary is enough to tell if I can help.
→ Free. 30 minutes.

[Phase 2 card] Discovery Day
One day, on-site or remote.
I map what's broken, why it's broken, and what fixing it would actually take.
Deliverable: a scope document you can take into any internal approval process.
→ Fixed fee. One day.

[Phase 3 card] Implementation
Embedded in your team for 3–12 months.
From raw source to production pipeline to trusted dashboard.
I own the full stack — not just the ingestion, not just the reporting.
→ Project-based or day-rate. DACH market.
```

**CTAs on each phase card:**
- Phase 1: "Tell me what's broken" → mailto:anne@rodenburg-bi.com
- Phase 2: "Book a Discovery Day" → /meet-Anne
- Phase 3: "See the work" → #projects

---

### US-502 — Hero CTA Fix

Change hero secondary CTA from `"See my work" → #projects` to `"Diagnose my problem" → #diagnostic`.

Rationale: Projects require context to evaluate. The Diagnostic meets the visitor at their problem — no context required.

---

### US-503 — Fix "Website Redesign" Project Card

**Current problems:**
1. Listed first — above EON, Henkel, TDM Systems
2. Description says "HTML, CSS, and JavaScript" — incorrect (Vue 3 + TypeScript + Tailwind)
3. "2 hours" framing can signal rushing to a senior buyer
4. Technologies: "Claude code, AI, Vue3" — "Claude code" and "AI" don't match any filter chip

**Fix:**
- Move to last position in the projects array
- Rewrite title: "rodenburg-bi.com — AI-Assisted Development"
- Rewrite metrics: "Production Vue 3 site, architected and shipped in a single session"
- Rewrite description: "Used Claude Code to architect, build, and iterate on this portfolio site — validating AI-assisted development as a practical workflow for production delivery. Full component library, Netlify Functions backend, interactive diagnostic tool, and architecture diagram — one developer, one AI assistant, one session."
- Fix technologies: `['Vue 3', 'TypeScript', 'Tailwind CSS', 'Claude Code', 'Netlify Functions']`
- Add "AI" to filter chips

---

### US-504 — TDM Rehire Featured Callout

Move the TDM rehire social proof from logo strip footnote to a standalone quote/callout block, either:
- Immediately below the logo strip, or
- At the top of the Projects section as a featured testimonial

**Copy:**
```
"TDM Systems brought Anne back by request — from proof-of-concept to
full production. That's the engagement that matters: not just delivering,
but being trusted to own what you built."
```

Style: Large pullquote, `border-l-4 border-moss-500`, `text-xl text-gray-200`.

---

### US-505 — About Section Copy Fix

Replace CV-language paragraphs 2–3 with client-facing framing.

**Current (CV-style):**
> "I have delivered high-impact data solutions for international organizations including Accenture, Cargill, Transavia, and Capgemini..."

**Replacement:**
> "Most data problems aren't data problems. They're trust problems — engineers who built something the business doesn't understand, or analysts who never got what they asked for. I've worked across five countries, from FMCG to energy to e-commerce, and the pattern repeats everywhere: good engineers and good analysts, operating in silos that nobody built a bridge between."
>
> "I build that bridge. The pipelines that feed the dashboards. The models that the dashboards trust. When a number looks wrong, I can trace it from the report back to the source system and tell you exactly where it broke."

---

### US-506 — Contact Section Rewrite

**Current:** "Curious to learn more about how I can help your business grow?"
**Replace with:**
```
Title: "Tell me what's broken."

Body: I don't do discovery calls by default — I do them when it's worth both
our time. Use the diagnostic above to describe your situation, then reach out.
If it sounds like a fit, I'll suggest a next step.

Primary CTA: "Book a Discovery Day" → /meet-Anne
Secondary CTA: "Email first" → mailto:anne@rodenburg-bi.com
```

---

### US-507 — Architecture Diagrams on Solytic and EON

Apply the same architecture diagram modal pattern from the TDM project card to:

**Solytic (Greenfield Data Warehouse):**
- Show: Source systems → Airflow orchestration → Snowflake (Bronze/Silver/Gold) → dbt transformations → Power BI
- Annotations: "Greenfield decision: Snowflake over legacy DWH" + "dbt for testable, versioned transformations"

**EON (Enterprise Snowflake Migration):**
- Show: Legacy source systems → migration layer → Snowflake + dbt → governance layer → reporting
- Annotations: "Parallel run strategy: zero downtime cutover" + "Governance layer: row-level security per business unit"

---

## Verified Metrics — Updated

| Metric | Source | Notes |
|--------|--------|-------|
| 97% reduction in ingestion time | TDM Systems | Parallelisation + dynamic mapping |
| 85% time reduction on API ingestions | Henkel | (previously attributed to Capgemini — corrected) |
| 35% daily ingestion reduction | Solytic | Incremental loading strategy |
| 1st place of 268 teams | iGEM 2015 | Molecular medicine background anchor |
| 6+ years experience | CV | |
| Trilingual NL/EN/DE | CV | |
| TDM client rehire | TDM 01/2026 | Most powerful social proof on site |

**Note:** 85% metric was previously attributed to Capgemini throughout the site. The correct client is Henkel. The `diagnosticData.ts` and `2b_TimelineSection.vue` have been corrected. Verify all other references.

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