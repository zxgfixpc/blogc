<template>
  <div>
    <div
      v-for="article in articles"
      :key="article.article_id"
      class="article-card"
    >
      <div class="author-info">
        <img
          :src="article.avatar"
          alt="Author Avatar"
          class="avatar"
        />
        <div class="author-details">
          <span class="author-name">{{ article.nick }}</span>
          <span class="publish-time">{{ article.created_at }}</span>
        </div>
      </div>
      <div class="article-details">
        <h3
          class="article-title"
          @click="toArticleDetail(article.article_id)"
        >{{ article.title }}</h3>
        <p class="article-info">{{ article.summary }}</p>
      </div>
      <div class="article-stats">
        <span class="stat-item">查看数: {{ article.view_count }}</span>
        <span class="stat-item">点赞数: {{ article.like_count }}</span>
        <span class="stat-item">评论数: {{ article.comment_count }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['articles'])

function toArticleDetail(articleID) {
  const url = `/home/article-detail?id=${articleID}`
  window.open(url, '_blank')
}
</script>

<style scoped>
.article-card {
  border: 1px solid #ddd;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: background-color 0.3s; /* 添加过渡以实现平滑的颜色变化 */
}

.article-card:hover {
  background-color: #fafafa; /* 在悬停时改变背景颜色 */
}

.author-info {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
}

.author-details {
  display: flex;
  align-items: baseline;
}

.author-name {
  font-weight: bold;
  margin-right: 4px;
}

.publish-time {
  color: #888;
  margin-left: 20px;
}

.article-details {
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /*background-color: #3fdbf0;*/
  text-align: left; /* Align content to the left */
}

.article-title {
  margin-bottom: 2px;
  font-size: 20px;
}
.article-title:hover {
  text-decoration: underline;
  color: #c61111;
}

.article-info {
  color: #555;
  margin-bottom: 8px;
  font-size: 16px;
}

.article-stats {
  display: flex;
  justify-content: space-between;
  color: #888;
}

.stat-item {
  margin-right: 12px;
}
</style>
