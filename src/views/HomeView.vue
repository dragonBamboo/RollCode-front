<template>
  <div class="home">
    <!-- <IHome /> -->
    <INavbar/>
    <IBanner />
    <PopularQuestions />
    <LatestInterviewQuestions />
    <Recommendations />
    <Features />
  </div>
</template>

<<<<<<< HEAD
<script lang="ts">

import HelloWorld from '@/components/HelloWorld.vue';
import IHome from '@/components/IHome.vue';
import IBanner from '@/components/IBanner.vue';
import PopularQuestions from '@/components/PopularQuestions.vue';
import LatestInterviewQuestions from '@/components/LatestInterviewQuestions.vue';
import Recommendations from '@/components/Recommendations.vue';
import Features from '@/components/Features.vue';
import INavbar from '@/components/INavbar.vue';

export default {
  components: {
    IHome,
    HelloWorld,
    IBanner,
    PopularQuestions,
    LatestInterviewQuestions,
    Recommendations,
    Features,
    INavbar
},
};
=======
<!--<script lang="ts">-->
<!--import { Options, Vue } from 'vue-class-component';-->
<!--import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src-->
<!--import IHome from '@/components/IHome.vue'-->
<!--@Options({-->
<!--  components: {-->
<!--    IHome,-->
<!--    HelloWorld-->
<!--  },-->
<!--})-->
<!--export default class HomeView extends Vue {}-->

<!--</script>-->
<script>
import IHome from "@/components/IHome.vue";

export default {
    name:'home',
    components:{
        IHome,
    }
}
>>>>>>> eba10b9f98c0401cefdd1127857008aac1eca186
</script>