<script setup lang="ts">
import { X } from 'lucide-vue-next'

defineProps<{
  title: string
  subtitle: string
}>()

defineEmits<{ close: [] }>()
</script>

<template>
  <Teleport to="body">
    <Transition name="arch-fade">
      <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        @click.self="$emit('close')"
      >
        <div class="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8">
          <div class="flex justify-between items-start mb-6">
            <div>
              <h3 class="text-xl font-semibold text-white">{{ title }}</h3>
              <p class="text-gray-400 text-sm mt-1">{{ subtitle }}</p>
            </div>
            <button
              @click="$emit('close')"
              class="text-gray-500 hover:text-white transition-colors ml-4 shrink-0"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.arch-fade-enter-active, .arch-fade-leave-active { transition: opacity 0.2s; }
.arch-fade-enter-from, .arch-fade-leave-to { opacity: 0; }
.arch-node { @apply border border-gray-700 rounded-lg px-4 py-2 text-gray-300; }
.arch-arrow { @apply w-px h-6 bg-gray-600 mx-auto; }
</style>
