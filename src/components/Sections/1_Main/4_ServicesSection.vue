<script setup lang="ts">
import {
  Database,
  BarChart3,
  LayoutDashboard,
  Plug,
  GitMerge,
  Cloud,
  CheckSquare,
  ShieldCheck,
  Lock,
} from 'lucide-vue-next'
import type { Component } from 'vue'

const services: Array<{ title: string; engineering: string; outcome: string; icon: Component }> = [
  {
    title: 'Data Warehouse Architecture',
    engineering: 'I design the warehouse architecture.',
    outcome: 'Your analysts stop waiting for queries to finish.',
    icon: Database,
  },
  {
    title: 'Data Modeling',
    engineering: 'I build the data models that power your reports.',
    outcome: 'One version of the truth — no more spreadsheet debates.',
    icon: BarChart3,
  },
  {
    title: 'Intelligent Dashboards',
    engineering: 'I build the pipeline behind every dashboard.',
    outcome: 'Your team gets answers the same day, not next week.',
    icon: LayoutDashboard,
  },
  {
    title: 'API Ingestions',
    engineering: 'I redesign API ingestion to run in parallel.',
    outcome: 'Data arrives on time, every time — no manual chasing.',
    icon: Plug,
  },
  {
    title: 'Data Integration & ETL',
    engineering: 'I build the ETL pipelines that connect your sources.',
    outcome: 'Marketing and finance finally agree on the numbers.',
    icon: GitMerge,
  },
  {
    title: 'Data Lake Implementation',
    engineering: 'I implement scalable data lakes for all your data types.',
    outcome: 'Analysts explore freely — without waiting on IT.',
    icon: Cloud,
  },
  {
    title: 'Best Practices & Governance',
    engineering: 'I implement testing, CI/CD, and governance for your data platform.',
    outcome: 'Your team trusts the data because someone is watching the pipes.',
    icon: CheckSquare,
  },
  {
    title: 'Data Quality Management',
    engineering: 'I build monitoring and validation into every pipeline.',
    outcome: 'When the numbers look wrong, you know within hours — not weeks.',
    icon: ShieldCheck,
  },
  {
    title: 'Data Security & Compliance',
    engineering: 'I implement encryption, access controls, and audit trails.',
    outcome: 'Your data is protected and auditable — without slowing your team down.',
    icon: Lock,
  },
]
</script>

<template>
  <section id="services" class="bg-gray-800 py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Services</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="index" class="card p-8">
          <div class="flex justify-center items-center mb-4">
            <component :is="service.icon" class="w-12 h-12 text-moss-500" />
          </div>
          <h3 class="text-2xl font-semibold mb-3">{{ service.title }}</h3>
          <p class="text-gray-300 mb-1">{{ service.engineering }}</p>
          <p class="text-moss-500 text-sm">{{ service.outcome }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
