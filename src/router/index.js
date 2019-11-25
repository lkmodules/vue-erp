import Vue from 'vue'
import VueRouter from 'vue-router'
import KmLayout from '@/layout/km-layout.vue'
import asyncFiles from '@/business'

Vue.use(VueRouter)

const constRoutes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      hideInMenu: true
    },
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    component: KmLayout,
    children: [{
      path: '/home',
      name: 'home',
      meta: {
        hideInMenu: true,
        title: '首页',
        icon: 'md-home'
      },
      component: () => import('../views/home/home.vue')
    }]
  }
]

const asyncRoutes = [
  
]

const errorRoutes = [
  {
    path: '/401',
    name: '401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/views/401/401.vue')
  },
  {
    path: '*',
    name: '404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/views/404/404.vue')
  }
]

const routes = [...constRoutes, ...asyncRoutes, ...errorRoutes]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
