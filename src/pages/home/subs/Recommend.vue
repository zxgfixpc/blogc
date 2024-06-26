<template> 
  推荐页
  <button @click="setLogin">点击执行 xxx 逻辑</button>
</template>

<script lang="ts" setup>

import { UserStore } from '@/store/user';
const user = UserStore()

const setLogin = () => {
  if (user.GetUserLoginFlag) {
    user.SetUserLoginFlag(false)
  } else {
    user.SetUserLoginFlag(true)
  }
}

</script>