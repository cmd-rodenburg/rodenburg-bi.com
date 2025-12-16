<script setup lang="ts">
const projects = [
  {
    title: 'Data lakehouse development',
    metrics: 'Improved workflow processes by 80%',
    description:
      'Developed a Gen3 data lakehouse in Databricks using Delta tables, \
      optimizing Amazon APIs to enhance performance and enable efficient data ingestion.',
    subdescription:
      'Proof of concept utilizing AEP elements for CI/CD  <a href="https://medium.com/@rodenburg.bi/solving-aep-object-management-in-multiple-sandboxes-through-code-882b23ce5f18" target="_blank" class="text-moss-500 hover:underline">Check out the blog here</a>.',
    technologies: [
      'Databricks',
      'Adobe Experience Platform',
      'Azure Data Factory',
      'Delta tables',
      'DevOps',
      'GIT',
      'Power BI',
      'API enhancement',
    ],
    image: '/images/Gen3_data_platform.png',
  },
  {
    title: 'Greenfield Data Warehouse',
    metrics: 'Established the Business Intelligence Department',
    description:
      'Led the migration of an on-premise data warehouse to Snowflake, whilst \
    also restructuring the data model to include best practices and data goverance using dbt.',
    subdescription: 'Implemented automated feedback for CRM tools',
    technologies: [
      'Snowflake',
      'SQL',
      'dbt',
      'Azure ',
      'Airflow',
      'GIT',
      'Power BI',
      'Docker',
    ],

    image: '/images/Gen2_data_platform.png',
  },
];
</script>

<template>
  <section id="projects" class="pt-20 pb-20 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Featured Projects</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div v-for="(project, index) in projects" :key="index" class="card p-8">
          <h3 class="text-2xl font-semibold mb-3">{{ project.title }}</h3>
          <p class="text-moss-500 font-medium text-lg mb-4">
            {{ project.metrics }}
          </p>
          <p class="text-gray-300 mb-4">
            {{ project.description }}
          </p>
          <p class="text-gray-300 mb-4" v-html="project.subdescription"></p>
          <img v-if="project.image" :src="project.image" :alt="project.title"
            class="w-full h-70 object-cover rounded-lg mb-4" />
          <div class="flex flex-wrap gap-3 mb-5">
            <a v-for="tech in project.technologies" :key="tech" href="#skills"
              class="bg-gray-700 rounded-lg px-4 py-2 text-sm">
              {{ tech }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
