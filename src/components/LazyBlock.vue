<!--
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 11:15:05
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-13 10:47:30
 * @FilePath: \one-shop\src\components\LazyBlock.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    ref="lazyElement"
    :class="{
      'lazy-block': true,
      unload: isLoad,
    }"
  >
    <slot name="default" :toLoad="toLoad" v-if="isShow"></slot>
    <slot name="unload" v-else></slot>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import createDeplayFunc from "@/util/createDeplayFunc";
const deplayLoad = createDeplayFunc();

export default defineComponent({
  name: "LazyBlock",
  props: {
    load: {
      type: Boolean,
      default: true,
    },
    autoLoad: {
      type: Boolean,
      default: false,
    },
  },
  setup(prop, { emit }) {
    const isLoad = ref(
      Object.prototype.toString.call(prop.load) === "[object Boolean]"
        ? prop.load
        : true
    );
    const isShow = ref(false);
    const lazyElement = ref(null);

    const toLoad = () => {
      deplayLoad((...args) => {
        emit("success", ...args);
        isLoad.value = false;
      }, 150);
    };

    onMounted(() => {
      const eventFunc = () => {
        const top = lazyElement.value.offsetTop;
        window.scrollY >= top - window.innerHeight &&
          window.scrollY <= top + window.innerHeight &&
          (isShow.value = true) &&
          (window.removeEventListener("scroll", eventFunc) ||
          window.removeEventListener("resize", eventFunc) ||
          emit("show") ||
          prop.autoLoad
            ? toLoad()
            : void 0);
      };
      window.addEventListener("scroll", eventFunc);
      window.addEventListener("resize", eventFunc);
      onUnmounted(() => {
        window.removeEventListener("scroll", eventFunc);
        window.removeEventListener("resize", eventFunc);
      })
      eventFunc();
    });

    return {
      toLoad,
      isLoad,
      lazyElement,
      isShow,
    };
  },
});
</script>

<style lang="scss">
@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.lazy-block {
  width: 100%;
  height: 100%;
  animation: fade 0.3s ease;
}

.unload {
  animation: none;
}
</style>
