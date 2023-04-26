import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import INavbar from '@/components/INavbar.vue';
import IHome from '@/components/IHome.vue';
import Test2 from '@/components/Test2.vue';
import ElementPlus from "element-plus"

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus)

app.component('INavbar', INavbar);
app.component('IHome', IHome);
app.component('Test2', Test2);

app.mount('#app');