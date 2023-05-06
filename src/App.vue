<template>
  
  <router-view/>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
</template>

<script lang="ts">
import { defineComponent, computed, onMounted} from 'vue'
import { useStore } from 'vuex'
import { UserToken } from './store'
export default defineComponent({
    name: 'App',
    setup() {
        const store = useStore<UserToken>()
     
        //防止登录后刷新页面 重新获取用户信息 做到持久化登录状态
        onMounted(() => {
            const token = store.state.token
            if(token) {
                store.dispatch('fetchCurrentUser')
            }
        })
        const currentUser = computed(() => {
            return store.state.user
        })
 
        return {
            currentUser,
            
        }
    }
})
</script>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      text-decoration: none;
      color: #42b983;
    }
  }
}
</style>

