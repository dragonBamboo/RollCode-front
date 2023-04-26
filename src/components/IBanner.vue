<template>
    <div class="banner">
      <div class="banner-text">
        <h1>您网站的主要功能或特点</h1>
        <p>用简洁的文字介绍您网站的主要功能或特点</p>
        <button>了解更多</button>
      </div>
      <div class="banner-image">
        <img src="banner.jpg" alt="Banner Image">
      </div>
    </div>
  </template>
  
  <script lang="ts">
    export default {
      name: 'Banner'
    }
  </script>
  
  <style scoped>
    /* Banner 样式 */
    .banner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 50px;
    }
    .banner-text {
      flex: 1;
      margin-right: 50px;
    }
    .banner-text h1 {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .banner-text p {
      font-size: 18px;
      margin-bottom: 30px;
    }
    .banner-text button {
      height: 50px;
      padding: 0 30px;
      font-size: 18px;
      font-weight: bold;
      border: none;
      border-radius: 25px;
      background-color: #32ca99;
      color: #fff;
    }
    .banner-text button:hover {
      cursor: pointer;
      background-color: #6fbaa2;
    }
    .banner-image {
      flex: 1;
    }
    .banner-image img {
      max-width: 100%;
      height: auto;
    }
  </style>