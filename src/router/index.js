import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'
const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/NotFoundSection',
      name: 'NotFoundSection',
      component: import('../components/NotFoundSection.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/NotFoundSection',
    },
  ]
})
export default router