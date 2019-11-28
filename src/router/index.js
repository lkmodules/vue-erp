import Vue from 'vue'
import VueRouter from 'vue-router'
import KmLayout from '@/layout/km-layout.vue'
import { buildRoutesByMenu } from '@/libs/utils.js'
import routerComponents from '@/business'
import menuList from './menu'
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
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          icon: 'md-home'
        },
        component: () => import('../views/home/home.vue')
      }
    ]
  }
]

// const asyncRoutes = buildRoutesByMenu(menuList, routerComponents)

const asyncRoutes = [
  {
    path: '/archives',
    name: 'archives',
    component: KmLayout,
    children: [
      {
        path: 'localBranch',
        name: 'localBranch',
        meta: {
          title: '首页',
          icon: 'md-home'
        },
        component: routerComponents['archives/localBranch/localBranch']
      }
    ]
  }
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
