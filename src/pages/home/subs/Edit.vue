<template> 
  <p> 编辑 </p>
  <v-md-editor v-model="article.text" height="400px"></v-md-editor>
  <el-button @click="sendBlog">发送</el-button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const article = reactive({
	text:''
})

function sendBlog() {
  console.log(article.text)
}
</script>