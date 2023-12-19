import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'
import HomeEn from '../pages/HomeEn/HomeEn.vue'
import HomeUz from '../pages/HomeUz/HomeUz.vue'
const language = localStorage.getItem('selectedLanguage')
console.log(language);
let currentLanguage = ''
switch (language) {
  case 'Ru':
    currentLanguage = HomePage
    break;
  case 'En':
    currentLanguage = HomeEn
    break;
  case 'Uz':
    currentLanguage = HomeUz
    break;
  default:
    currentLanguage = HomePage
    break;
}
const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: currentLanguage
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
    {
      path: '/en',
      name: 'HomeEn',
      component: import('../pages/HomeEn/HomeEn.vue'),
    },
    {
      path: '/uz',
      name: 'HomeUz',
      component: import('../pages/HomeUz/HomeUz.vue'),
    },
    {
      path: '/ru',
      name: 'HomePage',
      component: import('../pages/HomePage/HomePage.vue'),
    },
  ]
})
export default router