<template>
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
            <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/questions">题库</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/">面试</router-link></el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="5">
          <!-- 搜索栏 -->
          <div class="menu-item-warpper">
            <el-input class="search-input" placeholder="搜索题目或面试相关信息" suffix-icon="el-icon-search"></el-input>
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
.navbar {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
}


.logo {
  font-size: 24px;
  font-weight: bold;
  color: #47e2b1;
  line-height: 58px;
}

.menu {
  width: 300px;
  border-bottom: none !important;
}

.el-input__wrapper {
  border-radius: 10px !important;
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
  background-color: #47e2b1 !important;
  border-radius: 10px !important;
}

.login-btn {
  background-color: #47e2b1 !important;
  border-radius: 10px !important;
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