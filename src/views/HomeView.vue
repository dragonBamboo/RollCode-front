<template>
    <div class="home">
        <!-- <IHome /> -->
        <el-container>
            <el-header>
                <INavbar/>
            </el-header>
            <el-row>
                <el-col :span="2"></el-col>
                <el-col :span="20">
                    <el-main>
                        <IBanner/>
                        <PopularQuestions/>
                        <LatestInterviewQuestions/>
                        <Recommendations/>
                        <Features/>
                    </el-main>
                </el-col>
                <el-col :span="2"></el-col>
            </el-row>
        </el-container>
    </div>
</template>

<script lang="ts">

import IBanner from '@/components/IBanner.vue';
import PopularQuestions from '@/components/PopularQuestions.vue';
import LatestInterviewQuestions from '@/components/LatestInterviewQuestions.vue';
import Recommendations from '@/components/Recommendations.vue';
import Features from '@/components/Features.vue';
import INavbar from '@/components/INavbar.vue';

export default {
    components: {
        IBanner,
        PopularQuestions,
        LatestInterviewQuestions,
        Recommendations,
        Features,
        INavbar
    },
};
</script>

<style lang="less">
.el-row{
    width: 100%!important;
}
.el-main{
    --el-main-padding:0px!important;
}
</style>