import { createRouter, createWebHistory } from 'vue-router'
import { usePostHog } from '../composables/usePostHog'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home.vue'), // Lazy load Home
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/project-experience',
      name: 'ProjectExperience',
      component: () => import('../pages/ProjectExperience.vue')
    },
    {
      path: '/test-page',
      name: 'TestPage',
      component: () => import('../pages/_testpage.vue')
    },
    {
      path: '/meet-Anne',
      name: 'MeetAnne',
      component: () => import('../pages/BookMeeting.vue')
    }
  ]
})


// SETUP to log page views/event in Posthog
const { posthog } = usePostHog()

if (posthog) {
  router.beforeEach((to) => {
    posthog.capture('$pageview', { path: to.fullPath })
  })
}

export default router