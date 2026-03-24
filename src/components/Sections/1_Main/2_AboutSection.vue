<script setup lang="ts">
import { ref, computed } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const stats = [
  { target: 97, prefix: '', suffix: '%', label: 'Pipeline time reduction' },
  { target: 85, prefix: '', suffix: '%', label: 'API ingestion time saved' },
  { target: 35, prefix: '', suffix: '%', label: 'Daily ingestion reduction' },
  { target: 268, prefix: '1st / ', suffix: '', label: 'iGEM international rank' },
]

const counts = ref(stats.map(() => 0))
const hasAnimated = ref(false)
const statsEl = ref<HTMLElement | null>(null)

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function animateTo(index: number, target: number, duration = 1500) {
  if (prefersReducedMotion) { counts.value[index] = target; return }
  const start = performance.now()
  function step(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    counts.value[index] = Math.round(eased * target)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

useIntersectionObserver(statsEl, ([entry]) => {
  if (entry.isIntersecting && !hasAnimated.value) {
    hasAnimated.value = true
    stats.forEach((stat, i) => animateTo(i, stat.target))
  }
})

const displayed = computed(() =>
  stats.map((s, i) => `${s.prefix}${counts.value[i]}${s.suffix}`)
)
</script>

<template>
  <section id="about" class="py-20 bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">About me</h2>

      <div class="container mx-auto px-4">
        <div class="md:grid md:grid-cols-[2fr_1fr] md:gap-12">
          <div>
            <p class="text-xl text-moss-500 font-semibold mb-8">
              Freelance data engineer with a knack for business intelligence
            </p>
            <div class="space-y-6">
              <p class="text-justify text-gray-300 leading-relaxed">
                I help organizations turn scattered, unreliable data into clear, decision-ready insight. As a senior data engineer and business intelligence specialist, I design data platforms that give teams control, speed, and confidence in their numbers.
              </p>
              <p class="text-justify text-gray-300 leading-relaxed">
                Most data problems aren't data problems. They're trust problems — engineers who built something the business doesn't understand, or analysts who never got what they asked for. I've worked across five countries, from FMCG to energy to e-commerce, and the pattern repeats everywhere: good engineers and good analysts, operating in silos that nobody built a bridge between.
              </p>
              <p class="text-justify text-gray-300 leading-relaxed">
                I build that bridge. The pipelines that feed the dashboards. The models that the dashboards trust. When a number looks wrong, I can trace it from the report back to the source system and tell you exactly where it broke.
              </p>
              <p class="text-justify text-gray-300 leading-relaxed">
                My background is in molecular medicine — where bad data costs lives. I won first place in an international synthetic biology competition (iGEM, 1st of 268 teams). That standard of rigor carries into every pipeline and model I build.
              </p>
            </div>
          </div>

          <div class="mt-8 md:mt-0">
            <div class="flex flex-col items-center">
              <div class="w-full max-w-[250px] mb-8">
                <img
                  src="/images/AnneRodenburg.jpg"
                  alt="Profile picture"
                  class="rounded-full w-full aspect-square object-cover shadow-lg"
                />
              </div>
              <div ref="statsEl" class="w-full grid grid-cols-2 gap-4">
                <div
                  v-for="(stat, i) in stats"
                  :key="stat.label"
                  class="bg-moss-900/50 rounded-lg p-4 text-center"
                >
                  <h3 class="text-xl font-bold text-moss-400 mb-1">{{ displayed[i] }}</h3>
                  <p class="text-gray-400 text-sm">{{ stat.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
