<script setup lang="ts">
import { ref, watch } from 'vue';
import { useWindowScroll } from '@vueuse/core';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { useRouter } from 'vue-router';
import BaseButton from '../CommonElements/Button.vue';

const router = useRouter();
const { y } = useWindowScroll();
const isScrolled = ref(false);
const showMainMenu = ref(false);

// Update navbar style on scroll
watch(y, (value) => {
  isScrolled.value = value > 0;
});

// Toggle main menu dropdown
const toggleMainMenu = () => {
  showMainMenu.value = !showMainMenu.value;
};

// Close main menu when clicking outside
const closeMainMenu = (event: MouseEvent) => {
  if (showMainMenu.value && !(event.target as HTMLElement).closest('.relative')) {
    showMainMenu.value = false;
  }
};

// Handle navigation and scrolling
const navigateAndScroll = async (sectionId: string) => {
  showMainMenu.value = false;
  if (router.currentRoute.value.path !== '/') {
    await router.push('/');
  }
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};

// Add click event listener to close menu when clicking outside
if (typeof window !== 'undefined') {
  window.addEventListener('click', closeMainMenu);
}
</script>

<template>
  <nav :class="[
    'fixed w-full z-50 transition-all duration-300',
    isScrolled
      ? 'bg-moss-950/90 backdrop-blur-md shadow-sm'
      : 'bg-transparent',
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Disclosure v-slot="{ open }">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-xl font-bold text-moss-200">Rodenburg BI</router-link>
          </div>

          <!-- Desktop menu -->
          <div class="hidden sm:flex sm:items-center sm:ml-6">
            <!-- Main Dropdown -->
            <div class="relative">
              <button @click="toggleMainMenu"
                class="text-moss-200 hover:text-moss-100 px-3 py-2 rounded-md text-sm font-medium">
                Main
                <span class="ml-1">▼</span>
              </button>
              <div v-if="showMainMenu"
                class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-moss-950 ring-1 ring-black ring-opacity-5">
                <div class="py-1">
                  <button @click="navigateAndScroll('about')"
                    class="block w-full text-left px-4 py-2 text-sm text-moss-200 hover:bg-moss-900">About</button>
                  <button @click="navigateAndScroll('projects')"
                    class="block w-full text-left px-4 py-2 text-sm text-moss-200 hover:bg-moss-900">Projects</button>
                  <button @click="navigateAndScroll('services')"
                    class="block w-full text-left px-4 py-2 text-sm text-moss-200 hover:bg-moss-900">Services</button>
                  <button @click="navigateAndScroll('skills')"
                    class="block w-full text-left px-4 py-2 text-sm text-moss-200 hover:bg-moss-900">Skills</button>
                  <button @click="navigateAndScroll('blog')"
                    class="block w-full text-left px-4 py-2 text-sm text-moss-200 hover:bg-moss-900">Blog</button>
                  <button @click="navigateAndScroll('contact')"
                    class="block w-full text-left px-4 py-2 text-sm text-moss-200 hover:bg-moss-900">Contact</button>
                </div>
              </div>
            </div>

            <!-- Business Solution Link
            <router-link to="/project-experience"
              class="text-moss-200 hover:text-moss-100 px-3 py-2 rounded-md text-sm font-medium">
              Project experience
            </router-link> -->

            <!-- Test page link  -->
            <!-- <router-link to="/test-page"
              class="text-moss-200 hover:text-moss-100 px-3 py-2 rounded-md text-sm font-medium">
              Testing page
            </router-link> -->

            <!-- Schedule meeting link  -->
            <router-link to="/meet-anne">
              <BaseButton>
                Book a meeting
              </BaseButton>
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <div class="flex items-center sm:hidden">
            <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-moss-400 hover:text-moss-200 hover:bg-moss-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-moss-200">
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed -->
              <svg v-if="!open" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!-- Icon when menu is open -->
              <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </DisclosureButton>
          </div>
        </div>

        <!-- Mobile menu -->
        <DisclosurePanel class="sm:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <button @click="navigateAndScroll('about')"
              class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-moss-200 hover:text-moss-100 hover:bg-moss-900">About</button>
            <button @click="navigateAndScroll('skills')"
              class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-moss-200 hover:text-moss-100 hover:bg-moss-900">Skills</button>
            <!-- <button @click="navigateAndScroll('projects')"
              class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-moss-200 hover:text-moss-100 hover:bg-moss-900">Projects</button> -->
            <button @click="navigateAndScroll('contact')"
              class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-moss-200 hover:text-moss-100 hover:bg-moss-900">Contact</button>
            <router-link to="/project-experience"
              class="block px-3 py-2 rounded-md text-base font-medium text-moss-200 hover:text-moss-100 hover:bg-moss-900">Project experience</router-link>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </nav>
</template>
