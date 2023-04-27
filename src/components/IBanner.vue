<!-- <template>
  <el-carousel :interval="0" arrow="always">
    <el-carousel-item v-for="(item, index) in bannerList" :key="index">
      <div class="banner">
        <div class="banner-image">
          <img :src="item.imgSrc" alt="Banner Image">
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
export default {
  data() {
    return {
      bannerList: [
        { imgSrc: "../assets/banner.jpg" },
        // { imgSrc: "/src/assets/Banner.jpg" },
        // { imgSrc: "/src/assets/banner.jpg" },
      ],
    };
  },
};
</script> -->
<template>
    <div class="banner">
        <div class="banner-image">
<!--            <img src="../assets/banner.jpg" alt="Banner Image">-->
        <el-image :src="url" :fit="fit" alt="网络不佳" />
        </div>

    </div>

</template>
<script>
const baseURL = location.protocol+'//'+ location.hostname+':'+location.port
export default {
    name:'IBanner',
    data() {
        return{
            url:`${baseURL}/img/banner.c25c3cb0.jpg`,
        }
    },
}
</script>
<style scoped>
.banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    /*width: 76%;*/
    /*margin: 40px auto;*/
    /*margin-top: 70px;*/
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