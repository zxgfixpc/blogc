import { ShowType } from "@/consts/consts";

const homeRouter = {
  path: "/home",
  name: "home",
  redirect: "/home/recommend-article-list",
  component: () => import("@/pages/home/HomePage.vue"),
  children: [
    {
      path: "article-detail",
      component: () => import("@/pages/home/subs/ArticleDetail.vue"),
      meta: {
        title: "阅读",
        showType: ShowType.ShowNot,
        allPath: "/home/article-detail",
        icon: "",
      },
    },
    {
      path: "recommend-article-list",
      component: () => import("@/pages/home/subs/Recommend.vue"),
      meta: {
        title: "推荐",
        showType: ShowType.ShowAll,
        allPath: "/home/recommend-article-list",
        icon: "Notebook",
      },
    },
    {
      path: "follow-article-list",
      component: () => import("@/pages/home/subs/FollowArticleList.vue"),
      meta: {
        title: "关注",
        showType: ShowType.ShowOnlyLogin,
        allPath: "/home/follow-article-list",
        icon: "Share",
      },
    },
    {
      path: "message-list",
      component: () => import("@/pages/home/subs/MessageList.vue"),
      meta: {
        title: "消息",
        showType: ShowType.ShowOnlyLogin,
        allPath: "/home/message-list",
        icon: "ChatDotRound",
      },
    },
    {
      path: "edit",
      component: () => import("@/pages/home/subs/Edit.vue"),
      meta: {
        title: "写文章",
        showType: ShowType.ShowOnlyLogin,
        allPath: "/home/edit",
        icon: "EditPen",
      },
    },
    {
      path: "login",
      redirect: "/login",
      meta: {
        title: "去登录",
        showType: ShowType.ShowOnlyNotLogin,
        allPath: "/home/login",
        icon: "Pointer",
      },
    },
    {
      path: "user",
      meta: {
        title: "用户",
        showType: ShowType.ShowOnlyLogin,
        icon: "User",
      },
      children: [
        {
          path: "usercenter",
          component: () => import("@/pages/home/subs/UserCenter.vue"),
          meta: {
            title: "我的主页",
            showType: ShowType.ShowOnlyLogin,
            allPath: "/home/user/usercenter",
            icon: "Avatar",
          },
        },
        {
          path: "follow-user",
          component: () => import("@/pages/home/subs/FollowUser.vue"),
          meta: {
            title: "关注列表",
            showType: ShowType.ShowOnlyLogin,
            allPath: "/home/user/follow-user",
            icon: "Operation",
          },
        },
        {
          path: "exit",
          meta: {
            title: "退出",
            showType: ShowType.ShowOnlyLogin,
            isClick: true,
            allPath: "/home/user/exit",
            icon: "SwitchButton",
          },
        },
      ],
    },
  ],
};

export default homeRouter;
