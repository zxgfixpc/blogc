<template>
  <div>
    <RouterView /> <!-- 渲染组件 -->
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style>
@import './style/common.scss';

#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #000000;

  /* 设置背景色为白色 */  
  background-color: white;  

   /* 占据整个视口 */  
  position: fixed;  
  top: 0;  
  left: 0;  
  right: 0;  
  bottom: 0; 
}
</style>