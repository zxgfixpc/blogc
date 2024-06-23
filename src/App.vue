<template>
  <div>
    <router-view /> 
  </div>
</template>

<!-- <script setup lang="ts">
import HomePage from '@/pages/HomePage.vue'
</script> -->

<style>
@import './style/common.scss';

#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #eddede;

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