<template>
    <!-- 导航栏 -->
    <div class="navbar">
      <el-row>
          <el-col :span="2"></el-col>
        <el-col :span="2">
          <!-- Logo -->
          <div class="logo">Your Logo</div>
        </el-col>
        <el-col :span="7">
          <!-- 导航栏 -->
          <el-menu class="menu" default-active="1" mode="horizontal">
            <el-menu-item index="1"><router-link class="link" to="/">首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link class="link" to="/questions">题库</router-link></el-menu-item>
            <el-menu-item index="3"><router-link class="link" to="/">面试</router-link></el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6">
          <!-- 搜索栏 -->
          <div class="menu-item-warpper">
              <div style="background-color: #f8f8f8;height: 50px;border-radius: 20px;box-sizing: border-box">
                  <input class="search-input" placeholder="搜索题目或面试相关信息" type="text" style="background-color: transparent; outline: none; box-shadow: none;border: 0px; padding-left: 20px; font-size: 16px; line-height: 50px">
                  <span style="color:#dfdfdf;" class="no-hover">|</span>
<!--                  <button type="button" style="background-color: transparent; border: none;">按钮</button>-->
                  <el-button class="search-btn" type="success" size="20px" text>
                      <el-icon size="20px">
                          <Search></Search>
                      </el-icon>&nbsp;
                      <span style="font-size: 16px">搜索</span></el-button>

              </div>
<!--            <el-input class="search-input" placeholder="搜索题目或面试相关信息" suffix-icon="el-icon-search"></el-input>-->
          </div>
        </el-col>
        <el-col :span="2">
          <!-- 登录按钮 -->
<!--          <div class="menu-item-warpper left">-->
<!--            <el-button class="search-btn" round type="success" size="large">搜索</el-button>-->
<!--          </div>-->
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="2">
          <div class="menu-item-warpper">
            <el-button class="login-btn" round type="success" size="large">登录/注册</el-button>
          </div>
        </el-col>
          <el-col :span="2">
          </el-col>
      </el-row>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import {Search} from "@element-plus/icons-vue";

export default defineComponent({
  name: 'Navbar',
    components: {Search},
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
.el-menu-item:hover{
  color: #32ca99!important;
  //background-color: rgba(40, 156, 118,0.3)!important;
  background-color: transparent!important;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 2px solid #32ca99!important;
}
.el-menu-item.is-active>.router-link-exact-active/deep/ {
  color: #32ca99!important;
}
.el-row{
  width: 100%!important;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #47e2b1;
  line-height: 58px;
  margin-left: 0px;
  float: left;
}
.no-hover:hover{
  user-select: none;
}
.menu {
  margin-left: 20px!important;
  float: left;
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
  float: right;

}
.left{
  float: left;
}
.search-input:hover,search-input:focus {
  outline: none;
  box-shadow: none;
}
.search-btn {
  color: #47e2b1!important;
  margin-left: 10px;
  //background-color: #47e2b1 !important;
  //border-radius: 10px !important;
}

.login-btn {
  background-color: #47e2b1 !important;
  border-radius: 10px !important;
}

.link{
  text-decoration: none;
}
</style>