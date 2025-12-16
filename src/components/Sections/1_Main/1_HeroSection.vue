<script setup lang="ts">
const technologies = [
  'Python',
  'SQL',
  'Airflow',
  'Databricks',
  'Snowflake',
  'dbt',
  'Power BI',
];
</script>

<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center">
        <h1 class="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Rodenburg
          <span class="text-moss-500">Business Intelligence</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Transforming raw data into actionable insights through robust data
          pipelines and scalable architectures.
        </p>
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <!-- Project Experience Link -->
          <router-link to="/meet-Anne"
            class="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full hover:bg-primary-50 transition-colors">
              Schedule a meeting
          </router-link>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <a v-for="tech in technologies" :key="tech" href="#skills"
            class="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm shadow-sm">
            {{ tech }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
