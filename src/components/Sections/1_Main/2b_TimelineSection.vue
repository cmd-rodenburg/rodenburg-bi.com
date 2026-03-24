<script setup lang="ts">
import { ref } from 'vue'
import { Briefcase, MapPin, Star } from 'lucide-vue-next'

interface TimelineEntry {
  company: string
  role: string
  period: string
  location: string
  rehire?: boolean
  metric?: string
  detail: string
  technologies: string[]
}

const entries: TimelineEntry[] = [
  {
    company: 'TDM Systems',
    role: 'Data Platform Engineer',
    period: '2025 → 2026',
    location: 'Netherlands',
    rehire: true,
    metric: '97% reduction in pipeline ingestion time',
    detail: 'Brought back by the client to take the proof-of-concept to full production. Built parallelised ADF pipelines and dynamic mapping to cut ingestion time by 97%.',
    technologies: ['Databricks', 'Azure Data Factory', 'Python', 'Terraform'],
  },
  {
    company: 'Solytic',
    role: 'Senior Data Engineer & BI Lead',
    period: '2024 → 2025',
    location: 'Germany',
    metric: '35% reduction in daily ingestion load',
    detail: 'Established the BI department from scratch. Owned data source integration across commercial, operational, and technical domains into governed Power BI dashboards.',
    technologies: ['Snowflake', 'dbt', 'Azure', 'Airflow', 'Power BI'],
  },
  {
    company: 'Henkel',
    role: 'Data Engineer',
    period: '2023 → 2024',
    location: 'Germany',
    metric: '85% time reduction on API-based ingestions',
    detail: 'Redesigned API ingestion pipelines through architectural improvements to parallelism and error handling. Delivered consistent, low-latency data flows across multiple business units.',
    technologies: ['Databricks', 'PySpark', 'Python', 'Azure Data Factory'],
  },
  {
    company: 'EON',
    role: 'Data Engineer',
    period: '2022 → 2023',
    location: 'Germany',
    metric: 'Enterprise-scale Snowflake + dbt',
    detail: 'Delivered enterprise-scale Snowflake and dbt implementation for one of Europe\'s largest energy companies. Focused on data modelling, pipeline reliability, and governance.',
    technologies: ['Snowflake', 'dbt', 'SQL', 'Airflow'],
  },
  {
    company: 'Junglück',
    role: 'Data Engineer',
    period: '2022',
    location: 'Germany',
    detail: 'Complete restructuring of the data warehouse for a fast-growing e-commerce brand. Consolidated fragmented sources and established clean data models for marketing and operations.',
    technologies: ['BigQuery', 'dbt', 'SQL', 'Power BI'],
  },
  {
    company: 'Accenture / Capgemini',
    role: 'Data & BI Consultant',
    period: '2019 → 2022',
    location: 'Netherlands',
    detail: 'Delivered data solutions across international clients in the Dutch and German markets, including engagements with Cargill and Transavia.',
    technologies: ['SQL', 'Power BI', 'Azure', 'Python'],
  },
]

const expanded = ref<number | null>(null)
function toggle(i: number) {
  expanded.value = expanded.value === i ? null : i
}
</script>

<template>
  <section id="timeline" class="py-20 bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Experience</h2>

      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gray-700 -translate-x-1/2" />

        <div class="space-y-8">
          <div
            v-for="(entry, i) in entries"
            :key="i"
            class="relative pl-12 sm:pl-0"
            :class="i % 2 === 0 ? 'sm:pr-[calc(50%+2rem)]' : 'sm:pl-[calc(50%+2rem)]'"
          >
            <!-- Dot -->
            <div
              class="absolute left-4 sm:left-1/2 top-5 w-3 h-3 rounded-full -translate-x-1/2 border-2"
              :class="entry.rehire ? 'bg-moss-500 border-moss-500' : 'bg-gray-700 border-gray-500'"
            />

            <!-- Card -->
            <div
              class="card p-5 cursor-pointer hover:border-moss-500 transition-colors"
              @click="toggle(i)"
            >
              <div class="flex items-start justify-between gap-2">
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <h3 class="text-lg font-semibold text-white">{{ entry.company }}</h3>
                    <span
                      v-if="entry.rehire"
                      class="inline-flex items-center gap-1 text-xs bg-moss-500/20 text-moss-400 px-2 py-0.5 rounded-full"
                    >
                      <Star class="w-3 h-3" /> Returned by request
                    </span>
                  </div>
                  <p class="text-moss-500 text-sm font-medium">{{ entry.role }}</p>
                  <div class="flex items-center gap-3 mt-1 text-gray-500 text-xs">
                    <span class="flex items-center gap-1">
                      <Briefcase class="w-3 h-3" />{{ entry.period }}
                    </span>
                    <span class="flex items-center gap-1">
                      <MapPin class="w-3 h-3" />{{ entry.location }}
                    </span>
                  </div>
                </div>
                <span class="text-gray-500 text-lg mt-1 shrink-0">{{ expanded === i ? '−' : '+' }}</span>
              </div>

              <p v-if="entry.metric" class="text-moss-400 text-sm font-medium mt-2">
                {{ entry.metric }}
              </p>

              <!-- Expanded detail -->
              <div v-if="expanded === i" class="mt-4 border-t border-gray-700 pt-4">
                <p class="text-gray-300 text-sm leading-relaxed mb-3">{{ entry.detail }}</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in entry.technologies"
                    :key="tech"
                    class="bg-gray-700 rounded px-2 py-1 text-xs text-gray-300"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
