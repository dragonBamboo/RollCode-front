<template>
  <div class="questions">
    <!-- <questions /> -->
    <el-container class="my-container">
      <el-header>
        <INavbar />
      </el-header>
      <div class="books">
        <el-row>
          <el-col :span="16" class="col-left" :gutter="10" >
            <el-main>
              <div class="header">
                <h1 class="header-h1">推荐</h1>
                <div>
                  <IQuestionBooks />
                </div>
                <h1 class="header-h2"></h1>
                <div>
                  <QuestionsTitle />
                </div>
              </div>
            </el-main>
          </el-col>
          <el-col :span="6" class="col-right" :gutter="10">
            <el-affix target=".my-container" :offset="80">
              <ICalendar />
              <Features />
              <JobAbilitiesTest />
              <LatestInterviewQuestions />
            </el-affix>
          </el-col>
        </el-row>
      </div>
    </el-container>
    <IFooter />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
const value = ref(new Date());
import IQuestionBooks from "@/components/QuestionsModel/IQuestionBooks.vue";
import JobAbilitiesTest from "@/components/HomeModel/JobAbilitiesTest.vue";
import PopularQuestions from "@/components/PopularQuestions.vue";
import LatestInterviewQuestions from "@/components/LatestInterviewQuestions.vue";
import Recommendations from "@/components/HomeModel/Recommendations.vue";
import Features from "@/components/HomeModel/Features.vue";
import INavbar from "@/components/GlobalModel/INavbar.vue";
import QuestionsTitle from "@/components/QuestionsModel/QuestionsTitle.vue";
import ICalendar from "@/components/QuestionsModel/ICalendar.vue";

interface DisabledDatesFunction {
  (date: Date): boolean;
}

export default {
  components: {
    IQuestionBooks,
    PopularQuestions,
    JobAbilitiesTest,
    LatestInterviewQuestions,
    Recommendations,
    Features,
    INavbar,
    QuestionsTitle,
    ICalendar,
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.questions {
  .my-container {
    height: auto;
    background-color: #f7f8f8;
  }

  .header-h1 {
    display: flex;
    margin-left: 15px;
    margin-top: 0;
  }

  .books {
    margin-top: 20px;
    margin-left: 130px;
  }

  .col-left {
  }

  .col-right {
    margin-top: 50px;
    margin-left: 0;
  }
}
</style>
