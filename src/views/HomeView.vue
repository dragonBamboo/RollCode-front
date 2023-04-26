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

<script lang="ts">

import HelloWorld from '@/components/HelloWorld.vue';
import IBanner from '@/components/IBanner.vue';
import PopularQuestions from '@/components/PopularQuestions.vue';
import LatestInterviewQuestions from '@/components/LatestInterviewQuestions.vue';
import Recommendations from '@/components/Recommendations.vue';
import Features from '@/components/Features.vue';
import INavbar from '@/components/INavbar.vue';

export default {
  components: {
    HelloWorld,
    IBanner,
    PopularQuestions,
    LatestInterviewQuestions,
    Recommendations,
    Features,
    INavbar
},
};
</script>