<template>
    <div class="home-title">
        <div class="home-title-header">
            <el-tabs v-model="activeName" class="home-title-tabs">
                <el-tab-pane label="专项练习" name="first">
                    <PraticeTab />
                </el-tab-pane>

                <el-tab-pane name="second">
                    <template #label>
                        <span>公司真题</span>
                        <span>笔试</span>
                    </template>
                    公司真题
                </el-tab-pane>

                <el-tab-pane name="third">
                    <template #label>
                        <span>公司真题</span>
                        <span>面试</span>
                    </template>
                    公司真题
                </el-tab-pane>

                <el-tab-pane label="专项练习" name="fourth">
                    <span class="small-character">在线编程</span>
                </el-tab-pane>

            </el-tabs>


        </div>
    </div>
</template>

  
<script lang="ts" setup >
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import PraticeTab from '@/components/QuestionsModel/PracticeTab.vue'
const activeName = ref('first')

</script>

<style lang="less" scoped>

.home-title-tabs{
  
    /deep/.el-tabs__item{
        color: rgb(99, 99, 99);
        font-size: medium;
    }
    /deep/.el-tabs__nav-scroll{
        background-color: #ffffff;
        height: 60px;
        border-radius: 10px;
    }
    
}

.home-title-header{
    margin-left: 14px;
}



</style>