<template>
    <div class="home-title">
      <div class="home-title-header">
        <el-tabs v-model="activeName" class="home-title-tabs">
          <el-tab-pane label="最热" name="first">
            <Recommendations/>
          </el-tab-pane>
          <el-tab-pane label="最新" name="second">
            <PopularQuestions/>
          </el-tab-pane>
        </el-tabs>

      </div>
    </div>
  </template>

<script lang="ts" setup >
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import Recommendations from './Recommendations.vue';
import PopularQuestions from '../PopularQuestions.vue';

const activeName = ref('first')

</script>

<style lang="less">

.home-title {
  .el-tabs__nav-wrap::after {
    background-color: transparent!important;
  }
}
.el-tabs__item {
    margin-left: 20px;
    margin-top: 10px;
}
.el-tabs__item:last-child{
  margin-left: 0px;
}
.el-tabs__item.is-active {

    color: #32ca99!important;
}
.el-tabs__item:hover {
    
    color: #32ca99!important;
}
.el-tabs__active-bar {

    background-color:  #32ca99!important;

}

</style>