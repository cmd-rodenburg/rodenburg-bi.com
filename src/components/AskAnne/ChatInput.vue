<script setup lang="ts">
import { ref } from 'vue'
import { Send } from 'lucide-vue-next'

const emit = defineEmits<{ submit: [message: string] }>()

const text = ref('')
const textareaRef = ref<HTMLTextAreaElement | null>(null)

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    submit()
  }
}

function submit() {
  const trimmed = text.value.trim()
  if (!trimmed) return
  emit('submit', trimmed)
  text.value = ''
  if (textareaRef.value) textareaRef.value.style.height = 'auto'
}

function autoResize(e: Event) {
  const el = e.target as HTMLTextAreaElement
  requestAnimationFrame(() => {
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 96) + 'px'
  })
}
</script>

<template>
  <div class="flex items-end gap-2 p-3 border-t border-moss-800/50">
    <textarea
      ref="textareaRef"
      v-model="text"
      @keydown="handleKeydown"
      @input="autoResize"
      placeholder="Ask me anything..."
      rows="1"
      class="flex-1 resize-none bg-moss-900/60 border border-moss-800/50 rounded-xl px-3 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-moss-500 transition-colors"
      style="max-height: 96px; overflow-y: auto;"
    />
    <button
      @click="submit"
      :disabled="!text.trim()"
      class="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-moss-500 rounded-xl text-black hover:bg-moss-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
    >
      <Send :size="16" />
    </button>
  </div>
</template>
