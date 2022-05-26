<template>
  <div class="login-content">
    <div class="login-form">
      <h2 class="register-title">一号店注册</h2>
      <div class="input">
        <input type="text" placeholder="手机号" />
      </div>
      <div class="valid">
        <div class="input">
          <input type="text" placeholder="手机号" />
        </div>
        <button class="login-btn">获取验证码</button>
      </div>
      <div class="input">
        <input type="password" placeholder="设置密码" />
      </div>
      <div class="input">
        <input type="password" placeholder="确认密码" />
      </div>
      <div
        class="form-other"
        style="margin: 20px 0 0; height: auto; line-height: 2"
      >
        <span>点击注册，表示您同意1号店</span>
        <a href="javascript:void(0)" style="color: rgb(0, 0, 238)"
          >《服务协议》</a
        >
      </div>
      <div>
        <button class="login-btn">同意协议并注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegisterPage",
  setup() {},
});
</script>

<style lang="scss" scoped>
.login-form {
  margin: 0 auto;

  .register-title {
    box-sizing: content-box;
    height: 50px;
    padding-top: 40px;
    text-align: center;
    font-size: 24px;
  }

  .input {
    input {
      padding: 0 1em;
    }
  }

  .valid {
    display: flex;
    flex-flow: row;
    justify-content: space-between;

    .input {
      flex: 0 0 190px;
      input {
        width: 100% !important;
      }
    }
    button {
      flex: 0 0 120px;
      background: #57565f !important;
      font-size: 12px !important;
      border-radius: 2px !important;
      transition: all 0.3s ease;

      &:hover {
        background: #444 !important;
      }
    }
  }
}
</style>
