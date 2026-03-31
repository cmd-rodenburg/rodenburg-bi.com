<script setup lang="ts">
import { ref, computed } from 'vue'

interface Project {
  title: string
  metrics: string
  description: string
  subdescription?: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: 'Solytic | Greenfield Data Warehouse',
    metrics: '35% reduction in daily ingestion load',
    description:
      'Scaled the BI capability at Solytic from the ground up, establishing the Business Intelligence department. Owned data source integration across commercial, operational, and technical domains, consolidating into governed Power BI dashboards ensuring consistent, trusted insights.',
    technologies: ['Snowflake', 'dbt', 'Azure', 'Airflow', 'Power BI'],
  },
  {
    title: 'TDM Systems — Data Platform (2 engagements)',
    metrics: '97% reduction in pipeline ingestion time',
    description:
      'Built and optimized a production-grade data platform for TDM Systems, achieving a 97% reduction in pipeline ingestion time through parallelization and dynamic mapping. Delivered the initial build, then was brought back by the client to take the proof-of-concept to full production — a rare indicator of trust.',
    subdescription:
      'Proof of concept utilizing AEP elements for CI/CD <a href="https://medium.com/@rodenburg.bi/solving-aep-object-management-in-multiple-sandboxes-through-code-882b23ce5f18" target="_blank" class="text-moss-500 hover:underline">Check out the blog here</a>.',
    technologies: ['Databricks', 'Azure Data Factory', 'Python', 'Terraform'],
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
    subdescription:
      'Curious to see how this site was built? Check the<a href="https://github.com/cmd-rodenburg/rodenburg-bi.com" target="_blank" class="text-moss-500 hover:underline"> GitHub repo here</a>.',
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
          "TDM Systems brought Anne back by request. 
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
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.arch-node { @apply border border-gray-700 rounded-lg px-4 py-2 text-gray-300; }
.arch-arrow { @apply w-px h-6 bg-gray-600 mx-auto; }
</style>
