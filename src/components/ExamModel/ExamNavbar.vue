<template>
  <el-container>
    <!-- 导航栏 -->
    <el-header class="navbar">
      <el-row justify="center">
        <el-col :span="2">
            <el-page-header :icon="ArrowLeft">
                <template #content>
                  <span class="text-large font-600 mr-3"> Title </span>
                </template>
              </el-page-header>
        </el-col>
        <el-col :span="7"> </el-col>
        <el-col :span="6"> </el-col>
        <el-col :span="3"> </el-col>
        <el-col :span="2"> </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue'
</script>


<style lang="less" scoped>
.navbar {

    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
</style>