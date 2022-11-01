import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsForm from '../components/NewsForm'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: HomeView
  },

  {
    path: '/add-news',
    name: 'news',
    component: NewsForm
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
