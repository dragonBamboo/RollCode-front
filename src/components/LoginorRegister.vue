<template>
  <div class="get-mobile" @touchmove.prevent>
      <div class="main">
          <div class="pt-20 pr-15 pl-15 pb-20">
              <input class="input mb-15" v-model="form.tel" placeholder="请输入手机号" type="number">
              <div class="box">
                  <input class="input" v-model="form.telVerificationCode" placeholder="请输入短信验证码" type="number">
                  <div class="el-button" @click="send">{{ countDown }}</div>
              </div>
          </div>
          <div class="btn" @click="sumbit">提交</div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'GetMobile',
  data() {
      return {
          form: {
              telVerificationCode: '',
              tel: '',
          },
          countDown: "发送验证码", // 倒计时
          bVerification: false // 节流
      }
  },
  methods: {
      async sumbit() {
          const { telVerificationCode, tel } = this.form
          if (!telVerificationCode || !tel) return console.log("请输入手机号和验证码");
          let { code, data } = await login({
              tel,
              telVerificationCode,
              isOffline: false
          });
          if (code === 200) {
              console.log('登录成功');
              this.$emit('sumbit', data.userInfo);
              this.$emit('update:dialog', false)
          }
      },
      async send() {
          if (!/^\d{11}$/.test(this.form.tel)) return console.log("请先输入正确的手机号");
          if (this.bVerification) return;
          this.bVerification = true;
          const { code } = await sendLoginMsgCode({
              tel: this.form.tel
          });
          if (code === 200) {
              console.log("发送验证码...");
          }
          let countDown = 59;
          const auth_time = setInterval(() => {
              this.countDown = countDown--;
              if (this.countDown <= 0) {
                  this.bVerification = false;
                  this.countDown = "发送验证码";
                  clearInterval(auth_time);
              }
          }, 1000);
      }
  }
}
</script>

<style lang='less' scoped>
.get-mobile {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  justify-content: center;
  align-items: center;

  .main {
      width: 280px;
      height: 178px;
      background: #FFFFFF;
      border-radius: 5px;

      .input {
          border: 1px solid #EBEBEF;
          border-radius: 5px;
          height: 40px;
          padding-left: 10px;
      }

      .el-button {
          margin-left: 10px;
          border-radius: 5px;
          background: #5F93FD;
          color: #fff;
          width: 140px;
          display: flex;
          justify-content: center;
          align-items: center;
      }

      .btn {
          height: 45px;
          color: #5F93FD;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid #EBEBEF;
      }
  }
}
</style>