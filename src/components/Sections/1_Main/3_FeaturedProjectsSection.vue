<script setup lang="ts">
import { ref, computed } from 'vue'
import ArchitectureDiagramModal from './ArchitectureDiagramModal.vue'

interface Project {
  title: string
  metrics: string
  description: string
  subdescription?: string
  technologies: string[]
  architectureId?: 'tdm' | 'solytic' | 'eon'
}

const projects: Project[] = [
  {
    title: 'Solytic | Greenfield Data Warehouse',
    metrics: '35% reduction in daily ingestion load',
    description:
      'Scaled the BI capability at Solytic from the ground up, establishing the Business Intelligence department. Owned data source integration across commercial, operational, and technical domains, consolidating into governed Power BI dashboards ensuring consistent, trusted insights.',
    technologies: ['Snowflake', 'dbt', 'Azure', 'Airflow', 'Power BI'],
    architectureId: 'solytic',
  },
  {
    title: 'TDM Systems — Data Platform (2 engagements)',
    metrics: '97% reduction in pipeline ingestion time',
    description:
      'Built and optimized a production-grade data platform for TDM Systems, achieving a 97% reduction in pipeline ingestion time through parallelization and dynamic mapping. Delivered the initial build, then was brought back by the client to take the proof-of-concept to full production — a rare indicator of trust.',
    subdescription:
      'Proof of concept utilizing AEP elements for CI/CD <a href="https://medium.com/@rodenburg.bi/solving-aep-object-management-in-multiple-sandboxes-through-code-882b23ce5f18" target="_blank" class="text-moss-500 hover:underline">Check out the blog here</a>.',
    technologies: ['Databricks', 'Azure Data Factory', 'Python', 'Terraform'],
    architectureId: 'tdm',
  },
  {
    title: 'Henkel | API Ingestion Optimization',
    metrics: '85% time reduction on API-based ingestions',
    description:
      'Redesigned API ingestion pipelines at Henkel, cutting processing time by 85% through architectural improvements to parallelism and error handling. Delivered consistent, low-latency data flows across multiple business units.',
    technologies: ['Databricks', 'Pyspark', 'Python', 'Azure Data Factory', 'Azure', 'SQL'],
  },
  {
    title: 'EON — Enterprise Snowflake Migration',
    metrics: 'Enterprise-scale Snowflake + dbt implementation',
    description:
      'Delivered enterprise-scale Snowflake and dbt implementation for EON, one of Europe\'s largest energy companies. Focused on data modelling, pipeline reliability, and governance across a complex multi-domain environment.',
    technologies: ['Snowflake', 'dbt', 'SQL', 'Airflow'],
    architectureId: 'eon',
  },
  {
    title: 'Junglück — Data Warehouse Restructuring',
    metrics: 'Full data warehouse restructuring',
    description:
      'Performed a complete restructuring of the data warehouse at Junglück, a fast-growing e-commerce brand. Consolidated fragmented data sources, established clean data models, and enabled reliable reporting across marketing and operations.',
    technologies: ['BigQuery', 'dbt', 'SQL', 'Power BI'],
  },
  {
    title: 'rodenburg-bi.com — AI-Assisted Development',
    metrics: 'Production Vue 3 site architected and shipped in a single session',
    description:
      'Used Claude Code to architect, build, and iterate on this portfolio site — validating AI-assisted development as a practical workflow for production delivery. Full component library, interactive diagnostic tool, animated data visualisations, and architecture diagrams — one developer, one AI assistant.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Claude Code', 'Netlify'],
  },
]

const filterChips = ['All', 'Databricks', 'Snowflake', 'dbt', 'Azure', 'Python', 'BigQuery', 'Power BI', 'AI']
const activeFilter = ref('All')
const activeModal = ref<'tdm' | 'solytic' | 'eon' | null>(null)

