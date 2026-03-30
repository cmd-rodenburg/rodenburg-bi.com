<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { MessageSquare, X } from 'lucide-vue-next'
import { ANNE_EMAIL } from '../../config'
import ChatMessage from './ChatMessage.vue'
import ChatInput from './ChatInput.vue'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const REDIRECT_RESPONSE = `Hey! Yes, I built this chat interface — and yes, it could be powered by Claude right now. But AI tokens aren't free, and I'd rather spend that budget on actual client work. 😉<br><br>If you want to chat for real, I'm much better over email:<br>→ <a href="mailto:${ANNE_EMAIL}">${ANNE_EMAIL}</a><br><br>Or if you want to see if I can help with your data problem, <a href="#diagnostic">try the diagnostic below</a> — no AI required, just good questions.`

const isOpen = ref(false)
const messages = ref<Message[]>([
  { role: 'user', content: "What's your experience with Snowflake?" },
  {
    role: 'assistant',
    content:
      "I've built production Snowflake warehouses at Solytic and EON — from greenfield architecture to enterprise-scale dbt migrations. Happy to go deeper on any of it.",
  },
  { role: 'assistant', content: "Hi! I'm Anne's website — ask me anything." },
])
const messagesEndRef = ref<HTMLDivElement | null>(null)

async function scrollToBottom() {
  await nextTick()
  messagesEndRef.value?.scrollIntoView({ behavior: 'smooth' })
}

async function sendMessage(userMessage: string) {
  messages.value.push({ role: 'user', content: userMessage })
  messages.value.push({ role: 'assistant', content: REDIRECT_RESPONSE })
  if (messages.value.length > 100) messages.value = messages.value.slice(-100)
  await scrollToBottom()
}
</script>

<template>
  <!-- Floating trigger button -->
  <button
    v-if="!isOpen"
    @click="isOpen = true"
    class="fixed bottom-6 right-6 z-40 w-14 h-14 bg-moss-500 hover:bg-moss-400 text-black rounded-full shadow-xl flex items-center justify-center transition-colors"
    aria-label="Open Ask Anne chat"
  >
    <MessageSquare :size="24" />
  </button>

  <!-- Chat panel -->
  <div
    v-if="isOpen"
    class="fixed bottom-6 right-6 z-40 w-80 sm:w-96 h-[480px] bg-moss-950 border border-moss-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
  >
    <!-- Header -->
    <div class="flex items-center justify-between px-4 py-3 border-b border-moss-800/60 bg-moss-900/50">
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 bg-moss-500 rounded-full"></div>
        <span class="text-sm font-semibold text-white">Ask Anne</span>
      </div>
      <button
        @click="isOpen = false"
        class="text-gray-400 hover:text-white transition-colors"
        aria-label="Close chat"
      >
        <X :size="18" />
      </button>
    </div>

    <!-- Messages -->
    <div class="flex-1 overflow-y-auto px-4 py-3">
      <ChatMessage
        v-for="(msg, i) in messages"
        :key="i"
        :message="msg.content"
        :role="msg.role"
      />
      <div ref="messagesEndRef" />
    </div>

    <!-- Input -->
    <ChatInput @submit="sendMessage" />
  </div>
</template>
