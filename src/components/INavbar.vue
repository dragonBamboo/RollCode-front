<template>
    <!-- <el-header class="navbar">
      <div class="logo" :class="{ 'logo-active': isHomePage }">Your Logo</div>
      <el-menu :default-active="activeIndex" class="nav-links" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><a href="/">首页</a></el-menu-item>
        <el-menu-item index="2"><a href="/question">题库</a></el-menu-item>
        <el-menu-item index="3"><a href="/interviews">面试</a></el-menu-item>
      </el-menu>
      <div class="search-box">
        <el-input placeholder="搜索题目或面试相关信息" class="search-input"></el-input>
        <el-button class="search-btn" type="primary">搜索</el-button>
      </div>
      <el-button class="user-btn" type="primary">登录/注册</el-button>
    </el-header> -->
    <el-container>
      <!-- 导航栏 -->
      <el-header class="navbar">
          <el-row>
              <el-col :span="6">
                  <!-- Logo -->
                  <div class="logo">Your Logo</div>
              </el-col>
              <el-col :span="5">
                  <!-- 导航栏 -->
                  <el-menu class="menu" default-active="1" mode="horizontal">
                      <el-menu-item index="1">首页</el-menu-item>
                      <el-menu-item index="2">题库</el-menu-item>
                      <el-menu-item index="3">面试</el-menu-item>
                  </el-menu>
              </el-col>
              <el-col :span="5">
                  <!-- 搜索栏 -->
                  <div class="menu-item-warpper">
                      <el-input class="search-input" placeholder="搜索题目或面试相关信息"
                                suffix-icon="el-icon-search"></el-input>
                  </div>
              </el-col>
              <el-col :span="3">
                  <!-- 登录按钮 -->
                  <div class="menu-item-warpper">
                      <el-button class="search-btn" round type="success" size="large">搜索</el-button>
                  </div>
              </el-col>
              <el-col :span="1"></el-col>
              <el-col :span="4">
                  <div class="menu-item-warpper">
                      <el-button class="login-btn" round type="success" size="large">登录/注册</el-button>
                  </div>
              </el-col>
          </el-row>
      </el-header>
      </el-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default defineComponent({
    name: 'Navbar',
    setup() {
      const activeIndex = ref('1');
      const handleSelect = (index: string) => {
        activeIndex.value = index;
      };
      const route = useRoute();
      const isHomePage = route.path === '/';
      return {
        activeIndex,
        handleSelect,
        isHomePage,
      };
    },
  });
  </script>
  
  <style lang="less">
  /* 导航栏样式 */
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #32ca99;
    line-height: 58px;
  }
  
  .menu {
    width: 300px;
    border-bottom: none !important;
  }
  
  .el-input__wrapper {
    border-radius: 20px !important;
    height: 38px;
  }
  
  .menu-item-warpper {
    display: flex;
    align-items: center;
    height: 58px;
    box-sizing: border-box;
  }
  
  .search-btn {
    margin-left: 10px;
    background-color: #32ca99 !important;
  }
  
  .login-btn {
    background-color: #32ca99 !important;
  }
  
  /* 导航栏样式结束 */
  /* Banner样式 */
  .banner {
    display: flex;
    justify-content: space-between;
    margin-top: 20px; /* 添加间距 */
    align-items: center;
    background-image: linear-gradient(to right, #ff416c, #ff4b2b);
    color: #fff;
    height: 330px;
    width: 76%;
    padding: 0 20px;
    border-radius: 40px;
    margin: 40px auto; /* 使用 margin 属性和 auto 值 */
  }
  
  .banner-text {
    flex: 1;
    max-width: 50%;
  }
  
  .banner-text h1 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .banner-text p {
    font-size: 24px;
    margin-bottom: 40px;
  }
  
  .banner-text button {
    height: 60px;
    padding: 0 40px;
    border: none;
    border-radius: 30px;
    background-color: #fff;
    color: #ff416c;
    font-size: 24px;
    font-weight: bold;
  }
  
  .banner-text button:hover {
    cursor: pointer;
    background-color: #f5f5f5;
  }
  
  .banner-image img {
    max-width: 50%;
  }
  
  
  /* 内容区域样式 */
  .content {
    max-width: 1200px;
    margin: 80px auto;
    padding: 0 20px;
  }
  
  .content h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  
  .popular-questions {
    /* 添加样式 */
  }
  
  .latest-interview-questions {
    /* 添加样式 */
  }
  
  .recommendations {
    /* 添加样式 */
  }
  
  .features {
    /* 添加样式 */
  }
  
  /* 页脚样式 */
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    height: 80px;
    padding: 0 20px;
  }
  
  .footer a {
    color: #fff;
    text-decoration: none;
  }
  </style>