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
  
    <!-- 中间部分填充 -->  
    <div class="flex-grow" />  
  
    <!-- 使用 v-for 渲染菜单项 --> 
    <template v-for="(firstRouter, index) in homeRouter.children" :key="index">
      <!-- 一级菜单 --> 
      <el-menu-item v-if="!firstRouter.children?.length" :index="firstRouter.meta.allPath">  
        {{ firstRouter.meta.title }}  
      </el-menu-item>  
  
      <!-- 二级菜单 -->
      <template v-if="firstRouter.children?.length">
        <el-sub-menu>  
          <template #title> {{ firstRouter.meta.title }} </template>  
          <el-menu-item v-for="(item, subIndex) in firstRouter.children" :key="subIndex" :index="item.meta.allPath">  
            {{ item.meta.title }}  
          </el-menu-item>  
        </el-sub-menu>
      </template>  
      
    </template> 
      
  </el-menu>  
</template>  
  
<script lang="ts" setup>  
import { ref, watch, onMounted } from 'vue'  
import { UserStore } from '@/store/user';
import { useRoute } from 'vue-router'; 
import hRouter from '@/router/home';

//const route = useRoute()
//const user = UserStore()

const activeIndex = ref()  
const homeRouter = hRouter
  
// 假设的菜单项数据  
// const menuItems = ref([  
//   { path: '/home/edit', name: '首页' },  
//   { path: '/home/recommend', name: '关注' },  
// ])  
  
// // 假设的子菜单数据  
// const subMenus = ref([  
//   {  
//     index: 'user',  
//     title: '个人中心',  
//     children: [  
//       { path: '4-1', name: '我的主页' },  
//       { path: '4-1', name: '收藏文章' },
//       { path: '4-2', name: '消息' },  
//       { path: '4-3', name: '退出' }
//     ],  
//   },  
//   // ... 其他子菜单  
// ])  

// function findMenuItemByPath(path:string) {  
//   // 在 menuItems 和 subMenus 中查找匹配的菜单项  
//   // 示例实现，你需要根据你的数据结构来调整  
//   for (const menuItem of menuItems.value) {  
//     if (menuItem.path === path) {  
//       return menuItem;  
//     }  
//   }  
//   for (const submenu of subMenus.value) {  
//     for (const item of submenu.children) {  
//       if (item.path === path) {  
//         return item;  
//       }  
//     }  
//   }  
//   return null; // 如果没有找到匹配的项，返回 null  
// }  

// function updateMenuItems(isLogin: boolean) {
//   if (isLogin) {
//     menuItems.value = [  
//       { path: '/home/edit', name: '首页' },  
//       { path: '/home/recommend', name: '关注' },  
//     ]
//     subMenus.value = [
//       {  
//         index: 'user',  
//         title: '个人中心',  
//         children: [  
//           { path: '4-1', name: '我的主页' },  
//           { path: '4-1', name: '收藏文章' },
//           { path: '4-2', name: '消息' },  
//           { path: '4-3', name: '退出' }
//         ],  
//       },  
//     ]
//   } else {
//     menuItems.value = [  
//       { path: '/home/edit', name: '推荐' },  
//       { path: '/home/recommend', name: '去登录' } 
//     ]
//     subMenus.value = []
//   }

//   // 判断哪个被选中

// }
  


// onMounted(() => {  
//   updateMenuItems(user.isLogin)  
// }) 

// watch(  
//   () => user.isLogin,  
//   (newValue, oldValue) => {  
//     updateMenuItems(newValue) 
//   }  
// )  
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
</style>
