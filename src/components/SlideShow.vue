<!--
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-14 23:40:09
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-15 00:01:02
 * @FilePath: \one-shop\src\components\SlideShow.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="slideshow">
    <slot name="slideshow-content" :left="left"></slot>
    <slot name="slideshow-sidebtn" :add="add" :sub="sub"></slot>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "SlideShow",
  props: {
    length: {
      type: Number,
      required: true,
    },
    showLength: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const left = ref(0);
    return {
      left,
      add() {
        left.value =
          (left.value + 1) * props.showLength + props.showLength > props.length
            ? (props.length - props.showLength) / props.showLength
            : left.value + 1;
      },
      sub() {
        left.value = left.value * props.showLength - props.showLength < 0
        ? 0
        : left.value - 1;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
