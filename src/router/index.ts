import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TrainingView from '../views/TrainModelView.vue'
import TestingView from '../views/TestModelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'training',
          name: 'training',
          component: TrainingView,
        },
        {
          path: 'testing',
          name: 'testing',
          component: TestingView,
        },
      ],
    },
  ],
})

export default router
