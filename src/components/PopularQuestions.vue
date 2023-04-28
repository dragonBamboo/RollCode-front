<template>
    <div class="popular-questions">
      <h2>热门题目</h2>
      <!-- 展示一些您网站上最受欢迎的题目 -->
    </div>
  </template>
  
  <script lang="ts">
    export default {
      name: 'PopularQuestions'
    }
  </script>
  
  <style scoped>
    /* PopularQuestions 样式 */
    .popular-questions {
      margin-top: 10px;
      padding: 50px;
      background-color: #b47e7e;
        border-radius: 15px;
    }
    .popular-questions h2 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
    }
  </style>