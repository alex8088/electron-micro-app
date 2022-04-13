import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    component: About
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
