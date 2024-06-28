<template> 
  <CapterList :articles="aricleLists"/>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import CapterList from '@/components/capter/CapterList.vue'

const aricleLists = ref([
  {
    id:1,
    avatar: 'xxx',
    username: 'zxg',
    createTime: '',
    title: 'ceshi1',
    summary: 'adfadfadf',
    viewCount: 1,
    likeCount: 2,
    commentCount: 3,
  },
  {
    id:2,
    avatar: 'xxx',
    username: 'zxg',
    createTime: '',
    title: 'ceshi1',
    summary: 'adfadfadf',
    viewCount: 1,
    likeCount: 2,
    commentCount: 3,
  }
]); 

// 后端获取
// onMounted(async () => {  
//   try {  
//     // 发起请求到后端服务 /xxx/adc  
//     const response = await axios.get('/xxx/adc');  
//     // 假设后端返回的是一个数组  
//     parentArray.value = response.data; // 将后端返回的数据赋值给 parentArray  
//   } catch (error) {  
//     console.error('Error fetching data:', error);  
//     // 可以添加错误处理逻辑，比如显示一个错误消息给用户  
//   }  
// }); 

</script>