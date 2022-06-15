<!--
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 11:15:05
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-13 17:21:17
 * @FilePath: \one-shop\src\pages\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <IndexHeader></IndexHeader>
  <RouterView name="default"></RouterView>
  <IndexFooter></IndexFooter>
</template>

<script>
import { defineComponent } from "vue";
import IndexHeader from "@/components/IndexHeader.vue";
import IndexFooter from "@/components/IndexFooter";

export default defineComponent({
  name: "IndexPage",
  setup() {},
  components: {
    IndexHeader,
    IndexFooter
  },
});
</script>

<style lang="scss"></style>
