import { createRouter, createMemoryHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Destination from '../pages/Destination.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/destination',
    name: 'destination',
    component: Destination
  }
]

const router = createRouter({
    history: createMemoryHistory(), routes
  })

export default router
