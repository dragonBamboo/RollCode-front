import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
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
=======
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
>>>>>>> eba10b9f98c0401cefdd1127857008aac1eca186
