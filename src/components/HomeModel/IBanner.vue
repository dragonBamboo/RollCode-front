<template>
  <div class="banner">
<!--        <div class="banner-image">-->
          <el-image :src="require('@/assets/banner.jpg')" alt="网络不佳" class="image"/>
<!--        </div>-->
  </div>

</template>
<script lang="ts">
const baseURL = location.protocol + '//' + location.hostname + ':' + location.port
export default {
  name: 'IBanner',
  data() {
      return {

      }
  },
  methods: {

  },
  mounted() {

  }
}
</script>
<style lang="less" scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 95%;
  margin: 10px auto;
  border-radius: 25px;
  overflow: hidden;
  
}


</style>