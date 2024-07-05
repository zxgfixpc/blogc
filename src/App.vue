<template>
  <div id="app">
    <RouterView /> <!-- 渲染组件 -->
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style>
@import './style/common.scss';

#app {
  /* 默认字体 */
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;

  /* 默认字体颜色 */
  color: #000000;

  /* 默认背景色 */
  background-color: rgb(255, 255, 255);

  /* 占据整个视口 */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>