<template>
  <div class="content">
    <div class="banner">
      <!-- banner 区域 -->
    </div>
    <div class="blocks">
      <el-row>
        <el-col :span="16">
          <div class="block">
            <h2>最新题库</h2>
            <div class="content">
              <ul>
                <li v-for="(question, index) in latestQuestions" :key="index">
                  <h3 class="title">{{ question.title }}</h3>
                  <p class="content">{{ question.content }}</p>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="block">
            <h2>讨论</h2>
            <div class="content">
              <ul>
                <li v-for="(discussion, index) in discussions" :key="index">
                  <h3 class="title">{{ discussion.title }}</h3>
                  <p class="content">{{ discussion.content }}</p>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <div class="block">
            <h2>最新面试题目</h2>
            <div class="content">
              <ul>
                <li v-for="(question, index) in latestInterviewQuestions" :key="index">
                  <h3 class="title">{{ question.title }}</h3>
                  <p class="content">{{ question.content }}</p>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { ElRow, ElCol } from 'element-plus';

export default {
  components: {
    ElRow,
    ElCol,
  },
  data() {
    return {
      latestQuestions: [], // 最新题库数据
      latestInterviewQuestions: [], // 最新面试题目数据
      discussions: [], // 讨论数据
    };
  },
  mounted() {
    // 生成一些随机数据
    this.latestQuestions = this.generateRandomData(10);
    this.latestInterviewQuestions = this.generateRandomData(10);
    this.discussions = this.generateRandomData(5);
  },
  methods: {
    generateRandomData(count) {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          title: `题目 ${i + 1}`,
          content: `这是一道题目的内容，题目编号为 ${i + 1}。`,
        });
      }
      return data;
    },
  },
};
</script>

<style>
.content {
  max-width: 1200px;
  margin: 0 auto;
}

.banner {
  height: 400px;
  background-color: #ccc;
  margin-bottom: 20px;
}

.blocks {
  margin-bottom: 20px;
}

.block {
  margin-bottom: 20px;
}

.block h2 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.block .content {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.block .title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.block .content {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}
</style>