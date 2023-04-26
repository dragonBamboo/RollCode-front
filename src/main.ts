import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import INavbar from '@/components/INavbar.vue';
import Test2 from '@/components/Test2.vue';
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus)

app.component('INavbar', INavbar);
app.component('Test2', Test2);

app.mount('#app');
