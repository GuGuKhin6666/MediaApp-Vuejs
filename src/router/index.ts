import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
 {
    path:'/',
    name : 'HomePage',
    component : () =>import('../views/HomePage.vue')
  },
  {
    path : '/detailpage/:id',
    name : 'detailpage',
    component : () => import ('../views/DetailPage.vue')
  },
  {
    path :'/loginpage',
    name : 'loginpage',
    component : () => import('../views/LoginPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
