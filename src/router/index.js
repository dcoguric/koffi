import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoadingScreen from '../views/LoadingScreen.vue'
import Recipe from '../views/Recipe.vue'
import HappiHappi from '../views/HappiHappi.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/loading',
    name: 'loading',
    component: LoadingScreen
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: Recipe
  },
  {
    path: '/happihappi',
    name: 'happihappi',
    component: HappiHappi
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'abstract',
  routes
})

export default router
