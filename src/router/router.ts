import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/HomePage.vue'
import LoginPage from '@/pages/login/LoginPage.vue'
import RegPage from '@/pages/login/RegPage.vue'
import NotFoundPage from '@/pages/404/NotFoundPage.vue'
import { userStore } from '@/store/user'
import homeRouter from './home'
import cookie from '@/util/cookie'

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
    path:'/reg',
    name:'reg',
    component:RegPage
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
  handleUserStore()

  // 如果跳转的页面不存在，跳转到404页面
  if(to.matched.length===0){
    next('/home')
    return
  }

  // 点击用户退出时，返回首页
  if (to.path === '/home/user/exit') {
    handleExit()
    return
  }
  
  next()
})

function handleUserStore() {
  let sessionKey = cookie.getCookie(cookie.sessionKey)
  console.log("============router cookie: ", sessionKey, document.cookie)
  let user = userStore()

  if (sessionKey != null && sessionKey != "" && !user.getUserLoginFlag) {
    user.setUserLoginFlag(true)
    console.log("============set router loginFlag: ", user.isLogin)
  } else if ((sessionKey == "" || sessionKey == null)&& user.getUserLoginFlag) {
    user.setUserLoginFlag(false)
    console.log("============set router loginFlag: ", user.isLogin)
  }
}

function handleExit() {
  // 清理cookie
  cookie.clearCookie(cookie.sessionKey)

  window.location.reload();
}

export default router
