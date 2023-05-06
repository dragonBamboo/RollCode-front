<template>
    <div>
      <el-dropdown trigger="click">
        <span class="user-avatar" style="background-image: url({{ user.avatar }})"></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{ user.name }}</el-dropdown-item>
          <el-dropdown-item>个人资料</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      user() {
        return this.$store.state.user;
      },
    },
  };
  </script>
  
  <style>
  .user-avatar {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }
  </style>