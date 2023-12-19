import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: require('@/views/index.vue').default
  },
  {
    path: '/about',
    component: require('@/views/about.vue').default
  },
  {
    path: '/:catchAll(.*)',
    component: require('@/views/404.vue').default
  },

  {//流程图
    path: '/antvX6',
    component: require('@/views/antvX6/index.vue').default
  },
  {//流程图
    path: '/antvX62',
    component: require('@/views/antvX6VUE3/index.vue').default
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
