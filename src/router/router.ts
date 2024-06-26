import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/HomePage.vue'
import LoginPage from '@/pages/login/LoginPage.vue'
import NotFoundPage from '@/pages/404/NotFoundPage.vue'
import Cookie from '@/util/cookie'
import { UserStore } from '@/store/user'
import { CookieSessionIDKey } from '@/consts/consts'
import homeRouter from './home'

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/login',
    name:'login',
    component:LoginPage
  },
  {
    path:'/404',
    name:'notFound',
    component:NotFoundPage
  },
  homeRouter,
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.beforeEach((to, from, next) => {
  console.log("page exist", to.path, from.path)
  // 如果跳转的页面不存在，跳转到404页面
  if(to.matched.length===0){
    console.log("page not exist", to.path, from.path)
    next('/404')
  }

  const user = UserStore()
  if (Cookie.GetCookie(CookieSessionIDKey)===null) {
    user.SetUserLoginFlag(false)
  } else {
    user.SetUserLoginFlag(true)
  }
  
  next()
})

export default router
