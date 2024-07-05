<template>
  <div class="article-editor">
    <div class="input-group">
      <el-input
        type="text"
        v-model="article.title"
        placeholder="请输入标题"
      />
    </div>
    <div class="input-group">
      <el-input
        type="text"
        v-model="article.summary"
        placeholder="请输入文章概述"
      />
    </div>
    <v-md-editor
      v-model="article.content"
      height="70vh"
    ></v-md-editor>
    <div class="button-group">
      <el-button
        type="text"
        style="color: gray;"
        @click="submitSave"
      >保存</el-button>
      <el-button
        type="text"
        style="color: gray;"
        @click="submitPublic"
      >发布</el-button>
    </div>
  </div>

</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue'
import articleObj from '@/api/article'
import { ElMessage } from 'element-plus'

const props = defineProps<{
  article_id?: string
}>()

const article = reactive({
  article_id: '',
  title: '',
  summary: '',
  content: '',
})

onMounted(async () => {
  if (props.article_id) {
    article.article_id = props.article_id
    articleObj
      .getArticleByID(props.article_id)
      .then((ret) => {
        article.title = ret.title
        article.summary = ret.summary
        article.content = ret.content
      })
      .catch((error) => {
        ElMessage({
          message: error,
          type: 'error',
          plain: true,
        })
      })
  }
})

function submitSave() {}

function submitPublic() {
  articleObj
    .createOrUpdateArticle(article)
    .then((ret) => {
      article.article_id = ret.article_id
      ElMessage({
        message: '发布成功',
        type: 'warning',
        plain: true,
      })
    })
    .catch((error) => {
      ElMessage({
        message: error,
        type: 'error',
        plain: true,
      })
    })
}
</script>


<style scoped>
.article-editor {
  position: relative;
  padding: 0px;
}

.input-group {
  margin-bottom: 5px; /* 添加间隔 */
}

.button-group {
  position: absolute;
  bottom: 5px; /* 放置在右下角 */
  right: 5px;
  display: flex;
  gap: 10px; /* 按钮之间的间隔 */
}
</style>