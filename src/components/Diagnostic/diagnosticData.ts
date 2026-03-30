export interface QuestionNode {
  type: 'question'
  question: string
  options: { text: string; next: string }[]
}

export interface ResultNode {
  type: 'result'
  category: string
  diagnosis: string
  projectLabel: string
  ctaLabel: string
  emailSubject: string
}

export type TreeNode = QuestionNode | ResultNode
export type DiagnosticTree = Record<string, TreeNode>

export const tree: DiagnosticTree = {
  start: {
    type: 'question',
    question: "What's your biggest data frustration right now?",
    options: [
      { text: 'Our team argues about which numbers are correct', next: 'trust_q2' },
      { text: 'Building reports takes days instead of hours', next: 'speed_q2' },
      { text: 'We have dashboards but nobody uses them', next: 'adoption_q2' },
      { text: "We're starting from scratch / greenfield", next: 'greenfield_q2' },
    ],
  },

  // === TRUST BRANCH ===
  trust_q2: {
    type: 'question',
    question: 'Where does the disagreement usually start?',
    options: [
      { text: 'Different reports show different numbers', next: 'trust_governance' },
      { text: 'Nobody trusts the data source itself', next: 'trust_q3' },
    ],
  },
  trust_q3: {
    type: 'question',
    question: 'Is the issue with collection or transformation?',
    options: [
      { text: 'Data comes in wrong or incomplete', next: 'trust_ingestion' },
      { text: 'Data goes in fine but comes out wrong', next: 'trust_transformation' },
    ],
  },
  trust_governance: {
    type: 'result',
    category: 'Data Quality & Governance',
    diagnosis:
      "You need a single source of truth. When reports contradict each other, the root cause is usually missing data governance — no agreed definitions, no central model, no ownership. This is fixable, and the fix pays off fast.",
    projectLabel: 'Solytic — 35% ingestion reduction',
    ctaLabel: "Let's untangle this",
    emailSubject: 'Data quality and governance question',
  },
  trust_ingestion: {
    type: 'result',
    category: 'Ingestion & Pipeline Reliability',
    diagnosis:
      "If bad data is entering your system at the source, no amount of transformation will save you. The fix is upstream: better ingestion patterns, validation at intake, and reliable pipeline orchestration.",
    projectLabel: 'TDM Systems — 97% pipeline improvement',
    ctaLabel: 'Fix the pipeline',
    emailSubject: 'Data ingestion reliability question',
  },
  trust_transformation: {
    type: 'result',
    category: 'Transformation & dbt Modelling',
    diagnosis:
      "The data arrives fine but breaks somewhere in transformation — usually unclear SQL logic, missing tests, or no single canonical model. dbt solves this: version-controlled, tested, documented transformations.",
    projectLabel: 'EON — enterprise-scale dbt implementation',
    ctaLabel: 'Sort out the modelling',
    emailSubject: 'Data transformation and dbt question',
  },

  // === SPEED BRANCH ===
  speed_q2: {
    type: 'question',
    question: 'What slows it down most?',
    options: [
      { text: 'Queries are painfully slow', next: 'speed_pipeline' },
      { text: 'We have to manually combine data from multiple sources', next: 'speed_architecture' },
      { text: "The data isn't where we need it", next: 'speed_integration' },
    ],
  },
  speed_pipeline: {
    type: 'result',
    category: 'Pipeline Optimization',
    diagnosis:
      "Slow queries are almost always a structural problem — missing partitioning, no parallelism, sequential loads that should run concurrently. I've cut pipeline times by 97% at TDM and 85% at Henkel through targeted architectural changes.",
    projectLabel: 'Henkel — 85% API ingestion time reduction',
    ctaLabel: 'Speed things up',
    emailSubject: 'Pipeline performance optimization question',
  },
  speed_architecture: {
    type: 'result',
    category: 'Data Warehouse Architecture',
    diagnosis:
      "Manual data combining is a sign you don't have a proper data warehouse yet — every team is doing their own ETL in spreadsheets or ad-hoc scripts. The fix is a central model that does this once, correctly, for everyone.",
    projectLabel: 'Junglück — full data warehouse restructuring',
    ctaLabel: 'Build the right foundation',
    emailSubject: 'Data warehouse architecture question',
  },
  speed_integration: {
    type: 'result',
    category: 'Data Integration',
    diagnosis:
      "If the data isn't where analysts need it, you have a pipeline gap. This usually means missing connectors, manual exports, or silos that haven't been integrated. I can map the gaps and build reliable flows.",
    projectLabel: 'TDM Systems — 97% pipeline improvement',
    ctaLabel: 'Connect the dots',
    emailSubject: 'Data integration question',
  },

  // === ADOPTION BRANCH ===
  adoption_q2: {
    type: 'question',
    question: 'Why do you think people avoid the dashboards?',
    options: [
      { text: 'The data is outdated by the time they see it', next: 'adoption_realtime' },
      { text: "They don't trust the numbers", next: 'trust_q2' },
      { text: "The dashboards don't answer their actual questions", next: 'adoption_strategy' },
    ],
  },
  adoption_realtime: {
    type: 'result',
    category: 'Real-time & Incremental Loads',
    diagnosis:
      "If reports are already stale when they land, people stop looking. The solution is incremental loading and fresher pipeline schedules — not rebuilding everything, just making the data arrive faster.",
    projectLabel: 'Solytic — 35% ingestion reduction',
    ctaLabel: 'Make the data fresh',
    emailSubject: 'Real-time data and incremental loading question',
  },
  adoption_strategy: {
    type: 'result',
    category: 'BI Strategy & Requirements',
    diagnosis:
      "This is a discovery problem, not a tech problem. The dashboards were built for the wrong questions. Before building anything new, I'd want to sit with your team and understand what decisions they're actually trying to make.",
    projectLabel: 'Solytic — greenfield BI department',
    ctaLabel: "Let's talk about what your team actually needs",
    emailSubject: 'BI strategy and requirements question',
  },

  // === GREENFIELD BRANCH ===
  greenfield_q2: {
    type: 'question',
    question: "What's driving the project?",
    options: [
      { text: 'New company or no data infrastructure yet', next: 'greenfield_new' },
      { text: 'Migrating away from legacy systems', next: 'greenfield_migration' },
      { text: 'Scaling beyond what the current setup handles', next: 'greenfield_scale' },
    ],
  },
  greenfield_new: {
    type: 'result',
    category: 'Greenfield Architecture',
    diagnosis:
      "Starting from zero is actually the best position — no legacy debt, no workarounds inherited from three teams ago. I've built data platforms from scratch at Solytic and Junglück. The key is getting the architecture right on day one.",
    projectLabel: 'Solytic — built BI department from scratch',
    ctaLabel: 'Start it right',
    emailSubject: 'Greenfield data infrastructure question',
  },
  greenfield_migration: {
    type: 'result',
    category: 'Migration & Modernisation',
    diagnosis:
      "Legacy migrations are high-stakes — you can't break what's already running. I approach them with parallel runs, incremental cutover, and obsessive testing. TDM's second engagement was exactly this: taking a working PoC safely into production.",
    projectLabel: 'TDM Systems — 97% pipeline improvement (2 engagements)',
    ctaLabel: 'Plan the migration',
    emailSubject: 'Legacy data migration question',
  },
  greenfield_scale: {
    type: 'result',
    category: 'Scalability & Performance',
    diagnosis:
      "When your current setup is buckling under load, a workaround won't hold. You need architectural changes — parallelism, partitioning, the right platform for the data volume you're actually dealing with.",
    projectLabel: 'Henkel — 85% API ingestion time reduction',
    ctaLabel: 'Handle the scale',
    emailSubject: 'Data scalability and performance question',
  },
}
