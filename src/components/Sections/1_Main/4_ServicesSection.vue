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

const services: Array<{ title: string; description: string; icon: Component }> = [
  {
    title: 'Data Warehouse Architecture',
    description:
      'Scalable, structured architecture ensuring efficient storage, retrieval, and integration of data across enterprise systems.',
    icon: Database,
  },
  {
    title: 'Data Modeling',
    description:
      'Scalable models consolidating multi-source data for optimized storage, fast retrieval, and seamless analytical processing.',
    icon: BarChart3,
  },
  {
    title: 'Intelligent Dashboards',
    description:
      'Automated dashboards eliminating manual reporting while delivering real-time insights into business-critical key performance indicators.',
    icon: LayoutDashboard,
  },
  {
    title: 'API Ingestions',
    description:
      'Seamless API integrations automating data ingestion, ensuring continuous, real-time updates with minimal manual intervention.',
    icon: Plug,
  },
  {
    title: 'Data Integration & ETL',
    description:
      'Optimized ETL workflows consolidating and transforming data for structured, efficient storage and analytics-ready datasets.',
    icon: GitMerge,
  },
  {
    title: 'Data Lake Implementation',
    description:
      'Scalable data lakes storing structured and unstructured data, enabling flexible, high-performance exploration and analytics.',
    icon: Cloud,
  },
  {
    title: 'Best Practices Implementation',
    description:
      'Industry-standard methodologies ensuring data integrity, security, governance, and compliance across all business processes.',
    icon: CheckSquare,
  },
  {
    title: 'Data Quality Management',
    description:
      'Comprehensive frameworks monitoring, cleansing, and validating datasets to maintain accuracy, consistency, and reliability.',
    icon: ShieldCheck,
  },
  {
    title: 'Data Security & Compliance',
    description:
      'Robust security measures ensuring regulatory compliance, data privacy, encryption, and protection from unauthorized access.',
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
          <p class="text-gray-300 mb-4">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
