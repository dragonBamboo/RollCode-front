
<template>
  <div class="banner">
    <div class="banner-image">
      <img src="../assets/banner.jpg" alt="Banner Image">
    </div>
  </div>

    <el-radio-group v-model="labelPosition" label="label position">
      <el-radio-button label="left">Left</el-radio-button>
      <el-radio-button label="right">Right</el-radio-button>
      <el-radio-button label="top">Top</el-radio-button>
    </el-radio-group>
    <div style="margin: 20px" />
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="Name">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-input v-model="formLabelAlign.region" />
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="formLabelAlign.type" />
      </el-form-item>
    </el-form>

  
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>
<style scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 76%;
  margin: 40px auto;
  margin-top: 70px;
  border-radius: 25px;
  overflow: hidden;
}

  .banner-image img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>