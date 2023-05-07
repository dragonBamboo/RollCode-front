<template>
  <el-container>
    <!-- 导航栏 -->
    <el-header class="navbar">
      <el-row justify="center">
        <el-col :span="2">
          <!-- Logo -->
          <img src="@/assets/logo.png" target="_blank" class="logo-img" />
          <!-- <el-image src="../assets/logo.png" fit="contain"></el-image> -->

        </el-col>
        <el-col :span="7">
          <!-- 导航栏 -->
          <el-menu class="menu" mode="horizontal" :default-active="currentRoute">
            <el-menu-item index="/home"><router-link class="link" to="/home">首页</router-link></el-menu-item>
            <el-menu-item index="/questions"><router-link class="link" to="/questions">题库</router-link></el-menu-item>
            <el-menu-item index="/"><router-link class="link" to="/">面试</router-link></el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6">
          <!-- 搜索栏 -->
          <div class="menu-item-warpper">
            <div style="background-color: #f8f8f8;height: 50px;border-radius: 20px;box-sizing: border-box">
              <input class="search-input" placeholder="搜索题目或面试相关信息" type="text"
                style="background-color: transparent; outline: none; box-shadow: none;border: 0px; padding-left: 20px; font-size: 16px; line-height: 50px">
              <span style="color:#dfdfdf;" class="no-hover">|</span>
              <!--                  <button type="button" style="background-color: transparent; border: none;">按钮</button>-->
              <el-button class="search-btn" type="success" :style="{ fontSize: '20px' }" text>
                <el-icon size="20px">
                  <Search></Search>
                </el-icon>&nbsp;
                <span style="font-size: 16px">搜索</span></el-button>

            </div>
            <!--            <el-input class="search-input" placeholder="搜索题目或面试相关信息" suffix-icon="el-icon-search"></el-input>-->
          </div>
        </el-col>
        <el-col :span="3">
          <!-- 登录按钮 -->
          <!--          <div class="menu-item-warpper left">-->
          <!--            <el-button class="search-btn" round type="success" size="large">搜索</el-button>-->
          <!--          </div>-->
        </el-col>
        <el-col :span="2">
          <div class="menu-item-warpper">
            <!-- <el-button class="login-btn" round type="success" size="large"
              @click="dialogLoginRegisterVisible = true">登录/注册</el-button> -->
            <template v-if="userToken" >
              <el-dropdown>
                  <span class="user-avatar" :style="{ backgroundImage: `url(${user.avatar})` }" />
                  <template #dropdown>
                  <el-dropdown-menu slot="dropdown" style="z-index: 1000;">
                    <el-dropdown-item>{{ user.name }}</el-dropdown-item>
                    <el-dropdown-item>个人资料</el-dropdown-item>
                    <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
                </el-dropdown>
                
              <!-- <el-button class="login-btn" round type="success" size="large"
                @click="dialogLoginRegisterVisible = true">登陆成功 {{ token }}</el-button> -->

            </template>
            <template v-else>
              <el-button class="login-btn" round type="success" size="large"
                @click="dialogLoginRegisterVisible = true">登录/注册</el-button>
            </template>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <div>
      <el-dialog v-model="dialogLoginRegisterVisible" :before-close="handleClose" title="登录/注册" :lock-scroll="false">
        <div class="login-register-container">
          <!-- <div class="qr-code-login">
            <h3>扫码登录</h3>
            <el-image :src="require('@/assets/login.jpg')" fit="contain"></el-image>
          </div> -->
          <div class="form-container">
            <div>
              <el-form :model="loginForm" :rules="rules" ref="Loginform" label-width="0">
                <el-tabs v-model="activeTab">
                  <el-tab-pane label="注册/登录" name="register">
                    <el-form-item label="手机号码" prop="phone">
                      <el-input v-model="loginForm.phone" placeholder="请输入手机号码" />
                    </el-form-item>
                    <el-form-item label="验证码" prop="code">
                      <el-input v-model="loginForm.code" class="code-input" placeholder="请输入验证码" />
                      <el-button class="send-code-button" :disabled="disableSendCode" @click="handleSendCode">{{
                        sendCodeText() }}</el-button>
                    </el-form-item>
                    <el-form-item class="form-footer">
                      <el-button type="primary" @click="handleSubmit" class="register-btn">{{ activeTab === 'login' ?
                        '登录/注册' : '注册/登录'
                      }}</el-button>

                    </el-form-item>
                    <div class="login-icons">
                      <a class="qq-login" href="/#">
                        <span tagname="span" class="ncicon  ncicon-bleed" aria-label="QQ" size="24"><svg
                            class="qq-login-svg" focusable="false" viewBox="0 0 1024 1024" fill="currentColor"
                            width="1.8em" height="1.8em" aria-hidden="true">
                            <g fill-rule="nonzero" fill="none">
                              <path
                                d="M529.083 973.034c-79.293 0-152.082-26.541-198.943-66.178-23.8 7.112-54.245 18.55-73.454 32.74-16.449 12.136-14.392 24.51-11.431 29.502 13.007 21.954 223.16 14.019 283.828 7.187v-3.251zm0 0c79.304 0 152.086-26.541 198.956-66.178 23.788 7.112 54.237 18.55 73.452 32.74 16.436 12.136 14.388 24.51 11.42 29.502-13.007 21.954-223.155 14.019-283.828 7.187v-3.251z"
                                fill="#F6C556"></path>
                              <path
                                d="M529.532 497.784c130.95-.886 235.898-26.237 271.46-35.954C809.47 459.508 814 455.35 814 455.35c.033-1.196.538-21.321.538-31.697 0-174.832-82.525-350.505-285.486-350.511-202.96.006-285.49 175.686-285.49 350.504 0 10.39.504 30.508.543 31.698 0 0 3.69 3.89 10.439 5.776 32.835 9.136 139.757 35.746 274.022 36.663h.967zm355.845 145.64c-8.117-26.123-19.195-56.584-30.419-85.839 0 0-6.452-.798-9.723.145-100.677 29.248-222.714 47.893-315.703 46.766h-.967c-92.471 1.108-213.677-17.316-314.02-46.28-3.833-1.106-11.4-.631-11.4-.631-11.224 29.255-22.302 59.723-30.419 85.839-38.713 124.574-26.167 176.124-16.62 177.275 20.492 2.48 79.755-93.768 79.755-93.768 0 97.803 88.301 247.973 290.509 249.354h5.364c202.2-1.38 290.502-151.55 290.502-249.354 0 0 59.27 96.247 79.761 93.774 9.542-1.157 22.087-52.713-16.62-177.281z"
                                fill="#0E0E0D"></path>
                              <path
                                d="M456.837 331.42c-27.534 1.247-51.058-30.114-52.538-69.992-1.491-39.889 19.6-73.237 47.134-74.483 27.503-1.234 51.018 30.115 52.512 70.005 1.506 39.895-19.594 73.244-47.108 74.47zm196.968-69.992c-1.474 39.871-24.996 71.239-52.53 69.993-27.522-1.234-48.614-34.576-47.107-74.464 1.49-39.891 25.002-71.24 52.51-70.012 27.533 1.246 48.627 34.594 47.127 74.483z"
                                fill="#FFF"></path>
                              <path
                                d="M702.727 387.739c-7.352-16.291-81.456-34.45-173.186-34.45h-.989c-91.737 0-165.834 18.159-173.193 34.456a5.479 5.479 0 0 0-.537 2.321 5.577 5.577 0 0 0 1.012 3.139c6.2 9.028 88.479 53.693 172.718 53.693h.989c84.232 0 166.51-44.652 172.711-53.693a5.547 5.547 0 0 0 1.013-3.152 5.421 5.421 0 0 0-.538-2.308"
                                fill="#F6C556"></path>
                              <path
                                d="M490.678 262.022c1.259 15.753-7.383 29.749-19.272 31.273-11.912 1.532-22.574-9.997-23.838-25.75-1.246-15.766 7.383-29.76 19.252-31.28 11.932-1.542 22.611 9.997 23.858 25.75v.007zm75.643 5.265c2.434-4.361 19.004-27.282 53.313-18.937 9.017 2.195 13.185 5.423 14.065 6.688 1.296 1.873 1.658 4.541.336 8.135-2.607 7.125-7.991 6.93-10.972 5.536-1.929-.898-25.825-16.829-47.843 6.94-1.517 1.628-4.224 2.19-6.788.254-2.575-1.949-3.63-5.883-2.111-8.616z"
                                fill="#333"></path>
                              <path
                                d="M529.517 598.765h-.97c-63.24.759-139.92-7.616-214.182-22.258-6.353 36.81-10.187 83.082-6.897 138.258 8.326 139.46 91.15 227.129 218.993 228.394h5.189c127.849-1.265 210.664-88.934 219.002-228.394 3.29-55.187-.55-101.447-6.907-138.264-74.27 14.648-150.968 23.03-214.222 22.258"
                                fill="#FFF"></path>
                              <path
                                d="M813.995 455.351l40.96 102.225c-102.462 30.887-229.42 50.791-325.427 49.634h-.97c-16.906.203-34.772-.246-53.296-1.293l-.002 122.316c-62.99 8.781-125.857-3.897-125.857-3.897v-132.97c-50.35-8.503-100.729-20.062-146.263-33.79l40.96-102.225c.416.126 122.554 38.612 284.459 39.7h.969c162.171-1.095 284.467-39.7 284.467-39.7z"
                                fill="#E14847"></path>
                            </g>
                          </svg></span>
                      </a>

                      <a class="github-login" href="#">
                        <span tagname="span" class="ncicon  ncicon-bleed" aria-label="GitHub" size="24"><svg
                            class="github-login-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" width="1.8em" height="1.8em" aria-hidden="true"
                            href="https://github.com/login">
                            <path fill-rule="evenodd"
                              d="M12.048 2a9.913 9.913 0 00-6.511 2.44 10.308 10.308 0 00-3.407 6.171 10.436 10.436 0 001.323 6.954 10.079 10.079 0 005.422 4.418c.505.095.684-.226.684-.497v-1.744c-2.804.624-3.396-1.378-3.396-1.378a2.738 2.738 0 00-1.115-1.504c-.906-.63.074-.63.074-.63.317.046.62.165.886.348.266.184.488.426.648.71.137.252.32.475.541.655a2.128 2.128 0 001.582.463c.28-.033.551-.122.798-.262a2.198 2.198 0 01.616-1.372c-2.23-.258-4.572-1.14-4.572-5.035a4.013 4.013 0 011.03-2.75 3.813 3.813 0 01.098-2.713s.844-.277 2.76 1.05a9.303 9.303 0 015.028 0c1.917-1.327 2.755-1.05 2.755-1.05.37.85.413 1.811.123 2.693a4.014 4.014 0 011.029 2.75c0 3.94-2.348 4.803-4.584 5.036.24.246.425.542.543.868.118.326.166.674.14 1.02v2.814c0 .333.18.591.69.49a10.085 10.085 0 005.346-4.434 10.437 10.437 0 001.29-6.91 10.31 10.31 0 00-3.373-6.132A9.916 9.916 0 0012.048 2z"
                              clip-rule="evenodd"></path>
                          </svg></span>

                      </a>
                    </div>
                    <el-form-item>
                      <el-checkbox class-name="agreement" ref="buttonRef" v-model="loginForm.agreed" />
                      同意<a href="#">《用户协议》</a>和<a href="#">《隐私政策》</a>
                      <!-- <el-popover class="agreement-tip" :virtual-ref="buttonRef" ref="popoverRef" v-model:show="showAgreementTip"
                        placement="top-start" content="请阅读并勾选下方协议">
                      </el-popover> -->
                    </el-form-item>
                  </el-tab-pane>
                  <el-tab-pane label="密码登录">

                    <el-form-item label="邮箱/手机号码" prop="account">
                      <el-input v-model="loginForm.phone" placeholder="请输入邮箱/手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                      <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item class="form-footer">
                      <el-button type="primary" @click="handleSubmitLogin">登录</el-button>
                    </el-form-item>

                  </el-tab-pane>
                </el-tabs>
              </el-form>
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
  </el-container>
