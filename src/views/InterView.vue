<template>
  
  <div class="INavbar">
    <INavbar/>
    <IBanner/>
    <Test2/>
</div>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default {
  components: {
    HelloWorld
  },
};
</script>
