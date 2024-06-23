<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <div>
      <img class="brand" src="@/images/dudu.png" alt="Description of the image">  
    </div>

    <div class="flex-grow" />

    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">关注</el-menu-item>
    <el-menu-item index="3">消息</el-menu-item>
    <el-sub-menu index="4">
      <template #title>个人中心</template>
      <el-menu-item index="4-1">我的主页</el-menu-item>
      <el-menu-item index="4-2">收藏文章</el-menu-item>
      <el-menu-item index="4-3">退出</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}

.brand {
  height: 100%; /* 图片的高度设置为父元素高度的100% */  
  width: auto; /* 图片的宽度将自动调整以保持其原始的宽高比 */  
  object-fit: cover; /* 这将确保图片覆盖整个容器，同时保持其宽高比 */  
  display: block; /* 确保图片被视为块级元素，这通常对于布局是有帮助的 */ 
}
</style>
