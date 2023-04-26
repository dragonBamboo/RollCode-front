<template>
  
  <div class="home">
    <IHome/>
</div>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import IHome from '@/components/IHome.vue'

export default {
  components: {
    IHome,
    HelloWorld,
  },
};

</script>
