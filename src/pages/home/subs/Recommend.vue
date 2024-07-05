<template>
  <CapterList :articles="articleLists" />
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, reactive } from 'vue'
import CapterList from '@/components/capter/CapterList.vue'
import articleObj from '@/api/article'
import { ElMessage } from 'element-plus'

let page = 1
const size = 10

const articleLists = ref([])

function getRecommendArticles(page: number, size: number) {
  articleObj
    .getRecommendArticles(page, size)
    .then((ret) => {
      articleLists.value = [...articleLists.value, ...ret.list]
    })
    .catch((error) => {
      ElMessage({
        message: error,
        type: 'error',
        plain: true,
      })
    })
}

onMounted(async () => {
  getRecommendArticles(page, size)
})
</script>