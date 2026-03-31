<script setup lang="ts">
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  message: '',
  response: ''
})

const encode = (data: Record<string, string>): string => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const submitForm = () => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': 'contact',
      ...formData
    })
  })
    .then(() => {
      formData.response = 'Your message was successfully sent!'
    })
    .catch(error => {
      formData.response = `Something went wrong: ${error.message}. Please refresh and try again.`
    })
}
</script>

<template>
  <!-- Success / error message -->
  <div v-if="formData.response" class="border border-gray-700 rounded-xl px-6 py-8 text-center text-gray-300">
    {{ formData.response }}
  </div>

  <form
    v-else
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    class="space-y-5 text-left"
    @submit.prevent="submitForm"
  >
    <!-- Hidden fields for Netlify -->
    <input type="hidden" name="form-name" value="contact" />
    <div class="hidden">
      <label>Don't fill this out if you're human: <input name="bot-field" /></label>
    </div>

    <!-- Name -->
    <div class="flex flex-col gap-1">
      <label for="name" class="text-sm font-medium text-gray-300">
        Name <span class="text-red-400 ml-0.5">*</span>
      </label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        name="name"
        required
        placeholder="Your name"
        class="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-moss-500 transition-colors"
      />
    </div>

    <!-- Email -->
    <div class="flex flex-col gap-1">
      <label for="email" class="text-sm font-medium text-gray-300">
        Email <span class="text-red-400 ml-0.5">*</span>
      </label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        name="email"
        required
        placeholder="yourname@domain.com"
        class="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-moss-500 transition-colors"
      />
    </div>

    <!-- Message -->
    <div class="flex flex-col gap-1">
      <label for="message" class="text-sm font-medium text-gray-300">
        Message <span class="text-red-400 ml-0.5">*</span>
      </label>
      <textarea
        id="message"
        v-model="formData.message"
        name="message"
        required
        placeholder="What would you like to share?"
        rows="4"
        class="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-moss-500 transition-colors resize-none"
      />
    </div>

    <!-- Submit -->
    <button
      type="submit"
      class="w-full bg-moss-500 hover:bg-moss-400 text-black font-semibold px-6 py-3 rounded-full transition-colors text-sm"
    >
      Send message
    </button>
  </form>
</template>
