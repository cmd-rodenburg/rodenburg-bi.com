<script setup lang="ts">
import { RotateCcw } from 'lucide-vue-next'
import { ANNE_EMAIL } from '../../config'
import type { ResultNode } from './diagnosticData'

defineProps<{ node: ResultNode }>()
defineEmits<{ restart: [] }>()
</script>

<template>
  <div>
    <p class="text-moss-500 text-sm font-bold uppercase tracking-wider mb-3">
      {{ node.category }}
    </p>

    <p class="text-gray-300 leading-relaxed mb-6">
      {{ node.diagnosis }}
    </p>

    <div class="mb-6">
      <span class="text-gray-500 text-xs uppercase tracking-wider">Relevant project</span>
      <div class="mt-2">
        <a
          href="#projects"
          class="inline-block bg-gray-700 hover:bg-gray-600 rounded-lg px-3 py-1.5 text-sm text-gray-200 transition-colors"
        >
          {{ node.projectLabel }}
        </a>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-3 mb-6">
      <a
        href="/meet-Anne"
        class="flex-1 text-center bg-moss-500 hover:bg-moss-400 text-black font-semibold px-5 py-3 rounded-full transition-colors"
      >
        {{ node.ctaLabel }} →
      </a>
      <a
        :href="`mailto:${ANNE_EMAIL}?subject=${encodeURIComponent(node.emailSubject)}`"
        class="flex-1 text-center border border-moss-500 text-moss-500 hover:bg-moss-500/10 font-semibold px-5 py-3 rounded-full transition-colors"
      >
        Email me about this
      </a>
    </div>

    <button
      @click="$emit('restart')"
      class="flex items-center gap-1.5 text-gray-500 hover:text-gray-300 text-sm transition-colors"
    >
      <RotateCcw :size="14" />
      Start over
    </button>
  </div>
</template>
