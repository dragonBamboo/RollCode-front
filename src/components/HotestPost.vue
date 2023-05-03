<template>
  <div class="hotest-post-tab">
    <div class="hotest-header">
    </div>
    <div class="hotest-body">
      <div class="item-module" v-for="(exp, index) in experiences" :key="index">
        <div class="item-header">
          <img :src="exp.icon" class="item-icon" />
          <h3 class="item-label">{{ exp.label }}</h3>
        </div>
        <ul class="item-list">

        </ul>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
export default {
  name: 'HotestPost',
  data() {
    return {
      experiences: [
        {
          label: '面试经验',
        }
      ]
    }
  }
}


</script>
  
<style scoped>
/* PopularQuestions 样式 */
.hotest-post-tab{
  margin-top: 190px;
}




</style>