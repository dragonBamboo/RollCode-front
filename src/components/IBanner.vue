<template>
    <div class="banner">
<!--        <div class="banner-image">-->
            <el-image :src="require('@/assets/banner.jpg')" :fit="fit" alt="网络不佳"/>
<!--        </div>-->
    </div>

</template>
<script>
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
    width: 100%;
    /*margin: 40px auto;*/
    /*margin-top: 70px;*/
    border-radius: 25px;
    overflow: hidden;
    el-image{
        top:0;
        left:0;
        display: flex;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

</style>