<template>
  <div class="exam-info">
    <div class="paper">
      <div
        class="question"
        v-for="(question, index) in questions"
        :key="question.id"
      >
        <div>
          <div class="title">{{ index + 1 }}. {{ question.question }}</div>
          <el-radio-group v-model="question.selectedAnswer" class="options">
            <div
              class="option"
              v-for="(option, optionIndex) in question.options"
              :key="optionIndex"
            >
              <el-radio :label="option">{{ option }}</el-radio>
            </div>
          </el-radio-group>
        </div>
      </div>
      <div class="submit">
        <el-button type="primary" @click="">提交</el-button>
        <!-- <div v-if="showScore" class="score">得分：{{ score }}</div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

const activeName = ref("first");
const title = ref("");
export default {
  data() {
    return {
      questions: [
        {
          id: "1",
          type: 1,
          question:
            "以下哪个 Java 关键字用于声明可以在程序中的任何地方访问的类？",
          options: ["A. this", "B. super", "C. private", "D. public"],
          answer: ["D"],
          selectedAnswer: null,
          score: 1,
          difficulty: 1,
        },
        {
          id: "2",
          type: 2,
          question: "以下哪些选项是正确的？",
          options: [
            "A. Vue.js 是一个前端框架",
            "B. React 是一个后端框架",
            "C. Angular 是一个前端框架",
            "D. Express 是一个前端框架",
          ],
          answer: ["A", "C"],
          selectedAnswer: null,
          score: 1,
          difficulty: 2,
        },
      ],
    };
  },
  mounted() {
    // // 向后台请求数据
    // axios
    //   .get("/api/questions")
    //   .then((response) => {
    //     // 解析数据并保存到 questions 数组中
    //     this.questions = response.data.data.records.map(
    //       (record) => {
    //         return {
    //           id: record.id,
    //           type: record.type,
    //           question: record.content,
    //           options: JSON.parse(record.options),
    //           answer: JSON.parse(record.answer),
    //           score: record.score,
    //           difficulty: record.difficulty,
    //         };
    //       }
    //     );
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  },
};
</script>

<style lang="less" scoped>
/* Recommendations 样式 */

.exam-info {
  border-radius: 25px;

  .paper {
    display: flex;
    padding: 100px;
    margin-top: 20px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    .question {
      margin-bottom: 20px;
      .title {
        display: flex;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .options {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        .option {
          display: flex;
          margin-bottom: 10px;
        }
      }
    }
  }
}
.el-radio-group{
    align-items: normal;
}
</style>
