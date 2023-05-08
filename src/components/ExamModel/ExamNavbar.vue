<template>
  <el-header class="navbar">
    <div class="row-div">
      <el-row justify="center" type="flex">
        <!-- 左侧标题 -->
        <el-col :span="4">
          <el-page-header :icon="ArrowLeft">
            <template #content>
              <span class="text-large font-600 mr-3">Title</span>
            </template>
          </el-page-header>
        </el-col>
        <!-- 中间占位符 -->
        <el-col :span="8" class="text-center"></el-col>
        <!-- 右侧交卷按钮和倒计时组件 -->
        <el-col :span="4" class="text-right">
          <el-button type="primary" icon="el-icon-upload">交卷</el-button>
          <el-countdown :time="3600" format="HH:mm:ss" />
        </el-col>
      </el-row>
    </div>
  </el-header>
</template>
<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue'
</script>


<style lang="less" scoped>
.navbar {

    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .text-center {
    text-align: center;
  }
  
  .text-right {
    display: flex;
    text-align: right;
  }
  
  .text-large {
    font-size: 20px;
  }
  
  .font-600 {
    font-weight: 600;
  }
  /* 垂直居中样式 */

</style>