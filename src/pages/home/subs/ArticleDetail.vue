<template>
  {{ articleInfo }}
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue'
import articleObj from '@/api/article'
import { ElMessage } from 'element-plus'

const article_id = ref('')
const articleInfo = ref('无数据')

function getArticleDetail() {
  parseUrlParams()
  if (article_id.value == '') {
    console.log('parseUrlParams not find id')
    return
  }

  articleObj
    .getArticleByID(article_id.value)
    .then((ret) => {
      articleInfo.value = ret
    })
    .catch((error) => {
      ElMessage({
        message: error,
        type: 'error',
        plain: true,
      })
    })
}

// 定义一个函数来解析URL参数
function parseUrlParams() {
  // 获取当前页面的URL
  const url = new URL(window.location.href)
  // 使用URLSearchParams来解析查询字符串
  const params = new URLSearchParams(url.search)
  article_id.value = params.get('id') || ''
}

// 在组件挂载时调用该函数
onMounted(getArticleDetail)
</script>