const filtered = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : activeFilter.value === 'AI'
      ? projects.filter(p => p.technologies.some(t => ['Claude Code', 'AI', 'Vue 3'].includes(t)))
      : projects.filter(p =>
          p.technologies.some(t => t.toLowerCase().includes(activeFilter.value.toLowerCase()))
        )
)
</script>

<template>
  <section id="projects" class="pt-20 pb-20 bg-moss-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Featured Projects</h2>

      <!-- TDM rehire pullquote (US-504) -->
      <blockquote class="border-l-4 border-moss-500 pl-6 mb-12 max-w-3xl mx-auto">
        <p class="text-xl text-gray-200 italic leading-relaxed">
          "TDM Systems brought Anne back by request — from proof-of-concept to full production.
          That's the engagement that matters: not just delivering, but being trusted to own what you built."
        </p>
        <footer class="text-gray-500 text-sm mt-3">TDM Systems · Netherlands · 2025–2026</footer>
      </blockquote>

      <!-- Filter chips -->
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="chip in filterChips"
          :key="chip"
          @click="activeFilter = chip"
          :class="[
            'px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200',
            activeFilter === chip
              ? 'bg-moss-500 text-black'
              : 'border border-gray-600 text-gray-400 hover:border-moss-500 hover:text-moss-400',
          ]"
        >
          {{ chip }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in filtered" :key="index" class="card p-8 flex flex-col">
          <h3 class="text-2xl font-semibold mb-3">{{ project.title }}</h3>
          <p class="text-moss-500 font-medium text-lg mb-4">{{ project.metrics }}</p>
          <p class="text-gray-300 mb-4">{{ project.description }}</p>
          <p v-if="project.subdescription" class="text-gray-300 mb-4" v-html="project.subdescription" />
          <div class="flex flex-wrap gap-3 mb-5">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="bg-gray-700 rounded-lg px-4 py-2 text-sm"
            >
              {{ tech }}
            </span>
          </div>
          <div v-if="project.architectureId" class="mt-auto pt-4 border-t border-gray-700">
            <button
              @click="activeModal = project.architectureId!"
              class="text-sm text-moss-500 hover:text-moss-400 font-medium transition-colors"
            >
              View pipeline architecture →
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TDM Architecture Modal -->
  <ArchitectureDiagramModal
    v-if="activeModal === 'tdm'"
    title="TDM Systems — Pipeline Architecture"
    subtitle="How parallelisation and dynamic mapping achieved 97% time reduction"
    @close="activeModal = null"
  >
    <div class="flex flex-col items-center gap-0 text-sm font-medium select-none">
      <div class="flex gap-3 justify-center flex-wrap">
        <div class="arch-node bg-gray-800">CRM System</div>
        <div class="arch-node bg-gray-800">ERP System</div>
        <div class="arch-node bg-gray-800">External APIs</div>
      </div>
      <div class="arch-arrow" />
      <div class="arch-node bg-moss-900 border-moss-700 w-72 text-center">
        <p class="text-moss-400 font-semibold">Azure Data Factory</p>
        <p class="text-gray-400 text-xs mt-0.5">Parallel trigger orchestration</p>
      </div>
      <div class="text-xs text-moss-500 -mt-1 mb-1">⟵ Parallelisation key decision</div>
      <div class="flex gap-8">
        <div class="arch-arrow" /><div class="arch-arrow" /><div class="arch-arrow" />
      </div>
      <div class="flex gap-3 justify-center flex-wrap">
        <div class="arch-node bg-gray-800 w-36 text-center"><p class="text-gray-300">Bronze</p><p class="text-gray-500 text-xs">Raw ingestion A</p></div>
        <div class="arch-node bg-gray-800 w-36 text-center"><p class="text-gray-300">Bronze</p><p class="text-gray-500 text-xs">Raw ingestion B</p></div>
        <div class="arch-node bg-gray-800 w-36 text-center"><p class="text-gray-300">Bronze</p><p class="text-gray-500 text-xs">Raw ingestion C</p></div>
      </div>
      <div class="flex gap-8">
        <div class="arch-arrow" /><div class="arch-arrow" /><div class="arch-arrow" />
      </div>
      <div class="arch-node bg-moss-900 border-moss-700 w-72 text-center">
        <p class="text-moss-400 font-semibold">Databricks — Silver Layer</p>
        <p class="text-gray-400 text-xs mt-0.5">Dynamic mapping + transformation (Python)</p>
      </div>
      <div class="text-xs text-moss-500 -mt-1 mb-1">⟵ Dynamic mapping key decision</div>
      <div class="arch-arrow" />
      <div class="arch-node bg-gray-800 w-72 text-center">
        <p class="text-gray-300 font-semibold">Gold Layer</p>
        <p class="text-gray-500 text-xs mt-0.5">Business-ready data models</p>
      </div>
      <div class="arch-arrow" />
      <div class="flex gap-3 justify-center flex-wrap">
        <div class="arch-node bg-gray-800">BI Reports</div>
        <div class="arch-node bg-gray-800">Dashboards</div>
      </div>
    </div>
    <div class="mt-8 grid sm:grid-cols-2 gap-4">
      <div class="bg-gray-800 rounded-lg p-4">
        <p class="text-moss-400 font-semibold text-sm mb-1">Parallelisation</p>
        <p class="text-gray-400 text-xs leading-relaxed">ADF triggers run ingestion streams concurrently instead of sequentially. Multiple sources processed simultaneously — eliminating the main bottleneck.</p>
      </div>
      <div class="bg-gray-800 rounded-lg p-4">
        <p class="text-moss-400 font-semibold text-sm mb-1">Dynamic mapping</p>
        <p class="text-gray-400 text-xs leading-relaxed">Schema changes in source systems no longer break pipelines. Mapping resolved at runtime — removing the manual maintenance cycle that caused delays.</p>
      </div>
    </div>
  </ArchitectureDiagramModal>

  <!-- Solytic Architecture Modal -->
  <ArchitectureDiagramModal
    v-if="activeModal === 'solytic'"
    title="Solytic — Greenfield Data Warehouse"
    subtitle="Architectural decisions behind a data warehouse built from scratch"
    @close="activeModal = null"
  >
    <div class="flex flex-col items-center gap-0 text-sm font-medium select-none">
      <div class="flex gap-3 justify-center flex-wrap">
        <div class="arch-node bg-gray-800">Commercial data</div>
        <div class="arch-node bg-gray-800">Operational data</div>
        <div class="arch-node bg-gray-800">Technical data</div>
      </div>
      <div class="arch-arrow" />
      <div class="arch-node bg-moss-900 border-moss-700 w-72 text-center">
        <p class="text-moss-400 font-semibold">Apache Airflow</p>
        <p class="text-gray-400 text-xs mt-0.5">Orchestration + scheduling</p>
      </div>
      <div class="arch-arrow" />
      <div class="arch-node bg-gray-800 w-72 text-center">
        <p class="text-gray-300 font-semibold">Snowflake — Bronze Layer</p>
        <p class="text-gray-500 text-xs mt-0.5">Raw ingestion, immutable source data</p>
      </div>
      <div class="text-xs text-moss-500 -mt-1 mb-1">⟵ Greenfield decision: Snowflake over legacy DWH</div>
      <div class="arch-arrow" />
      <div class="arch-node bg-moss-900 border-moss-700 w-72 text-center">
        <p class="text-moss-400 font-semibold">dbt — Silver / Gold Layers</p>
        <p class="text-gray-400 text-xs mt-0.5">Testable, version-controlled transformations</p>
      </div>
      <div class="text-xs text-moss-500 -mt-1 mb-1">⟵ dbt: every model documented and tested</div>
      <div class="arch-arrow" />
      <div class="arch-node bg-gray-800 w-72 text-center">
        <p class="text-gray-300 font-semibold">Power BI</p>
        <p class="text-gray-500 text-xs mt-0.5">Governed dashboards, single source of truth</p>
      </div>
    </div>
    <div class="mt-8 grid sm:grid-cols-2 gap-4">
      <div class="bg-gray-800 rounded-lg p-4">
        <p class="text-moss-400 font-semibold text-sm mb-1">Snowflake over legacy DWH</p>
        <p class="text-gray-400 text-xs leading-relaxed">Chosen for cloud-native scalability and seamless Power BI integration. No legacy migration debt — clean foundation from day one.</p>
      </div>
      <div class="bg-gray-800 rounded-lg p-4">
        <p class="text-moss-400 font-semibold text-sm mb-1">dbt for transformations</p>
        <p class="text-gray-400 text-xs leading-relaxed">Every transformation is version-controlled, documented, and tested. When a dashboard shows wrong numbers, the broken model is findable in seconds.</p>
      </div>
    </div>
  </ArchitectureDiagramModal>

  <!-- EON Architecture Modal -->
  <ArchitectureDiagramModal
    v-if="activeModal === 'eon'"
    title="EON — Enterprise Snowflake Migration"
    subtitle="Zero-downtime migration strategy across a multi-domain enterprise environment"
    @close="activeModal = null"
  >
    <div class="flex flex-col items-center gap-0 text-sm font-medium select-none">
      <div class="flex gap-3 justify-center flex-wrap">
        <div class="arch-node bg-gray-800">Legacy on-prem sources</div>
        <div class="arch-node bg-gray-800">ERP / SAP systems</div>
      </div>
      <div class="arch-arrow" />
      <div class="arch-node bg-moss-900 border-moss-700 w-72 text-center">
        <p class="text-moss-400 font-semibold">Migration / Staging Layer</p>
        <p class="text-gray-400 text-xs mt-0.5">Parallel run: legacy + new pipelines simultaneously</p>
      </div>
      <div class="text-xs text-moss-500 -mt-1 mb-1">⟵ Parallel run strategy: zero downtime cutover</div>
      <div class="arch-arrow" />
      <div class="arch-node bg-gray-800 w-72 text-center">
        <p class="text-gray-300 font-semibold">Snowflake + dbt</p>
        <p class="text-gray-500 text-xs mt-0.5">Unified data warehouse across business units</p>
      </div>
      <div class="arch-arrow" />
      <div class="arch-node bg-moss-900 border-moss-700 w-72 text-center">
        <p class="text-moss-400 font-semibold">Governance Layer</p>
        <p class="text-gray-400 text-xs mt-0.5">Row-level security + audit trail per business unit</p>
      </div>
      <div class="text-xs text-moss-500 -mt-1 mb-1">⟵ Compliance requirement: per-BU access control</div>
      <div class="arch-arrow" />
      <div class="flex gap-3 justify-center flex-wrap">
        <div class="arch-node bg-gray-800">Reporting layer</div>
        <div class="arch-node bg-gray-800">Analytics teams</div>
      </div>
    </div>
    <div class="mt-8 grid sm:grid-cols-2 gap-4">
      <div class="bg-gray-800 rounded-lg p-4">
        <p class="text-moss-400 font-semibold text-sm mb-1">Parallel run strategy</p>
        <p class="text-gray-400 text-xs leading-relaxed">Legacy and new pipelines ran simultaneously during cutover. Business users kept their existing reports while the new layer was validated — zero downtime, zero trust gap.</p>
      </div>
      <div class="bg-gray-800 rounded-lg p-4">
        <p class="text-moss-400 font-semibold text-sm mb-1">Governance layer</p>
        <p class="text-gray-400 text-xs leading-relaxed">Row-level security enforced per business unit with a full audit trail. Meets compliance requirements without restricting analyst access to the data they're authorised to see.</p>
      </div>
    </div>
  </ArchitectureDiagramModal>
</template>

<style scoped>
.arch-node { @apply border border-gray-700 rounded-lg px-4 py-2 text-gray-300; }
.arch-arrow { @apply w-px h-6 bg-gray-600 mx-auto; }
</style>
