<script setup lang="ts">
const projects = [
  {
    title: 'Website Redesign | Claude code implementation',
    metrics: 'Delivered fully functional website in 2 hours',
    description:
      'Rebuilt Rodenburg-bi.com to showcase my skills and experience as a Data Engineer. Implemented a fully functional website in 2 hours through a combination of HTML, CSS, and JavaScript, ensuring a smooth and responsive user experience.',
    subdescription: '',
    technologies: ['Claude code', 'AI', 'Vue3'],
  },  
  {
    title: 'Solytic | Greenfield Data Warehouse',
    metrics: '35% reduction in daily ingestion load',
    description:
      'Scaled the BI capability at Solytic from the ground up, establishing the Business Intelligence department. Owned data source integration across commercial, operational, and technical domains, consolidating into governed Power BI dashboards ensuring consistent, trusted insights.',
    subdescription: '',
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
    subdescription: '',
    technologies: ['Databricks', 'Pyspark', 'Python', 'Azure Data Factory', 'Azure', 'SQL'],
  },
  {
    title: 'EON — Enterprise Snowflake Migration',
    metrics: 'Enterprise-scale Snowflake + dbt implementation',
    description:
      'Delivered enterprise-scale Snowflake and dbt implementation for EON, one of Europe\'s largest energy companies. Focused on data modelling, pipeline reliability, and governance across a complex multi-domain environment.',
    subdescription: '',
    technologies: ['Snowflake', 'dbt', 'SQL', 'Airflow'],
  },
  {
    title: 'Junglück — Data Warehouse Restructuring',
    metrics: 'Full data warehouse restructuring',
    description:
      'Performed a complete restructuring of the data warehouse at Junglück, a fast-growing e-commerce brand. Consolidated fragmented data sources, established clean data models, and enabled reliable reporting across marketing and operations.',
    subdescription: '',
    technologies: ['BigQuery', 'dbt', 'SQL', 'Power BI'],
  },
]
</script>

<template>
  <section id="projects" class="pt-20 pb-20 bg-moss-950 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Featured Projects</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="index" class="card p-8">
          <h3 class="text-2xl font-semibold mb-3">{{ project.title }}</h3>
          <p class="text-moss-500 font-medium text-lg mb-4">
            {{ project.metrics }}
          </p>
          <p class="text-gray-300 mb-4">
            {{ project.description }}
          </p>
          <p v-if="project.subdescription" class="text-gray-300 mb-4" v-html="project.subdescription"></p>
          <div class="flex flex-wrap gap-3 mb-5">
            <a
              v-for="tech in project.technologies"
              :key="tech"
              href="#skills"
              class="bg-gray-700 rounded-lg px-4 py-2 text-sm"
            >
              {{ tech }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
