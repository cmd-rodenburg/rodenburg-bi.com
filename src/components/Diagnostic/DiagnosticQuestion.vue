<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'
import type { QuestionNode } from './diagnosticData'

defineProps<{
  node: QuestionNode
  step: number
  canGoBack: boolean
}>()

defineEmits<{
  choose: [key: string]
  back: []
}>()
</script>

<template>
  <div>
    <div class="flex items-center mb-6">
      <button
        v-if="canGoBack"
        @click="$emit('back')"
        class="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors"
      >
        <ChevronLeft :size="16" />
        Back
      </button>
      <span class="ml-auto text-gray-500 text-sm">Step {{ step }}</span>
    </div>

    <h3 class="text-xl font-semibold text-white mb-6 leading-snug">
      {{ node.question }}
    </h3>

    <div class="space-y-3">
      <button
        v-for="option in node.options"
        :key="option.next"
        @click="$emit('choose', option.next)"
        class="w-full text-left bg-moss-900/60 border border-moss-800 hover:border-moss-500 hover:bg-moss-900 rounded-xl px-5 py-4 text-gray-200 transition-colors"
      >
        {{ option.text }}
      </button>
    </div>
  </div>
</template>
