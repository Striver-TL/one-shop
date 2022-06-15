<template>
  <div class="login">
    <div class="header float-clear">
      <div class="container">
        <div class="left float-left">
          <div class="logo">
            <img src="@/static/loginlogo.jpg" alt="一号店" />
          </div>
        </div>
        <div class="right float-right float-clear">
          <div class="right-text float-left">
            <span>您好，欢迎观临一号店！</span>
            <RouterLink to="/login/login" v-if="!state.userinfo.phone"
              >请登录</RouterLink
            >
            <span class="username" v-else>{{ state.userinfo.phone }}</span>
          </div>
          <div class="right-select float-left">
            <div class="select-option">
              <img src="@/static/runbun.png" alt="帮助中心" />帮助中心
            </div>
            <div class="select-btn"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <keep-alive>
        <RouterView name="default"></RouterView>
      </keep-alive>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "LoginIndex",
  setup() {
    const { state } = useStore();
    return {
      state,
    };
  },
});
</script>

<style lang="scss">
/* 登录页面样式 */
.login {
  font-size: 12px;

  .container {
    width: 1200px;
  }

  /* 头部样式 */
  .header {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    /* 头部右侧样式 */
    .right {
      line-height: 2em;
      /* 右侧选择框样式 */
      .right-select {
        position: relative;
        padding: 0 20px 0 5px;
        border: 1px solid #ccc;
        margin-left: 2em;
        /* 选择框按钮样式 */
        .select-btn {
          position: absolute;
          right: 0;
          /* 垂直自适应居中 */
          top: 50%;
          transform: translateY(-50%);
          width: 15px;
          height: 15px;
          background: url("@/static/turnb.png") no-repeat 0;
        }
        img {
          vertical-align: middle;
        }
      }
    }
  }

  .login-content {
    /* form表单样式 */
    .login-form {
      $login-form-width: 330px;
      $login-input-height: 50px;

      box-sizing: content-box;
      width: $login-form-width;
      .input {
        border: 1px solid #ccc;

        input {
          display: block;
          width: $login-form-width;
          height: 100%;
          border: none;
          outline: none;
        }
      }

      .warning {
        border-color: #f33;

        input {
          color: #f33;
        }
      }

      .input,
      .login-btn,
      .form-other {
        box-sizing: content-box;
        width: 100%;
        height: $login-input-height;
        line-height: $login-input-height;
        margin: 10px 0;
      }
      .login-btn {
        display: block;
        width: 100%;
        height: $login-input-height;
        border: none;
        border-radius: 5px;
        background: #ff3c3c;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          background: #e83737;
        }

        &:disabled {
          background: #777;
          cursor: not-allowed;
        }

        .loading {
          display: block;
          width: 40px;
          height: 40px;
          background: url("@/static/loading.png") 0 no-repeat;
          background-size: cover;
          margin: 0 auto;
          animation: rotate 1s linear infinite;
        }
      }
      @keyframes rotate {
        0% {
          transform: rotateZ(0deg);
        }
        100% {
          transform: rotateZ(360deg);
        }
      }
      .form-other {
        color: #b1b1b1;
        input {
          margin: 0 0.5em;
          vertical-align: middle;
        }
        a {
          color: inherit;
        }
      }
    }
  }
}
</style>
