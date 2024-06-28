<template> 
  推荐页
  <button @click="setLogin">点击执行 xxx 逻辑</button>
  <p> {{ isLogin }} </p>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { userStore } from '@/store/user';
const user = userStore()

const isLogin = ref(user.isLogin)

watch(() => user.isLogin, (newVal) => {  
  isLogin.value = newVal;  
}); 

const setLogin = () => {
  if (user.getUserLoginFlag) {
    user.setUserLoginFlag(false)
  } else {
    user.setUserLoginFlag(true)
  }
}

</script>