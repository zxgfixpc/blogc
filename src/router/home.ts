import { ShowType } from '@/consts/consts'

const homeRouter = {
  path:'/home',
  name:'home',
  redirect: '/home/recommend-article-list',
  component:() => import('@/pages/home/HomePage.vue'),
  children: [
    {
      path: 'recommend-article-list',
      component: () => import('@/pages/home/subs/Recommend.vue'),
      meta: {
        title: "推荐",
        showType: ShowType.ShowAll,
        allPath: '/home/recommend-article-list',
        logo: ''
      }
    },
    {
      path: 'follow-article-list',
      component: () => import('@/pages/home/subs/FollowArticleList.vue'),
      meta: {
        title: "关注",
        showType: ShowType.ShowOnlyLogin,
        allPath: '/home/follow-article-list',
        logo: ''
      }
    },
    {
      path: 'message-list',
      component: () => import('@/pages/home/subs/MessageList.vue'),
      meta: {
        title: "消息",
        showType: ShowType.ShowOnlyLogin,
        allPath: '/home/message-list',
        logo: ''
      }
    },
    {
      path: 'edit',
      component: () => import('@/pages/home/subs/Edit.vue'),
      meta: {
        title: "写文章",
        showType: ShowType.ShowOnlyLogin,
        allPath: '/home/edit',
        logo: ''
      }
    },
    {
      path: 'login',
      redirect: '/login',
      meta: {
        title: "去登录",
        showType: ShowType.ShowOnlyNotLogin,
        allPath: '/home/login',
        logo: ''
      }
    },
    {
      path: 'user',
      meta: {
        title: "用户",
        showType: ShowType.ShowOnlyLogin,
        logo: ''
      },
      children: [
        {
          path: 'usercenter',
          component: () => import('@/pages/home/subs/UserCenter.vue'),
          meta: {
            title: "我的主页",
            showType: ShowType.ShowOnlyLogin,
            allPath: '/home/user/usercenter',
            logo: ''
          }
        },
        {
          path: 'follow-user',
          component: () => import('@/pages/home/subs/FollowUser.vue'),
          meta: {
            title: "关注列表",
            showType: ShowType.ShowOnlyLogin,
            allPath: '/home/user/follow-user',
            logo: ''
          }
        },
        {
          path: 'exit',
          redirect: '/home',
          meta: {
            title: "退出",
            showType: ShowType.ShowOnlyLogin,
            allPath: '/home/user/exit',
            logo: ''
          }
        },
      ]
    }
  ]  
}

export default homeRouter