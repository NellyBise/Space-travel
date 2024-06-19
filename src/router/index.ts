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
    history: createMemoryHistory(), routes,
    linkExactActiveClass: 'border-r-white md:border-r-transparent md:border-b-white hover:border-r-white md:hover:border-b-white'
  })

export default router
