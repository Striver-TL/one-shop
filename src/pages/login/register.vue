<!--
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 11:15:05
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-12 16:01:08
 * @FilePath: \one-shop\src\pages\login\register.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-content">
    <div class="login-form">
      <h2 class="register-title">一号店注册</h2>
      <div
        :class="{
          input: true,
          warning: warn.phone.warn,
        }"
      >
        <input
          type="text"
          placeholder="手机号"
          v-model="phone"
          @blur="validFunc.phone"
          @input="warn.phone.warn = false"
          name="phone"
          autocomplete="off"
        />
        <span v-show="warn.phone.warn">{{ warn.phone.message }}</span>
      </div>
      <div class="valid">
        <div
          :class="{
            input: true,
            warning: warn.code.warn,
          }"
        >
          <input
            type="text"
            placeholder="验证码"
            v-model="code"
            @blur="validFunc.code"
            @input="warn.code.warn = false"
            name="code"
            autocomplete="off"
          />
          <span v-show="warn.code.warn">{{ warn.code.message }}</span>
        </div>
        <button class="login-btn">获取验证码</button>
      </div>
      <div
        :class="{
          input: true,
          warning: warn.password.warn,
        }"
      >
        <input
          type="password"
          placeholder="设置密码"
          v-model="password"
          @blur="validFunc.password"
          @input="warn.password.warn = false"
          name="password"
          autocomplete="new-password"
        />
        <span v-show="warn.password.warn">{{ warn.password.message }}</span>
      </div>
      <div
        :class="{
          input: true,
          warning: warn.confirmPassword.warn,
        }"
      >
        <input
          type="password"
          placeholder="确认密码"
          v-model="confirmPassword"
          @blur="validFunc.confirmPassword"
          @input="warn.confirmPassword.warn = false"
          name="confirmPassword"
          autocomplete="new-password"
        />
        <span v-show="warn.confirmPassword.warn">{{
          warn.confirmPassword.message
        }}</span>
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
        <button class="login-btn" @click="toRegister" :disabled="isRegister">
          <span v-if="!isRegister">同意协议并注册</span>
          <span v-else class="loading"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { sendRequest } from "@/util/sendRequest";
import { defineComponent, ref, reactive } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "RegisterPage",
  setup() {
    const router = useRouter();

    const isRegister = ref(false);

    const info = {
      phone: ref(""),
      code: ref(""),
      password: ref(""),
      confirmPassword: ref(""),
    };

    const warn = reactive({
      phone: {
        warn: false,
        message: "",
      },
      code: {
        warn: false,
        message: "",
      },
      password: {
        warn: false,
        message: "",
      },
      confirmPassword: {
        warn: false,
        message: "",
      },
    });

    const validFunc = {
      phone() {
        const phone = info.phone.value;
        const warnPhone = warn.phone;
        if (!phone.length) {
          warnPhone.warn = true;
          warnPhone.message = "手机号不能为空";
        } else if (!/^[1][3,4,5,6,7,8,9]\d{9}$/.test(phone)) {
          warnPhone.warn = true;
          warnPhone.message = "手机号格式不正确";
        } else {
          warnPhone.warn = false;
          return true;
        }
      },
      code() {
        const code = info.code.value;
        const warnCode = warn.code;
        if (!code.length) {
          warnCode.warn = true;
          warnCode.message = "验证码不能为空";
        } else {
          warnCode.warn = false;
          return true;
        }
      },
      password() {
        const password = info.password.value;
        const warnPassword = warn.password;
        if (!password.length) {
          warnPassword.warn = true;
          warnPassword.message = "密码不能为空";
        } else if (password.length < 8 || password.length > 16) {
          warnPassword.wran = true;
          warnPassword.message = "密码长度应在8-16位";
        } else if (
          !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!%@#$^*()\-=+[\]{}\\|:;"',.?/])[\w`~!%+@#$^*[\]()\-={}\\|:;"',.?/]{8,16}/g.test(
            password
          )
        ) {
          warnPassword.wran = true;
          warnPassword.message = "密码格式不正确";
        } else {
          warnPassword.warn = false;
          return true;
        }
      },
      confirmPassword() {
        const confirmPassword = info.confirmPassword.value;
        const warnConfirmPassword = warn.confirmPassword;
        if (confirmPassword !== info.password.value) {
          warnConfirmPassword.warn = true;
          warnConfirmPassword.message = "两次密码输入不一致";
        } else {
          warnConfirmPassword.warn = false;
          return true;
        }
      },
    };

    return {
      ...info,
      warn,
      validFunc,
      isRegister,
      toRegister() {
        isRegister.value = true;
        let result = true;
        for (let key in validFunc) {
          if (!validFunc[key]()) result = false;
        }
        if (!result) return;

        const userInfo = {
          phone: info.phone.value,
          password: info.password.value,
        };
        sendRequest({
          url: `toRegister?phone=${userInfo.phone}&password=${userInfo.password}`,
          method: "POST",
          "Content-Type": "application/json",
        }).then((result) => {
          setTimeout(() => {
            if (result.err) {
              const warnInput = warn[result.err["type"]];
              warnInput.warn = true;
              warnInput.message = result.err.message;
              return;
            }
            router.push("/login");
          }, 500);
        });
      },
    };
  },
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
    position: relative;

    input {
      padding: 0 1em;
    }

    span {
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      width: 15em;
      color: #f33;
      font-size: 14px;
      padding-left: 1rem;
      letter-spacing: 3px;
    }
  }

  .valid {
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: space-between;

    .input {
      position: static;
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
