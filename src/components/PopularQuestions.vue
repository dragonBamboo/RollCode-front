<template>
  <div class="popular-questions">
    <div class="questions-header">
      <img src="@/assets/2.png" class="questions-box-icon" />
      <h2 class="title">职业能力测评</h2>
    </div>
    <div class="questions-body">
      <div class="item-module" v-for="(exp, index) in experiences" :key="index">
        <div class="item-header">
          <img :src="exp.icon" class="item-icon" />
          <h3 class="item-label">{{ exp.label }}</h3>
        </div>
        <ul class="item-list">
          <!-- <li class="item-link" v-for="(link, i) in exp.links" :key="i">
            <el-link :href="link.href" :target="link.target" :title="link.title">{{ link.text }}</el-link>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
export default {
  name: 'PopularQuestions',
  data() {
    return {
      experiences: [
        {
          label: '面试经验',
          icon: 'https://static.nowcoder.com/fe/file/oss/1670224506225AUBYN.png',
        }
      ]
    }
  }
}


</script>
  
<style scoped>
/* PopularQuestions 样式 */
.popular-questions {
  border: 1px solid #fcfcfc;
  margin-top: 16px;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 16px;
  padding-top: 5px;
  width: 78%;
}

.questions-header {
  align-items: center;
  display: flex;
  margin-bottom: 2px;
  font-size: 11px;
}


.questions-box-icon {
  height: 30px;
  width: 30px;
  margin-right: 5px;
}

.questions-body {
  display: inline-block;
  justify-content: space-between;
}
</style>