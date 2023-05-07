<template>
  <div class="question-list">
    <h2>题库列表</h2>
    <el-table :data="questionList" style="width: 100%">
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column prop="name" label="题目名称"></el-table-column>
      <el-table-column prop="difficulty" label="难度" width="80"></el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="">查看</el-button>
          <el-button type="success" size="small" @click="">开始</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="题目详情" :visible.sync="dialogVisible" width="50%">
      <div>{{  }}</div>
      <div v-for="(option, index) in currentQuestion?.options" :key="index">
        <label :for="'option' + index">{{ option }}</label>
        <input type="radio" :id="'option' + index" :value="option" v-model="currentAnswer">
      </div>
      <el-button type="primary" @click="handleSubmit">提交答案</el-button>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElTable, ElTableColumn, ElButton, ElDialog, ElMessage } from 'element-plus';
// import { getQuestionList, getQuestionDetail, submitAnswer } from '@/api/question';

export default defineComponent({
  name: 'QuestionList',
  data() {
    return {
      questionList: [],
      dialogVisible: false,
      currentQuestion: null,
      currentAnswer: '',
    };
  },
  // mounted() {
  //   this.fetchQuestionList();
  // },
  // methods: {
  //   async fetchQuestionList() {
  //     try {
  //       const response = await getQuestionList();
  //       this.questionList = response.data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  //   async handleView(row: any) {
  //     try {
  //       const response = await getQuestionDetail(row.id);
  //       this.currentQuestion = response.data;
  //       this.dialogVisible = true;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  //   handleStart(row: any) {
  //     ElMessage.success(`开始做题：${row.name}`);
  //   },
  //   async handleSubmit() {
  //     try {
  //       const response = await submitAnswer(this.currentQuestion.id, this.currentAnswer);
  //       if (response.data.code === 20000) {
  //         ElMessage.success(response.data.data);
  //         this.dialogVisible = false;
  //       } else {
  //         ElMessage.error(response.data.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // },
  // components: {
  //   ElTable,
  //   ElTableColumn,
  //   ElButton,
  //   ElDialog,
  //   ElMessage,
  // },
});
</script>

<style scoped>
.question-list {
  max-width: 800px;
  margin: 0 auto;
}
</style>