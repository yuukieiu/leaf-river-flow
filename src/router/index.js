import { createRouter, createWebHistory } from 'vue-router'
import LeafCreate from '../views/leaf/Create.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'LeafCreate' }
  },
  {
    path: '/leaf/create',
    name: 'LeafCreate',
    component: LeafCreate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
