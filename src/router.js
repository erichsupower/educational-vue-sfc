import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/HomeComponent.vue')
    }, {
      path: '/about/:type',
      name: 'about',
      component: () => import('./components/AboutComponent.vue')
    },
  ]
})

export default router
