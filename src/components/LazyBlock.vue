<template>
  <div
    ref="lazyElement"
    :class="{
      'lazy-block': true,
      'unload': isLoad,
    }"
  >
    <slot name="default" :toLoad="toLoad" v-if="isShow"></slot>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "LazyBlock",
  props: {
    load: {
      type: Boolean,
      default: true
    },
  },
  setup(prop, { emit }) {
    const isLoad = ref(Object.prototype.toString.call(prop.load) === "[object Boolean]" ? prop.load : true);
    const isShow = ref(false);
    const lazyElement = ref(null);

    onMounted(() => {
      const eventFunc = () => {
        const top = lazyElement.value.offsetTop;
        window.scrollY >= top - window.innerHeight &&
          window.scrollY <= top + window.innerHeight &&
          (isShow.value = true) &&
          (window.removeEventListener("scroll", eventFunc) || emit("show"));
      };
      window.addEventListener("scroll", eventFunc);
      eventFunc();
    });

    return {
      toLoad() {
        setTimeout(() => {
          isLoad.value = false;
          emit("success");
        }, 1000);
      },
      isLoad,
      lazyElement,
      isShow,
    };
  },
});
</script>

<style lang="scss">
.lazy-block {
  width: 100%;
  height: 100%;
}
</style>
