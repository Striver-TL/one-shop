<template>
  <div class="wrap">
    <RouterView name="default"></RouterView>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { sendRequest } from "@/util/sendRequest";
import { onMounted } from "vue";

export default {
  name: "App",
  beforeCreate() {
    console.log(
      "%c移动2032 滕龙",
      "color: #43bb88;font-size: 70px;font-weight: light;font-style: italic;font-family: '华文行楷'"
    );
  },
  setup() {
    const store = useStore();
    console.time();
    onMounted(() => {
      sendRequest({
        url: "toLogin?cookieLogin=1",
        method: "POST",
        "Content-Type": "application/json",
      }).then((data) => {
        if (!data.err) {
          store.commit("setUserInfo", data.data);
        }
      });
      console.timeEnd();
    });
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  color: rgb(0, 0, 238);
  text-decoration: none;
}

ul,
li {
  list-style: none;
}

button,
input {
  outline: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

.float-left,
.float-children > * {
  float: left;
}

.float-right {
  float: right;
}

.float-clear::after,
.float-children::after {
  content: "";
  display: block;
  width: 0;
  line-height: 0;
  visibility: hidden;
  clear: both;
}

.container {
  width: 1300px;
  margin: 0 auto;
}

.container-content {
  width: 1200px;
  margin: 0 auto;
}

.text-middle {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.unload {
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    );
    animation: unload 2s ease infinite;
    z-index: 3;
  }
}

@keyframes unload {
  0% {
    left: -40%;
  }
  100% {
    left: 100%;
  }
}

.username {
  color: #f33;
}
</style>
