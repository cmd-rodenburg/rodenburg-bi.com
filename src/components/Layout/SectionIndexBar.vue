<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const sections = [
  { id: 'hero',       label: 'Introduction' },
  { id: 'about',      label: 'About' },
  { id: 'projects',   label: 'Featured Projects' },
  { id: 'services',   label: 'Services' },
  { id: 'diagnostic', label: 'Diagnostic' },
  { id: 'how-i-work', label: 'How I Work' },
  { id: 'skills',     label: 'Skills' },
  { id: 'blog',       label: 'Blog' },
  { id: 'contact',    label: 'Contact' },
];

const activeSection = ref<string>('');
const visible = ref(false);

let hideTimer: ReturnType<typeof setTimeout> | null = null;
let observer: IntersectionObserver | null = null;

const showBar = () => {
  visible.value = true;
  if (hideTimer) clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    visible.value = false;
  }, 2000);
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', showBar, { passive: true });
  window.addEventListener('mousemove', showBar, { passive: true });

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      }
    },
    { threshold: 0.3 }
  );

  sections.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) observer!.observe(el);
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', showBar);
  window.removeEventListener('mousemove', showBar);
  if (hideTimer) clearTimeout(hideTimer);
  if (observer) observer.disconnect();
});
</script>

<template>
  <nav
    class="fixed left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 transition-opacity duration-500 hidden lg:flex"
    :class="visible ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    aria-label="Page sections"
  >
    <button
      v-for="section in sections"
      :key="section.id"
      class="group flex items-center gap-2 focus:outline-none"
      @click="scrollToSection(section.id)"
      :aria-label="section.label"
    >
      <!-- Dot -->
      <span
        class="block w-2 h-2 rounded-full border transition-all duration-200 shrink-0"
        :class="activeSection === section.id
          ? 'bg-moss-500 border-moss-500 scale-125'
          : 'bg-transparent border-gray-500 group-hover:border-moss-400'"
      />
      <!-- Label — slides in on hover or when active -->
      <span
        class="text-xs font-medium whitespace-nowrap transition-all duration-200 overflow-hidden max-w-0 group-hover:max-w-xs"
        :class="activeSection === section.id
          ? 'text-moss-400 max-w-xs'
          : 'text-gray-400'"
      >
        {{ section.label }}
      </span>
    </button>
  </nav>
</template>
