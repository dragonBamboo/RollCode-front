<template>
  <el-container>
    <!-- 导航栏 -->
    <el-header class="navbar">
      <el-row>
        <el-col :span="6">
          <!-- Logo -->
          <div class="logo">Your Logo</div>
        </el-col>
        <el-col :span="5">
          <!-- 导航栏 -->
          <el-menu class="menu" default-active="1" mode="horizontal">
            <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/questions">题库</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/">面试</router-link></el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="5">
          <!-- 搜索栏 -->
          <div class="menu-item-warpper">
            <el-input class="search-input" placeholder="搜索题目或面试相关信息" suffix-icon="el-icon-search"></el-input>
          </div>
        </el-col>
        <el-col :span="3">
          <!-- 登录按钮 -->
          <div class="menu-item-warpper">
            <el-button class="search-btn" round type="success" size="large">搜索</el-button>
          </div>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="4">
          <div class="menu-item-warpper">
            <el-button class="login-btn" round type="success" size="large"
              @click="dialogLoginRegisterVisible = true">登录/注册</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>


    <div>
      <el-dialog v-model="dialogLoginRegisterVisible" :before-close="handleClose" title="登录/注册">
        <div class="login-register-container">
          <div class="qr-code-login">
            <h3>扫码登录</h3>
            <el-image src="https://picsum.photos/200/200" fit="contain"></el-image>
          </div>
          <div class="form-container">
            <el-form :model="defalutLoginform" :rules="rules" ref="Loginform" label-width="0">
              <el-tabs v-model="activeTab">
                <el-tab-pane label="注册/登录" name="register">
                  <el-form-item label="手机号码" prop="phone">
                    <el-input v-model="defalutLoginform.phone" id="input__inner" placeholder="请输入手机号码" />
                  </el-form-item>
                  <el-form-item label="验证码" prop="code">
                    <el-input v-model="defalutLoginform.code" id="input__inner" class="code-input" placeholder="请输入验证码" />
                    <el-button class="send-code-button" :disabled="disableSendCode" @click="handleSendCode">{{
                      sendCodeText() }}</el-button>
                  </el-form-item>
                  <el-form-item class="form-footer">
                    <el-button type="primary" @click="handleSubmit">{{ activeTab === 'login' ? '登录' : '注册' }}</el-button>
                    <div class="switch-tab" @click="activeTab = activeTab === 'login' ? 'register' : 'login'">{{ activeTab
                      === 'login' ? '没有账号？点此注册' : '已有账号？点此登录' }}</div>
                  </el-form-item>
                </el-tab-pane>
                <el-tab-pane label="密码登录">

                  <el-form-item label="邮箱/手机号码" prop="account">
                    <el-input v-model="defalutLoginform.phone" id="input__inner" placeholder="请输入邮箱/手机号码"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password">
                    <el-input v-model="defalutLoginform.code" id="input__inner" type="password" placeholder="请输入密码"></el-input>
                  </el-form-item>
                  <el-form-item class="form-footer">
                    <el-button type="primary" @click="handleSubmit">登录</el-button>
                  </el-form-item>

                </el-tab-pane>
              </el-tabs>
            </el-form>

          </div>
        </div>
      </el-dialog>
      <el-button type="primary" @click="dialogLoginRegisterVisible = true">登录/注册</el-button>
    </div>

  </el-container>
</template>
  
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

interface Loginform {
  phone: string;
  code: string;
  email: string;
}

const activeIndex = ref(1);
const sendCodeCountdown = ref(60);
const disableSendCode = ref(false);
const dialogLoginRegisterVisible = ref(false);
const dialogVisible = ref(true);
const activeTab = ref('register');
const labelPosition = ref('right')
const rules = {
  phone: [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    {
      pattern: /^1[3456789]\d{9}$/,
      message: '手机号码格式不正确',
      trigger: 'blur'
    }
  ],
  code: [
    { required: false, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^\d{6}$/, message: '验证码格式不正确', trigger: 'blur' }
  ],
  account: [
    { required: true, message: '请输入邮箱/手机号码', trigger: 'blur' },
    {
      pattern: /^1[3456789]\d{9}$|^(\w-.)+@(\w-?)+(.\w{2,})+$/,
      message: '邮箱/手机号码格式不正确',
      trigger: 'blur'
    }
  ],
  password: [
    { required: false, message: '请输入密码', trigger: 'blur' }
  ]
};
const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
const defalutLoginform = reactive<Loginform>({
  phone: '',
  code: '',
  email: ''
});



function handleClose(done: () => void) {
  // 执行一些逻辑，比如清除表单数据
  defalutLoginform.phone = '';
  defalutLoginform.code = '';


  // 调用 done 函数关闭对话框
  done();
}

async function handleSendCode() {
  // 验证手机号码是否合法
  const phoneRule = rules.phone;
  const phone = defalutLoginform.phone;

  // 发送验证码逻辑
  disableSendCode.value = true;
  let countdown = 60;
  const timer = setInterval(() => {
    countdown--;
    sendCodeCountdown.value = countdown;
    if (countdown <= 0) {
      clearInterval(timer);
      disableSendCode.value = false;
      sendCodeCountdown.value = 1;
    }
  }, 1000);

  // 调用 /register 接口逻辑
  axios.post('http://localhost:8080/user/sendCode', {
    phone: defalutLoginform.phone, // 替换成您的表单数据main
  }).then((response: any) => {
    console.log(response.data)
    // 处理请求成功的逻辑
  }).catch((error: any) => {
    // 处理请求失败的逻辑
    console.log(error)
  });
}

function handleSubmit() {
  // 处理表单提交逻辑
  // 调用 /register 接口逻辑
  axios.post('http://localhost:8080/user/login', {
    phone: defalutLoginform.phone, // 替换成您的表单数据main
    code: defalutLoginform.code
  }).then((response: any) => {
    console.log(response.data)
    // 处理请求成功的逻辑
  }).catch((error: any) => {
    // 处理请求失败的逻辑
    console.log(error)
  });
}

function sendCodeText() {
  return disableSendCode.value ? `重新发送(${sendCodeCountdown.value})` : '发送验证码';
}

const route = useRoute();
</script>

<style lang="less">
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


.logo {
  font-size: 24px;
  font-weight: bold;
  color: #47e2b1;
  line-height: 58px;
}

.menu {
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
#input__inner:focus{
  border-color: #47e2b1 !important;
}
.menu-item-warpper {
  display: flex;
  align-items: center;
  height: 58px;
  box-sizing: border-box;
}

.search-btn {
  margin-left: 10px;
  background-color: #47e2b1 !important;
  border-radius: 10px !important;
}

.login-btn {
  background-color: #47e2b1 !important;
  border-radius: 10px !important;
}




/* 内容区域样式 */
.content {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
}

.content h2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
}



.login-register-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.qr-code-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 20px;
}

.qr-code-login h3 {
  margin-bottom: 20px;
  font-size: 20px;
}

.form-container {
  width: 50%;
  padding: 20px;

}

.form-footer {
  text-align: center;
  margin-top: 20px;
}

.switch-tab {
  color: #409eff;
  cursor: pointer;
}

.send-code-button {
  position: absolute;
  right: 0;
  color: #fff!important;
  height: 40px!important;
  background-color: #38daa7 !important;
  border-bottom-left-radius: 0px!important;
  border-top-left-radius: 0px!important;
  top: 0;
}

.el-dialog {
  border-radius: 30px !important;
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
}

.qr-code-login {
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

.send-code-btn {
  margin-left: 10px;
}
</style>