<template>
    <div class="home">
        <el-container>
            <el-header>
                <el-row :gutter="20">
                    <el-col :span="1"><div class="grid-content ep-bg-purple" /></el-col>
                    <el-col :span="1"><img src="../assets/logo.png" id="index-img" alt="logo"></el-col>
                    <el-col :span="11">
                        <Menu></Menu>
                    </el-col>
                    <el-col :span="4">
                        <el-input v-model="input" placeholder="Please input" />
                    </el-col>
                    <el-col :span="2"><div class="grid-content ep-bg-purple" /></el-col>
                    <el-col :span="1"><div class="grid-content ep-bg-purple" /></el-col>
                </el-row>

            </el-header>
            <el-main>Main</el-main>
        </el-container>
    </div>
</template>

<script>
// import {Options, Vue} from 'vue-class-component';
// import HelloWorld from '@/components/HelloWorld.vue';
// import Menu from "@/components/Menu.vue"; // @ is an alias to /src
//
// @Options({
//     components: {
//         Menu,
//         // HelloWorld,
//     },
// })
// export default class HomeView extends Vue {
// }

import Menu from "@/components/Menu.vue";

export default {
    name: 'home',
    components:{
        Menu
    },
    data(){
        return{
            input:''
        }
    }
}

</script>
<style lang="less" scoped>
    #index-img{
        height: 56px;
    }
    .el-input/deep/{
        height: 56px;
    }
</style>