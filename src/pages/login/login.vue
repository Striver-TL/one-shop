<template>
  <div class="login-content">
    <div class="container float-clear">
      <div class="float-right">
        <div class="login-form">
          <div class="login-title float-clear">
            <h4 class="float-left">一号店用户登录</h4>
            <RouterLink to="/login/register" class="float-right"
              >注册账号</RouterLink
            >
          </div>
          <div class="input user-input float-clear">
            <input
              type="text"
              name="username"
              class="float-right"
              placeholder="邮箱/手机/用户名"
            />
          </div>
          <div class="input psd-input float-clear">
            <input
              type="password"
              name="password"
              class="float-right"
              placeholder="密码"
            />
          </div>
          <div
            class="form-other float-clear"
            style="margin: 0; height: auto; line-height: 2"
          >
            <div class="float-left">
              <label style="cursor: pointer">
                <input type="checkbox" name="autologin" />
                <span>自动登录</span>
              </label>
            </div>
            <div class="float-right">
              <a href="javascript:void(0)">忘记密码？</a>
            </div>
          </div>
          <div>
            <button class="login-btn">登录</button>
          </div>
          <div><span>更多合作网站账号登录</span></div>
          <div class="form-other float-clear">
            <div class="friendlink float-left">
              <a href="javascript:void(0)" class="qq"></a>
              <a href="javascript:void(0)" class="sina"></a>
              <a href="javascript:void(0)" class="alipay"></a>
              <a href="javascript:void(0)" class="wx"></a>
            </div>
            <div class="float-right">
              <a href="javascript:void(0)">
                <span>更多合作网站</span>
                <img
                  src="@/static/turnb.png"
                  alt="trunb"
                  style="vertical-align: middle"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",
  setup() {},
});
</script>

<style lang="scss" scoped>
/* 登录页面样式 */
.login-content {
  background: #fcfcfc;
  /* 缩进距离 */
  .container {
    padding: 30px 112px;
    background: url("@/static/loadimg.jpg") 112px 30px no-repeat;
  }

  /* form表单样式 */
  .login-form {
    $login-input-height: 50px;
    $login-form-width: 330px;
    padding: 50px 0 50px 100px;
    background: #fcfcfc;

    .input {
      $login-icon-width: 60px;
      input {
        width: $login-form-width - $login-icon-width !important;
      }

      &::before {
        content: "";
        float: left;
        display: block;
        width: $login-icon-width;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
      }

      &.user-input::before {
        background-image: url("@/static/userHead.png");
      }
      &.psd-input::before {
        background-image: url("@/static/lock.png");
      }
    }

    .friendlink {
      $friendlink-width: 35px;
      font-size: 0;

      a {
        display: inline-block;
        width: $friendlink-width;
        height: $friendlink-width;
        margin: ($login-input-height - $friendlink-width) / 2 20px;
        margin-left: 0;
        background-size: $friendlink-width $friendlink-width;
        background-position: center;
        background-repeat: no-repeat;
        transition: background 0.2s ease;
      }

      .qq {
        background-image: url("@/static/qqf.png");
        &:hover {
          background-image: url("@/static/qqt.png");
        }
      }

      .wx {
        background-image: url("@/static/wxf.png");
        &:hover {
          background-image: url("@/static/wxt.png");
          background-position: 1px 0;
        }
      }

      .sina {
        background-image: url("@/static/wbf.png");
        &:hover {
          background-image: url("@/static/wbt.png");
        }
      }

      .alipay {
        background-image: url("@/static/zhif.png");
        &:hover {
          background-image: url("@/static/zhit.png");
        }
      }
    }
  }
}
</style>
