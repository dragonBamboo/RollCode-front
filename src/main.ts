import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import INavbar from '@/components/GlobalModel/INavbar.vue';
import UserAvatar from '@/components/GlobalModel/UserAvatar.vue';

import HotestPost from '@/components/HotestPost.vue';
import IQuestionList from '@/components/QuestionsModel/IQuestionList.vue';
import Test2 from '@/components/Test2.vue';
import LoginorRegister from "@/components/LoginorRegister.vue";
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component('INavbar', INavbar);
app.component('Test2', Test2);
app.component('LoginorRegister', LoginorRegister);
app.component('HotestPost',HotestPost)
app.component('IQuestionList',IQuestionList)

app.mount('#app');
