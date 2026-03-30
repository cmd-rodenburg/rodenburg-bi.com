<script setup lang="ts">
import { Mail, Calendar } from 'lucide-vue-next'
import { ANNE_EMAIL } from '../../../config'
</script>

<template>
  <section id="contact" class="py-20 bg-gray-900 text-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6">Tell me what's broken.</h2>

      <p class="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl mx-auto">
        I don't do discovery calls by default — I do them when it's worth both our time.
        Use the <a href="#diagnostic" class="text-moss-500 hover:underline">diagnostic above</a> to describe your situation, then reach out.
        If it sounds like a fit, I'll suggest a next step.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <router-link
          to="/meet-Anne"
          class="inline-flex items-center justify-center gap-2 bg-moss-500 text-black font-semibold px-8 py-3 rounded-full hover:bg-moss-400 transition-colors"
        >
          <Calendar class="w-4 h-4" />
          Book a Discovery Day
        </router-link>
        <a
          :href="`mailto:${ANNE_EMAIL}`"
          class="inline-flex items-center justify-center gap-2 border-2 border-moss-500 text-moss-500 font-semibold px-8 py-3 rounded-full hover:bg-moss-500/10 transition-colors"
        >
          <Mail class="w-4 h-4" />
          Email first
        </a>
      </div>

      <!-- Social links -->
      <div class="flex justify-center gap-6 text-gray-500 text-sm">
        <a
          href="https://www.linkedin.com/in/annerodenburgbi"
          target="_blank"
          rel="noopener"
          class="hover:text-gray-300 transition-colors"
        >
          LinkedIn
        </a>
        <span>·</span>
        <a
          href="https://medium.com/@rodenburg.bi"
          target="_blank"
          rel="noopener"
          class="hover:text-gray-300 transition-colors"
        >
          Medium
        </a>
        <span>·</span>
        <a
          :href="`mailto:${ANNE_EMAIL}`"
          class="hover:text-gray-300 transition-colors"
        >
          {{ ANNE_EMAIL }}
        </a>
      </div>
    </div>
  </section>
</template>
