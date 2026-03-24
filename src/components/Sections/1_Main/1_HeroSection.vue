<script setup lang="ts">
const technologies = [
  'Python',
  'SQL',
  'Airflow',
  'Databricks',
  'Snowflake',
  'dbt',
  'Power BI',
]
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center bg-moss-950 overflow-hidden">
    <!-- Logo background watermark -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] sm:w-[600px] sm:h-[600px] opacity-40 pointer-events-none select-none">
      <img src="/images/RodenburgBI-logo.jpg" alt="" class="w-full h-full rounded-full object-contain" aria-hidden="true" />
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center">
        <h1 class="text-5xl sm:text-7xl font-bold text-white mb-4">
          Anne Rodenburg
        </h1>
        <p class="text-xl sm:text-2xl text-moss-500 font-medium mb-8">
          Senior Data Engineer &amp; BI Specialist — Azure · Databricks · Snowflake
        </p>
        <p class="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          I build the data infrastructure that makes Business Intelligence trustworthy.
          97% faster pipelines. 85% less ingestion overhead. Dashboards your team actually believes.
          Available for DACH-market engagements in Dutch, English, and German.
        </p>
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <router-link
            to="/meet-Anne"
            class="bg-moss-500 text-black font-semibold px-8 py-3 rounded-full hover:bg-moss-400 transition-colors"
          >
            Schedule a call
          </router-link>
          <a
            href="#projects"
            class="border-2 border-moss-500 text-moss-500 font-semibold px-8 py-3 rounded-full hover:bg-moss-500/10 transition-colors"
          >
            See my work
          </a>
        </div>
        <div class="flex flex-wrap justify-center gap-3">
          <a
            v-for="tech in technologies"
            :key="tech"
            href="#skills"
            class="px-4 py-2 bg-moss-900/60 border border-moss-800/50 rounded-full text-sm text-gray-300 hover:border-moss-500 hover:text-moss-400 transition-colors"
          >
            {{ tech }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
