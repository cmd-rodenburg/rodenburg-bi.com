<script setup lang="ts">
import { MessageSquare, CalendarCheck, Layers } from 'lucide-vue-next'
import type { Component } from 'vue'

const phases: Array<{
  number: string
  icon: Component
  title: string
  body: string
  tag: string
  ctaLabel: string
  ctaHref: string
  ctaExternal: boolean
}> = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Understand the problem',
    body: "I won't quote a solution before I understand the problem. A brief conversation or written summary is enough to tell if I can help.",
    tag: 'Free · 30 minutes',
    ctaLabel: 'Tell me what\'s broken',
    ctaHref: 'mailto:anne@rodenburg-bi.com',
    ctaExternal: true,
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Discovery Day',
    body: 'One day, on-site or remote. I map what\'s broken, why it\'s broken, and what fixing it would actually take. Deliverable: a scope document you can take into any internal approval process.',
    tag: 'Fixed fee · One day',
    ctaLabel: 'Book a Discovery Day',
    ctaHref: '/meet-Anne',
    ctaExternal: false,
  },
  {
    number: '03',
    icon: Layers,
    title: 'Implementation',
    body: 'Embedded in your team for 3–12 months. From raw source to production pipeline to trusted dashboard. I own the full stack — not just the ingestion, not just the reporting.',
    tag: 'Project-based · DACH market',
    ctaLabel: 'See the work',
    ctaHref: '#projects',
    ctaExternal: true,
  },
]
</script>

<template>
  <section id="how-i-work" class="py-20 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">How I work</h2>
      <p class="text-center text-gray-400 -mt-4 mb-4">
        Not a proposal. Not a pitch deck. A structured process from problem to production.
      </p>
      <p class="text-center text-moss-500 text-sm mb-12">
        The diagnostic above is Phase 1 — online. Here's what comes next.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="phase in phases"
          :key="phase.number"
          class="card p-8 flex flex-col"
        >
          <!-- Phase number + icon -->
          <div class="flex items-center gap-4 mb-6">
            <span class="text-5xl font-bold text-moss-500/30 leading-none select-none">{{ phase.number }}</span>
            <component :is="phase.icon" class="w-7 h-7 text-moss-500" />
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">{{ phase.title }}</h3>
          <p class="text-gray-300 leading-relaxed mb-4 flex-1">{{ phase.body }}</p>

          <p class="text-moss-500 text-sm font-medium mb-6">{{ phase.tag }}</p>

          <!-- CTA -->
          <a
            v-if="phase.ctaExternal"
            :href="phase.ctaHref"
            class="inline-block text-center border border-moss-500 text-moss-500 font-medium px-6 py-2 rounded-full hover:bg-moss-500/10 transition-colors text-sm mt-auto"
          >
            {{ phase.ctaLabel }}
          </a>
          <router-link
            v-else
            :to="phase.ctaHref"
            class="inline-block text-center border border-moss-500 text-moss-500 font-medium px-6 py-2 rounded-full hover:bg-moss-500/10 transition-colors text-sm mt-auto"
          >
            {{ phase.ctaLabel }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
