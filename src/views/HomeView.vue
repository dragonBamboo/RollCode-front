<template>
  <div class="home">
    <!-- <IHome /> -->
    <el-container class="my-container">
      <el-header>
        <INavbar />
      </el-header>
      <div class="home-container">
        <el-row>
          <el-row justify="center">
            <el-col :span="20">
              <el-main>
                <IBanner />
              </el-main>
            </el-col>
            <el-col :span="14">
              <el-main>
                <HomeTitle />
              </el-main>
            </el-col>
            <el-col :span="5" class="col-right">
              <Features />
              <el-affix target=".my-container" :offset="80">
                <JobAbilitiesTest />
                <LatestInterviewQuestions />
              </el-affix>
            </el-col>
          </el-row>
        </el-row>
      </div>
    </el-container>
    <IFooter />
  </div>
</template>
<script lang="ts">
import IBanner from "@/components/HomeModel/IBanner.vue";
import JobAbilitiesTest from "@/components/HomeModel/JobAbilitiesTest.vue";
import PopularQuestions from "@/components/PopularQuestions.vue";
import LatestInterviewQuestions from "@/components/LatestInterviewQuestions.vue";
import Recommendations from "@/components/HomeModel/Recommendations.vue";
import Features from "@/components/HomeModel/Features.vue";

import HomeTitle from "@/components/HomeModel/HomeTitle.vue";

export default {
  components: {
    IBanner,
    PopularQuestions,
    JobAbilitiesTest,
    LatestInterviewQuestions,
    Recommendations,
    Features,
    HomeTitle,
  },
  mounted() {
    //派发actions，获取floor组件的数据
    // store.dispatch('getFloorList')
    // //获取用户信息在首页展示
    // store.dispatch('getUserInfo')
  },
};
</script>

<style lang="less" scoped>
.el-row {
  width: 100% !important;
}

.el-main {
  --el-main-padding: 0px !important;
  margin: 0 30px;
  justify-content: center;
}

.my-container {
  background-color: #f7f8f8;
  height: auto;
}
</style>
