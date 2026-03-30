<script setup lang="ts">
import DiagnosticTree from './DiagnosticTree.vue'
</script>

<template>
  <section id="diagnostic" class="bg-moss-950 py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Diagnose your data problem</h2>
      <p class="text-gray-400 mb-12 max-w-xl">
        Not sure where to start? Answer 2–3 questions and get a specific recommendation.
      </p>
      <div class="max-w-2xl">
        <DiagnosticTree />
      </div>
    </div>
  </section>
</template>
