import { createRouter, createMemoryHistory } from 'vue-router'
import Home from '../components/Home.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: Home
  }
]

const router = createRouter({
    history: createMemoryHistory(), routes
  })

export default router
