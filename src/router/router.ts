import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/HomePage.vue'
import LoginPage from '@/pages/login/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'',
      name:'home',
      component:HomePage  
    },
    {
      path:'/login',
      name:'login',
      component:LoginPage
    }
  ]
})

export default router