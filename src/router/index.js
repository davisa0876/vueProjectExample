import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('../views/exampleView.vue')
    },
    {
      path: '/scriptsetup',
      name: 'scriptsetup',
      component: () => import('../views/ScriptsetupView.vue')
    },
    {
      path: '/TwoWayDataBinding',
      name: 'TwoWayDataBinding',
      component: () => import('../views/TwoWayDataBindingView.vue')
    },
    {
      path: '/ReactiveObjects',
      name: 'ReactiveObjects',
      component: () => import('../views/ReactiveObjectsView.vue')
    }
  ]
})



export default router
