<template>
    <div class="homePage">
      <el-container class="homeContainer">
        <el-header class="homeHeader">
          <!-- 导航栏 -->
          <Navigation />
        </el-header>
        <el-container>
          <el-aside class="homeAside"></el-aside>

          <el-main class="homeMain">
            <!-- 主展示区 -->
            
          </el-main>

          <el-aside class="homeAside"></el-aside>
        </el-container>
      </el-container>
    </div>
</template>

<script lang="ts" setup>
import Navigation from './components/Navigation.vue';
import Edit from './components/Edit.vue';
import Recommend from './components/Recommend.vue';
</script>

<style scoped lang="scss">
.homeContainer{

    .homeHeader{
        border-bottom: 1px solid rgb(223, 219, 219);
        background: white;
        height:60px;
    }
    .homeAside{
        background: white;
        flex: 1;
        height: 100vh;
    }
    .homeMain{
        flex: 0 1 70vw;
        min-width: 100px;
        height: 100vh;
    }
}

</style>
