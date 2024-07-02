<template>  
  <el-menu  
    :default-active="activeIndex" 
    class="el-menu-demo"  
    mode="horizontal"  
    :ellipsis="false"  
    :router="true"  
  >  
    <!-- Logo -->  
    <div>  
      <img class="homeLogo" src="@/images/dudu.png" alt="logo" />
    </div>
    <div>  
      <div class="homeLogoName">绿豆笔记</div>
    </div>   
  
    <!-- 中间部分填充 -->  
    <div class="flex-grow" />  
  
    <!-- 使用 v-for 渲染菜单项 --> 
    <template v-for="(firstRouter, index) in navRouterObj.children" :key="index">
      <!-- 一级菜单 --> 
      <el-menu-item v-if="!firstRouter.children?.length && isShowMenu(firstRouter.meta.showType)" :index="firstRouter.meta.allPath">  
        <el-icon><component :is="firstRouter.meta.icon"/></el-icon>
        {{ firstRouter.meta.title }}  
      </el-menu-item>  
  
      <!-- 二级菜单 -->
      <template v-if="firstRouter.children?.length && isShowMenu(firstRouter.meta.showType)">
        <el-sub-menu>  
          <template #title> <el-icon><component :is="firstRouter.meta.icon"/></el-icon> {{ firstRouter.meta.title }} </template>  
          <template v-for="(item, subIndex) in firstRouter.children" :key="subIndex">
            <!-- 二级页面路由 -->
            <el-menu-item v-if="!item.meta.isClick" :index="item.meta.allPath">  
              <el-icon><component :is="item.meta.icon"/></el-icon>
              {{ item.meta.title }}  
            </el-menu-item>
            <!-- click处理 -->
            <el-menu-item v-if="item.meta.isClick" @click="handleFunctionClick">  
              <el-icon><component :is="item.meta.icon"/></el-icon>
              {{ item.meta.title }}  
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>  
      
    </template> 
      
  </el-menu>  
</template>  
  
<script lang="ts" setup>  
import { ref, watch, onMounted, watchEffect, computed } from 'vue' 
import { userStore } from '@/store/user';
import { useRoute, onBeforeRouteLeave } from 'vue-router'; 
import navRouter from '@/router/home';
import { ShowType } from '@/consts/consts';
import cookie from '@/util/cookie';

const routeObj = useRoute()
const userObj= userStore()

const navRouterObj = navRouter
const activeIndex = ref()  

const isLogin = ref(userObj.isLogin)
const curPath = ref(routeObj.path)

// 导航菜单是否展示逻辑
function isShowMenu(metaShowType:string) :boolean {
  if (metaShowType===ShowType.ShowAll) {
    return true
  }
  if (metaShowType===ShowType.ShowOnlyLogin) {
    return isLogin.value
  }
  if (metaShowType===ShowType.ShowOnlyNotLogin) {
    return !isLogin.value
  }
  return false
}

watch(  
  // 监听用户登录，刷新Login，刷新导航栏
  () => userObj.isLogin,  
  (newValue, oldValue) => {  
    isLogin.value = newValue 
  },
  {immediate: true}
) 

// 使用 watchEffect 监听 route 的变化  
// 注意：这里我们不需要直接监听 route 对象，因为当路由变化时，route 对象本身不会改变  
// 但我们可以监听 route.path，它是一个 getter，每次访问都会返回最新的路径
// watchEffect 会自动捕获所有依赖项的变化  
// 每当路由变化时，更新 currentPath 的值  
watchEffect(() => {  
  updateActiveIndex(routeObj.path)
});  

// 更新激活的Index，导航栏选中
function updateActiveIndex(curPath:string) {
  const routers = navRouterObj.children
  for (var i in routers) {
    if (routers[i].meta.allPath === curPath) {
      activeIndex.value = routers[i].meta.allPath
      return
    } 
    if (routers[i].children?.length) {
      const secondRouters = routers[i].children
      for (var j in secondRouters) {
        if (secondRouters[j].meta.allPath === curPath) {
          activeIndex.value = secondRouters[j].meta.allPath
          return
        } 
      }
    }
  } 
}

// onmounted只会在导航栏挂载的时候调用
onMounted(() => { 
  updateActiveIndex(routeObj.path)
}) 

function handleFunctionClick() {  
  cookie.clearUserIDAndSessionID()
  window.location.replace('/home/recommend-article-list')
}

</script> 

<style>
.flex-grow {
  flex-grow: 1;
}

.homeLogo {
  height: 100%; /* 图片的高度设置为父元素高度的100% */  
  width: auto; /* 图片的宽度将自动调整以保持其原始的宽高比 */  
  object-fit: cover; /* 这将确保图片覆盖整个容器，同时保持其宽高比 */  
  display: block; /* 确保图片被视为块级元素，这通常对于布局是有帮助的 */ 
}

.homeLogoName {
  display: flex; /* 启用Flexbox */
  height: 100%; /* 设置父元素的高度 */
  place-items: center;
  font-size: 17px;
    
  /* 设置文本颜色为绿色 */  
  color: green;  
    
  /* 设置文本加粗 */  
  font-weight: bold; 
}

.el-menu--horizontal {
  color: rgb(77, 208, 77) !important;
}

.el-menu-item.is-active {  
  background-color: #fbfdff !important;
  border-bottom: 2px solid rgb(134, 210, 134) !important;  
  color: rgb(77, 208, 77) !important;
}

.el-menu-item:hover {  
  color: #fbfdff !important;  
  background-color: #fbfdff !important; 
} 


</style>
