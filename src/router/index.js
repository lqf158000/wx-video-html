import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login.vue')
  },
  {
    path: '/sky',
    name: 'sky',
    component: () => import('@/components/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
