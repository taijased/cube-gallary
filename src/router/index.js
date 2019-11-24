import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Error404 = () => import('../views/Error404.vue')
const ImageView = () => import('../views/ImageView.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/image/:id',
    component: ImageView
  },
  { 
    path: "*", 
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