</template>
  
<script lang="ts" setup>
import { ref, reactive, nextTick, watch, unref, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from 'element-plus';
import Schema from 'async-validator';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import { FormItemContext } from 'element-plus';
import router from '@/router';

interface LoginForm {

  phone: string;
  email: string;
  code: string;
  password: string;
  agreed: false
}

const route = useRoute();

const store = useStore();
const sendCodeCountdown = ref(60);
const disableSendCode = ref(false);
const dialogLoginRegisterVisible = ref(false);
const activeTab = ref('register');
const currentRoute = route.path
const buttonRef = ref()
const userToken = computed(() => store.state.token);
const user = computed(() => store.state.user);
const rules = reactive({
  phone: [
    {
      required: true,
      message: '请输入手机号码',
      trigger: 'blur'
    },
    {
      pattern: /^1[3456789]\d{9}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur'
    }
  ],
  code: [
    { required: false, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^\d{6}$/, message: '验证码格式不正确', trigger: 'blur' }
  ],
  password: [
    { required: false, message: '请输入密码', trigger: 'blur' }
  ],
  agreed: [
    { required: true, message: '请同意注册协议和隐私政策', trigger: 'change' }
  ]
});

const loginForm = reactive<LoginForm>({
  phone: '',
  email: '',
  code: '',
  password: '',
  agreed: false
});


function handleClose(done: () => void) {
  // 执行一些逻辑，比如清除表单数据
  loginForm.phone = '';
  loginForm.email = '';
  loginForm.code = '';
  loginForm.password = '';
  // 调用 done 函数关闭对话框
  done();
}

function handleSendCode() {
  // 处理表单提交逻辑
  // 调用 /register 接口逻辑
  // 发送验证码逻辑

  axios.post('http://localhost:8080/user/sendCode', {
    phone: loginForm.phone, // 替换成您的表单数据main
  }).then((response: any) => {
    console.log(response.data.msg)
    if (response.data.code == 0) {
      ElMessage.error(response.data.msg)
    }
    if (response.data.code == 20000) {
      disableSendCode.value = true;
      let countdown = 60;
      const timer = setInterval(() => {
        countdown--;
        sendCodeCountdown.value = countdown;
        if (countdown <= 0) {
          clearInterval(timer);
          disableSendCode.value = false;
          sendCodeCountdown.value = 60;
        }
      }, 1000);
      ElMessage.success("短信发送成功！")
    }
    // 处理请求成功的逻辑
  }).catch((error: any) => {
    // 处理请求失败的逻辑
    ElMessage.error("出现错误，请联系管理员！")
  });
}


function handleSubmit() {
  // 处理表单提交逻辑
  // 调用 /register 接口逻辑
  if (!loginForm.agreed) { // 用户未勾选同意注册协议和隐私政策
    const checkboxEl = document.querySelector('.el-checkbox__inner') as HTMLElement;
    checkboxEl.classList.add('shake');
    setTimeout(() => {
      checkboxEl.classList.remove('shake');
    }, 500);
    return;
  }
  axios.post('http://localhost:8080/user/login1', {
    phone: loginForm.phone, // 替换成您的表单数据main
    code: loginForm.code
  }).then((response: any) => {
    console.log(response.data.msg)
    if (response.data.code == 0) {
      ElMessage.error(response.data.msg)
    }
    if (response.data.code == 20000) {
      dialogLoginRegisterVisible.value = false
      store.commit('token', response.data.data);

      localStorage.setItem('token', response.data.data);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.data}`;   
         console.log(localStorage.getItem('token'))
      window.location.reload(); // 刷新当前页面
      ElMessage.success(response.data.msg)
    }
    // 处理请求成功的逻辑
  }).catch((error: any) => {
    // 处理请求失败的逻辑
    ElMessage.error("出现错误，请联系管理员！")
  });
}
function handleSubmitLogin() {
  // 处理表单提交逻辑
  // 调用 /register 接口逻辑
  if (!loginForm.agreed) { // 用户未勾选同意注册协议和隐私政策
    console.log(loginForm.agreed)
    const checkboxEl = document.querySelector('.el-checkbox__input') as HTMLElement;
    checkboxEl.classList.add('shake');
    setTimeout(() => {
      checkboxEl.classList.remove('shake');
    }, 500);
    return;
  }
  axios.post('http://localhost:8080/user/login1', {
    username: "",
    phone: loginForm.phone, // 替换成您的表单数据main
    password: loginForm.password
  }).then((response: any) => {
    console.log(response.data.msg)
    if (response.data.code == 0) {
      ElMessage.error(response.data.data)
    }
    if (response.data.code == 20000) {
      dialogLoginRegisterVisible.value = false
      ElMessage.success(response.data.data)
    }
    // 处理请求成功的逻辑
  }).catch((error: any) => {
    // 处理请求失败的逻辑
    console.log(error)
  });
}
function handleLogout() {
  axios.post('http://localhost:8080/user/logout', {
    
  }).then((response: any) => {
    console.log(response.data.msg)
    if (response.data.code == 0) {
      ElMessage.error(response.data.data)
    }
    if (response.data.code == 20000) {
      dialogLoginRegisterVisible.value = false
      localStorage.removeItem("token")
      window.location.reload(); // 刷新当前页面
      // router.push({ path: '/' }); // 使用Vue Router的push方法跳转到home页面
      ElMessage.success(response.data.data)
    }
    // 处理请求成功的逻辑
  }).catch((error: any) => {
    // 处理请求失败的逻辑
    console.log(error)
  });
    };
  
function sendCodeText() {
  return disableSendCode.value ? `重新发送(${sendCodeCountdown.value})` : '发送验证码';
}


</script>

<style lang="less" scoped>
/* 导航栏样式 */
.navbar {

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
}

.el-menu-item:hover {
  color: #32ca99 !important;
  //background-color: rgba(40, 156, 118,0.3)!important;
  background-color: transparent !important;

}



.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 2px solid #32ca99 !important;
}

.el-menu-item.is-active>.router-link-exact-active/deep/ {
  color: #32ca99 !important;
}

.el-row {
  width: 100% !important;

}

.el-overlay-dialog {
  display: flex !important;
  overflow: hidden !important;
  border-radius: 80px !important;
  align-items: center;

}
.user-avatar {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 50px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.link {
  text-decoration: none !important;

}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #47e2b1;
  line-height: 58px;
  margin-left: 0px;
  float: left;
}

.logo-img {

  width: 120px;
  margin-left: 1px;
  margin-top: 0px;

}

.no-hover:hover {
  user-select: none;
}

.menu {
  margin-left: 20px !important;
  float: left;
  width: 300px;
  border-bottom: none !important;
}

.el-input__wrapper {
  border-radius: 10px !important;
  height: 38px;

}

.el-input__inner:focus {
  border-color: #47e2b1 !important;
}

.code-input {
  width: 200px;
}

.login-register-container {
  border-radius: 20px;

}

.el-dialog {
  border-radius: 40px !important;
  width: 350px !important;
  height: 440px;
}

.el-form-item__content {
  display: flex !important;
  flex-wrap: nowrap !important;
  align-items: center !important;
  justify-content: center;
}

.el-tabs__nav-wrap::after {
  background-color: transparent !important;
}

.el-form-item__content a {
  color: #46d2a6;
  cursor: pointer;
  text-decoration: none !important;
}

.menu-item-warpper {
  display: flex;
  align-items: center;
  height: 58px;
  box-sizing: border-box;
  float: right;

}

.register-btn {
  background-color: #46d2a6 !important;
  border-color: transparent !important;
  width: 160px;
  margin-top: 10px;
}

.register-btn:hover {
  background-color: #43c59c !important;

}

.qr-code-login {
  display: flex;
  text-align: center;
  padding-top: 50px;
}

.qr-code-login h3 {
  font-size: 16px;
  margin-bottom: 20px;
}

.qr-code-login img {
  max-width: 200px;
  max-height: 200px;
}

.login-register {
  padding: 50px;
}

.login-icons {
  display: flex;
  align-items: center;
  /* 使子元素垂直居中 */
  justify-content: space-evenly;
  margin-top: 25px;
  margin-bottom: 15px;
}

.qq-login-svg,
.github-login-svg {
  background-color: #ffffff;
  border-radius: 50%;
  padding: 5px;

  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);

}

.github-login {
  color: inherit;
  /* 设置颜色为继承 */
  text-decoration: none;
  /* 取消下划线 */
}

.agreement {
  justify-content: center !important;
}

.left {
  float: left;
}


.search-btn {
  color: #47e2b1 !important;
  margin-left: 10px;

}

.login-btn {
  background-color: #47e2b1 !important;
  border-radius: 10px !important;
  border-color: transparent !important;
}

.login-btn:hover {
  background-color: #43c59c !important;

}




/* 页脚样式 */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  height: 80px;
  padding: 0 20px;
}

.footer a {
  color: #fff;
  text-decoration: none;
}</style>