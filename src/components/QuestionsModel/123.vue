<template>
    <div class="questions">
      <!-- <questions /> -->
      <el-container class="my-container">
        <el-header>
          <INavbar />
        </el-header>
        <el-row justify="center">
          <el-col :span="20">
            <el-main>
              <div class="title-header">
  
                <h1 class="header-h1">推荐</h1>
  
                <div class="header">
  
                  <div class="header-one">
                    <el-col :span="18">
                      <IQuestionBooks />
                    </el-col>
  
  
  
                    <el-calendar ref="calendar" class-name="q-calendar" :disabled-date="disabledDates">
                      <template #header="{ date }">
                        <span>每日一题</span>
                        <span>{{ date }}</span>
  
                      </template>
                    </el-calendar>
  
                        <!-- <div class="nav-question">
                          <el-button type='' size="large" text>专项练习</el-button>
                          <el-button type='' size="large" text>公司真题&nbsp;<span class="small-character">笔试</span></el-button>
                          <el-button type='' size="large" text>公司真题&nbsp;<span class="small-character">面试</span></el-button>
                          <el-button type='' size="large" text>在线编程</el-button>
                        </div> -->
    
                  </div>
  
                </div>
  
              </div>
              
              <el-container>
                <el-main>
  
                  <QuestionsTitle />
  
  
                </el-main>
                <el-aside>
                  <Features />
                  <JobAbilitiesTest />
                  <LatestInterviewQuestions />
                </el-aside>
              </el-container>
              
  
            </el-main>
            
          </el-col>
        </el-row>
      </el-container>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue'
  const value = ref(new Date())
  import IQuestionBooks from '@/components/QuestionsModel/IQuestionBooks.vue';
  import JobAbilitiesTest from '@/components/HomeModel/JobAbilitiesTest.vue';
  import PopularQuestions from '@/components/PopularQuestions.vue';
  import LatestInterviewQuestions from '@/components/LatestInterviewQuestions.vue';
  import Recommendations from '@/components/HomeModel/Recommendations.vue';
  import Features from '@/components/HomeModel/Features.vue';
  import INavbar from '@/components/GlobalModel/INavbar.vue';
  import QuestionsTitle from '@/components/QuestionsModel/QuestionsTitle.vue';
  
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
      QuestionsTitle
    },
    data() {
      return {
        currentDate: new Date(),
        range: {
          // 本月第一天
          start: new Date(2023, 5, 1),
          // 本月最后一天
          end: new Date(2023, 5, 30),
        },
  
      };
    },
    methods: {
      disabledDates: ((date: Date) => {
        // 禁用过去的日期
        return date < new Date();
      }) as DisabledDatesFunction,
    }
  };
  </script>
  
  <style lang="less">
  .questions {
  
    .title-header {
      .header-h1 {
        display: flex;
        margin-left: 15px;
      }
  
    }
  
    .header {
  
      align-items: flex-start;
      justify-content: space-between;
      /* 或者设置为 flex-start */
      flex-wrap: wrap;
    }
  
    .header-one {
      display: flex;
      align-items: flex-start;
      flex-wrap: nowrap;
      justify-content: space-between;
      /* 水平对齐其他元素 */
    }
  
    .nav-question {
      display: block;
      align-items: left;
      flex-wrap: wrap;
  
      /* 添加 flex-basis 属性 */
  
      background-color: #ffffff;
      border-radius: 15px;
  
      .el-button {
        float: left;
        line-height: 60px;
        height: 60px;
  
        .small-character {
          color: #32ca99;
          line-height: 12px;
          font-size: 12px;
          background-color: rgba(50, 202, 153, 0.1);
        }
      }
    }
  
  
    .current.is-selected.is-today:hover {
      background-color: #2e725d !important;
      color: aliceblue;
      border-radius: 20px;
  
    }
  
    .el-calendar {
      margin-left: 30px;
      width: 280px;
      --el-calendar-border: transparent;
      border-radius: 20px;
      --el-calendar-cell-width: 35px !important;
  
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  
      .el-calendar__body {
        padding: 10px 10px 35px;
  
        .el-calendar-day {
          border-radius: 20px;
  
        }
      }
  
      .current.is-selected {
  
  
        border-radius: 20px;
  
  
      }
  
      .current.is-selected.is-today {
        color: aliceblue;
        background-color: #47e2b1;
  
      }
  
  
      .el-calendar-table:not(.is-range) td.next {
  
        /*隐藏下个月的日期*/
  
        display: none;
  
      }
  
      .el-calendar-table:not(.is-range) td.prev {
  
        /*隐藏上个月的日期*/
  
        visibility: hidden;
  
      }
  
      thead {
        font-size: small;
      }
  
  
    }
  
  
  }</style>