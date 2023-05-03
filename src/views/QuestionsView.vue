<template>
  
  <div class="home">
    <!-- 登录/注册对话框 -->
    <el-dialog v-model="dialogLoginRegisterVisible" title="登录/注册" width="600px">
      <div class="qr-login">
        <img src="path/to/your/qr-code.png" alt="二维码" />
        <p>扫码登录</p>
      </div>
      <div class="tabs-wrapper">
        <el-tabs >
          <el-tab-pane label="注册登录" name="register">
            <el-form ref="registerForm" :model="registerForm" :rules="rules">
              <el-form-item label="手机号码" prop="phone">
                <el-input v-model="registerForm.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="verificationCode">
                <el-input v-model="registerForm.verificationCode" placeholder="请输入验证码"></el-input>
                <el-button @click="sendVerificationCode">发送验证码</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="register">注册/登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="密码登录" name="password">
            <el-form ref="passwordForm" :model="passwordForm">
              <el-form-item label="邮箱/手机号">
                <el-input v-model="passwordForm.emailOrPhone" placeholder="请输入邮箱/手机号"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="passwordForm.password" type="password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-dialog>
</div>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default {
  components: {
  },
  data() {
    return {
      activeIndex: 1,
      //loginDialogVisible: false, // 登录/注册对话框是否可见
      loginForm: { // 登录表单数据
        username: '',
        password: '',
      },
    }
  },
  methods: {
    showLoginDialog() {
      //this.loginDialogVisible = false; // 显示登录/注册对话框
    }
  }
};

</script>
