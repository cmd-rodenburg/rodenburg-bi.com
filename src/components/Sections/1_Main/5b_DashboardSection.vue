<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

// Technology usage across the 5 data engineering projects
const techData = [
  { tech: 'SQL',              count: 3, max: 3 },
  { tech: 'dbt',              count: 3, max: 3 },
  { tech: 'Azure / ADF',      count: 3, max: 3 },
  { tech: 'Databricks',       count: 2, max: 3 },
  { tech: 'Snowflake',        count: 2, max: 3 },
  { tech: 'Power BI',         count: 2, max: 3 },
  { tech: 'Python',           count: 2, max: 3 },
  { tech: 'Airflow',          count: 2, max: 3 },
]

// Verified performance metrics
const perfData = [
  { label: 'TDM Systems — Pipeline ingestion time',  value: 97, color: 'bg-moss-500' },
  { label: 'Henkel — API-based ingestion processing', value: 85, color: 'bg-moss-400' },
  { label: 'Solytic — Daily ingestion load',          value: 35, color: 'bg-moss-600' },
]

const sectionEl = ref<HTMLElement | null>(null)
const animated  = ref(false)
const barWidths = ref<number[]>([...techData.map(() => 0), ...perfData.map(() => 0)])

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function animateBar(index: number, target: number, duration = 1200) {
  if (prefersReduced) { barWidths.value[index] = target; return }
  const start = performance.now()
  const step = (now: number) => {
    const p = Math.min((now - start) / duration, 1)
    barWidths.value[index] = Math.round((1 - Math.pow(1 - p, 3)) * target)
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

useIntersectionObserver(sectionEl, ([entry]) => {
  if (entry.isIntersecting && !animated.value) {
    animated.value = true
    techData.forEach((d, i) =>
      setTimeout(() => animateBar(i, Math.round((d.count / d.max) * 100), 1000), i * 60)
    )
    perfData.forEach((d, i) =>
      setTimeout(() => animateBar(techData.length + i, d.value, 1200), i * 80)
    )
  }
})
</script>

<template>
  <section id="dashboard" ref="sectionEl" class="py-20 bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">By the Numbers</h2>
      <p class="text-center text-gray-400 mb-12 -mt-4">Real data from real engagements.</p>

      <div class="grid md:grid-cols-2 gap-10">

        <!-- Chart 1: Tech stack usage -->
        <div class="card p-8">
          <h3 class="text-lg font-semibold text-white mb-1">Tech Stack Coverage</h3>
          <p class="text-gray-500 text-sm mb-6">Technologies used across 5 data engineering projects</p>
          <div class="space-y-4">
            <div v-for="(d, i) in techData" :key="d.tech">
              <div class="flex justify-between text-sm mb-1">
                <span class="text-gray-300">{{ d.tech }}</span>
                <span class="text-gray-500">{{ d.count }} / {{ d.max }} projects</span>
              </div>
              <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  class="h-full bg-moss-500 rounded-full transition-none"
                  :style="{ width: barWidths[i] + '%' }"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Chart 2: Performance improvements -->
        <div class="card p-8">
          <h3 class="text-lg font-semibold text-white mb-1">Performance Improvements</h3>
          <p class="text-gray-500 text-sm mb-6">Verified metrics from client engagements</p>
          <div class="space-y-6">
            <div v-for="(d, i) in perfData" :key="d.label">
              <div class="flex justify-between text-sm mb-2">
                <span class="text-gray-300 leading-tight max-w-[75%]">{{ d.label }}</span>
                <span class="text-moss-400 font-bold text-lg">{{ barWidths[techData.length + i] }}%</span>
              </div>
              <div class="h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  :class="['h-full rounded-full', d.color]"
                  :style="{ width: barWidths[techData.length + i] + '%' }"
                />
              </div>
              <p class="text-gray-600 text-xs mt-1">reduction in time</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
