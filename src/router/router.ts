import { createRouter, createWebHistory } from 'vue-router'
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
  handleCookieLoginUpdate()

  // 如果跳转的页面不存在，跳转到首页
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

// 登录cookie变更，将用户的登录信息Set到userStore中
function handleCookieLoginUpdate() {
  let sessionKey = cookie.getCookie(cookie.sessionKey)
  let user = userStore()

  if (sessionKey != null && sessionKey != "" && !user.getUserLoginFlag) {
    user.setUserLoginFlag(true)
  } else if ((sessionKey == "" || sessionKey == null)&& user.getUserLoginFlag) {
    user.setUserLoginFlag(false)
  }
}

// 处理用户退出
function handleExit() {
  // 清理cookie
  cookie.clearCookie(cookie.sessionKey)

  window.location.reload();
}

export default router
