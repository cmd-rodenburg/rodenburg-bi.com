<script setup lang="ts">
defineProps<{
  message: string
  role: 'user' | 'assistant'
}>()
</script>

<template>
  <div :class="['flex mb-3', role === 'user' ? 'justify-end' : 'justify-start']">
    <div
      :class="[
        'max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
        role === 'user'
          ? 'bg-moss-600 text-white rounded-br-sm'
          : 'bg-moss-900/80 border border-moss-800/40 text-gray-200 rounded-bl-sm',
      ]"
    >
      <span v-if="role === 'user'">{{ message }}</span>
      <!-- v-html is safe here: assistant content is always from REDIRECT_RESPONSE (controlled constant) -->
      <span v-else v-html="message" class="prose-links"></span>
    </div>
  </div>
</template>
