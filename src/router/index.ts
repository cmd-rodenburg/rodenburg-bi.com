import { createRouter, createWebHistory } from 'vue-router'

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
    // {
    //   path: '/project-experience',
    //   name: 'ProjectExperience',
    //   component: () => import('../pages/ProjectExperience.vue')
    // },
    // {
    //   path: '/test-page',
    //   name: 'TestPage',
    //   component: () => import('../pages/_testpage.vue')
    // },
    {
      path: '/meet-Anne',
      name: 'MeetAnne',
      component: () => import('../pages/BookMeeting.vue')
    }
  ]
})

export default router