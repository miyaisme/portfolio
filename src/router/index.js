import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'root',
    component: Home
  },
  {
    path: '/graphic',
    name: 'Graphic',
    component: () => import(/* webpackChunkName: "about" */ '../views/Graphic.vue')
  },
  {
    path: '/frontEnd',
    name: 'FrontEnd',
    component: () => import(/* webpackChunkName: "about" */ '../views/FrontEnd.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/graphic/layout',
    name: 'Layout',
    component: () => import('../views/Layout.vue')
  },
  {
    path: '/graphic/illustration',
    name: 'Illustration',
    component: () => import('../views/Illustration.vue')
  },
  {
    path: '/frontEnd/design',
    name: 'Design',
    component: () => import('../views/Design.vue')
  },
  {
    path: '/frontEnd/program',
    name: 'Program',
    component: () => import('../views/Program.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
