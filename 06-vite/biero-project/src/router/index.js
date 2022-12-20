import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BieresView from '../views/BieresView.vue';
import BiereView from '../views/BiereView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bieres',
      name: 'bieres',
      component: BieresView,
    },
    {
      path: '/biere/:id',
      name: 'biere',
      component: BiereView,
    },
  ],
})

export default router;