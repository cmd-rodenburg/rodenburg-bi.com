<script setup lang="ts">
import { ref, computed } from 'vue'
import { X } from 'lucide-vue-next'

interface Project {
  title: string
  metrics: string
  description: string
  subdescription?: string
  technologies: string[]
  hasArchitecture?: boolean
}

const projects: Project[] = [
  {
    title: 'Website Redesign | Claude code implementation',
    metrics: 'Delivered fully functional website in 2 hours',
    description:
      'Rebuilt Rodenburg-bi.com to showcase my skills and experience as a Data Engineer. Implemented a fully functional website in 2 hours through a combination of HTML, CSS, and JavaScript, ensuring a smooth and responsive user experience.',
    technologies: ['Claude code', 'AI', 'Vue3'],
  },
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
    hasArchitecture: true,
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
]

const filterChips = ['All', 'Databricks', 'Snowflake', 'dbt', 'Azure', 'Python', 'BigQuery', 'Power BI']
const activeFilter = ref('All')
const showArchitecture = ref(false)

const filtered = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p =>
        p.technologies.some(t => t.toLowerCase().includes(activeFilter.value.toLowerCase()))
      )
)
</script>

<template>
  <section id="projects" class="pt-20 pb-20 bg-moss-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Featured Projects</h2>

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
          <div v-if="project.hasArchitecture" class="mt-auto pt-4 border-t border-gray-700">
            <button
              @click="showArchitecture = true"
              class="text-sm text-moss-500 hover:text-moss-400 font-medium transition-colors"
            >
              View pipeline architecture →
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Architecture diagram modal -->
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="showArchitecture"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        @click.self="showArchitecture = false"
      >
        <div class="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8">
          <div class="flex justify-between items-start mb-6">
            <div>
              <h3 class="text-xl font-semibold text-white">TDM Systems — Pipeline Architecture</h3>
              <p class="text-gray-400 text-sm mt-1">How parallelisation and dynamic mapping achieved 97% time reduction</p>
            </div>
            <button @click="showArchitecture = false" class="text-gray-500 hover:text-white transition-colors ml-4">
              <X class="w-5 h-5" />
            </button>
          </div>

          <!-- Diagram -->
          <div class="flex flex-col items-center gap-0 text-sm font-medium select-none">

            <!-- Row 1: Sources -->
            <div class="flex gap-3 justify-center flex-wrap">
              <div class="arch-node bg-gray-800">CRM System</div>
              <div class="arch-node bg-gray-800">ERP System</div>
              <div class="arch-node bg-gray-800">External APIs</div>
            </div>

            <!-- Arrow down -->
            <div class="arch-arrow" />

            <!-- Row 2: ADF -->
            <div class="arch-node bg-moss-900 border-moss-700 w-72 text-center">
              <p class="text-moss-400 font-semibold">Azure Data Factory</p>
              <p class="text-gray-400 text-xs mt-0.5">Parallel trigger orchestration</p>
            </div>
            <div class="text-xs text-moss-500 -mt-1 mb-1">⟵ Parallelisation key decision</div>

            <!-- Parallel arrows -->
            <div class="flex gap-8">
              <div class="arch-arrow" />
              <div class="arch-arrow" />
              <div class="arch-arrow" />
            </div>

            <!-- Row 3: Bronze -->
            <div class="flex gap-3 justify-center flex-wrap">
              <div class="arch-node bg-gray-800 w-36 text-center">
                <p class="text-gray-300">Bronze</p>
                <p class="text-gray-500 text-xs">Raw ingestion A</p>
              </div>
              <div class="arch-node bg-gray-800 w-36 text-center">
                <p class="text-gray-300">Bronze</p>
                <p class="text-gray-500 text-xs">Raw ingestion B</p>
              </div>
              <div class="arch-node bg-gray-800 w-36 text-center">
                <p class="text-gray-300">Bronze</p>
                <p class="text-gray-500 text-xs">Raw ingestion C</p>
              </div>
            </div>

            <!-- Converge arrows -->
            <div class="flex gap-8">
              <div class="arch-arrow" />
              <div class="arch-arrow" />
              <div class="arch-arrow" />
            </div>

            <!-- Row 4: Databricks Silver -->
            <div class="arch-node bg-moss-900 border-moss-700 w-72 text-center">
              <p class="text-moss-400 font-semibold">Databricks — Silver Layer</p>
              <p class="text-gray-400 text-xs mt-0.5">Dynamic mapping + transformation (Python)</p>
            </div>
            <div class="text-xs text-moss-500 -mt-1 mb-1">⟵ Dynamic mapping key decision</div>

            <div class="arch-arrow" />

            <!-- Row 5: Gold -->
            <div class="arch-node bg-gray-800 w-72 text-center">
              <p class="text-gray-300 font-semibold">Gold Layer</p>
              <p class="text-gray-500 text-xs mt-0.5">Business-ready data models</p>
            </div>

            <div class="arch-arrow" />

            <!-- Row 6: Output -->
            <div class="flex gap-3 justify-center flex-wrap">
              <div class="arch-node bg-gray-800">BI Reports</div>
              <div class="arch-node bg-gray-800">Dashboards</div>
            </div>
          </div>

          <!-- Annotation summary -->
          <div class="mt-8 grid sm:grid-cols-2 gap-4">
            <div class="bg-gray-800 rounded-lg p-4">
              <p class="text-moss-400 font-semibold text-sm mb-1">Parallelisation</p>
              <p class="text-gray-400 text-xs leading-relaxed">ADF triggers run ingestion streams concurrently instead of sequentially. Multiple sources are processed at the same time, eliminating the main bottleneck.</p>
            </div>
            <div class="bg-gray-800 rounded-lg p-4">
              <p class="text-moss-400 font-semibold text-sm mb-1">Dynamic mapping</p>
              <p class="text-gray-400 text-xs leading-relaxed">Schema changes in source systems no longer break pipelines. Mapping is resolved at runtime, removing the manual maintenance cycle that caused delays.</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.arch-node {
  @apply border border-gray-700 rounded-lg px-4 py-2 text-gray-300;
}
.arch-arrow {
  @apply w-px h-6 bg-gray-600 mx-auto;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
