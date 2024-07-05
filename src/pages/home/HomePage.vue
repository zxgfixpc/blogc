<template>
  <div class="homeContainer">
    <!-- 导航栏 -->
    <div class="homeHeader">
      <HomeNav />
    </div>

    <div class="homeBody">
      <div class="homeAside"> </div>
      <div class="homeMain">
        <!-- 主展示区 -->
        <RouterView />
      </div>
      <div class="homeAside"> </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HomeNav from './HomeNav.vue'
</script>

<style scoped lang="scss">
.homeContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.homeHeader {
  border-bottom: 1px solid rgb(223, 219, 219);
  background: white;
  height: 60px; /* 页眉固定高度 */
}

.homeBody {
  display: flex; /* 设置为flex容器 */
  flex: 1; /* 占据剩余空间（在这里实际上是多余的，因为已经设置了height: 100%在.homeContainer上） */
  height: calc(100% - 60px); /* 减去header的高度 */
}

.homeAside {
  background: white;
  /* 宽度可以根据需要设置，或者让flex-grow自动分配空间（如果需要的话） */
  width: 200px; /* 示例宽度 */
  height: 100%; /* 填满flex-container的高度 */
  overflow-y: auto; /* 如果内容超出高度，允许滚动 */
}

.homeMain {
  flex: 1; /* 占据剩余空间 */
  height: 100%; /* 填满flex-container的高度 */
  overflow-y: auto; /* 如果内容超出高度，允许滚动 */
}
</style>
