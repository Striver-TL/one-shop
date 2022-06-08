<template>
  <div
    :class="{
      'lazy-block': true,
      unload: isLoad,
    }"
  >
    <slot name="default" :toLoad="toLoad"></slot>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LazyBlock",
  props: {
    load: {
      type: Boolean,
      required: false,
    }
  },
  setup(prop, { emit }) {
    const isLoad = ref(typeof prop.load === "boolean" ? prop.load : true);

    return {
      toLoad() {
        isLoad.value = false;
        emit("success");
      },
      isLoad,
    };
  },
});
</script>

<style lang="scss" scoped>
.lazy-block {
  width: 100%;
  height: 100%;
}
</style>
