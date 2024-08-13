import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
      // route level code-splitting
      // this generates a separate chunk (movies.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/movies.vue')
    },
    {
      path: '/shows',
      name: 'shows',
      component: () => import('../views/shows.vue')
    },
    {
      path: '/bookmarked',
      name: 'bookmarked',
      component: () => import('../views/bookmarked.vue')
    }
  ]
})

export default router
