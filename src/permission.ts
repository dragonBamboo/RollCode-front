
import { ref, reactive, nextTick, watch, unref, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from 'element-plus';
import Schema from 'async-validator';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import router from './router'

const store = useStore();


router.beforeEach(async(to, from, next) => {
    const hasToken = store.getters.token
    if(hasToken){
        if(to.path==='/login'){

        }
        else {
            const hasGetUserInfo = store.getters.
        }
    }
})