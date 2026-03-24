<script setup lang="ts">
const clients = [
  { name: 'EON', full: 'E.ON' },
  { name: 'Capgemini', full: 'Capgemini' },
  { name: 'Solytic', full: 'Solytic' },
  { name: 'Accenture', full: 'Accenture' },
  { name: 'TDM', full: 'TDM Systems' },
]
</script>

<template>
  <section class="bg-gray-900 py-10 border-y border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p class="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">
        Trusted by
      </p>
      <div class="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
        <span
          v-for="client in clients"
          :key="client.name"
          class="text-gray-600 font-semibold text-lg sm:text-xl tracking-wide transition-colors duration-200 hover:text-gray-300 cursor-default select-none"
          :title="client.full"
        >
          {{ client.full }}
        </span>
      </div>
      <p class="text-center text-gray-500 text-sm mt-8">
        TDM Systems brought Anne back by request to take their proof-of-concept to production.
      </p>
    </div>
  </section>
</template>
