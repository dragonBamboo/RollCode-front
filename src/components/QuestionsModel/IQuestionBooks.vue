<template>
  <div class="image-container">
    <el-image
      v-for="(source, index) in imageSources"
      :key="index"
      :src="source"
      class="image"
    ></el-image>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      imageSources: [
        "https://pic.leetcode.cn/1683280468-quwfIB-%E9%A2%98%E5%BA%93.png?x-oss-process=image%2Fformat%2Cwebp",
        "https://pic.leetcode.cn/1672972118-VcrUNt-%E9%A2%98%E5%BA%93%20(2).png?x-oss-process=image%2Fformat%2Cwebp",
        "https://pic.leetcode.cn/1670420392-HsWoux-20221207-213706.png?x-oss-process=image%2Fformat%2Cwebp"
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.image-container {
  margin-top: 0px;
  margin-left: 15px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
  
  margin-bottom: 10px;
  .image {
    width: 280px;
    height: 140px;
    border-radius: 20px;
  }
}


</style>