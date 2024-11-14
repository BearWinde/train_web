import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TrainingView from '../views/TrainModelView.vue'
import TestingView from '../views/PredictModelView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: HomeView,
      component: LoginView,
      children: [
        {
          path: 'training',
          name: 'training',
          component: TrainingView,
        },
        {
          path: 'predicting',
          name: 'predicting',
          component: TestingView,
        },
      ],
    },
  ],
})

export default router
