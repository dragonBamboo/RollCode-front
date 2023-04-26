<template>
    <el-header class="navbar">
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
    </el-header>
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
  
  <style scoped>
  /* 导航栏样式 */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    height: 50px;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #6fbaa2;
    margin-left: 140px;
  }
  .logo-active {
    color: #32ca99;
  }
  .nav-links {
    margin: 0;
  }
  .nav-links a {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
  }
  .nav-links a:hover {
    color: #32ca99;
  }
  .search-box {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .search-input {
    height: 40px;
    border-radius: 20px;
    font-size: 16px;
    background-color: #f5f5f5;
  }
  .search-btn {
    height: 40px;
    border-radius: 20px;
    margin-left: 10px;
    background-color: #32ca99;
    color: #fff;
  }
  .search-btn:hover {
    cursor: pointer;
    background-color: #6fbaa2;
  }
  .user-btn {
    height: 35px;
    border-radius: 20px;
    background-color: #32ca99;
    color: #fff;
    margin-right: 140px;
  }
  .user-btn:hover {
    cursor: pointer;
    background-color: #6fbaa2;
  }
  </style>