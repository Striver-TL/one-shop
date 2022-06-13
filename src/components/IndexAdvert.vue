<!--
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 11:15:05
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-13 11:04:01
 * @FilePath: \one-shop\src\components\IndexAdvert.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="advertisement">
    <LazyBlock :autoLoad="true">
      <template v-slot:default>
        <LazyImage :src="src"></LazyImage>
      </template>
    </LazyBlock>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LazyBlock from "@/components/LazyBlock.vue";
import LazyImage from "@/components/LazyImage.vue";
export default defineComponent({
  name: "IndexAdvert",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  components: {
    LazyBlock,
    LazyImage,
  },
});
</script>

<style lang="scss" scoped>
.advertisement {
  margin: 15px 0;
  height: 110px;

  .unload {
    background: #f9f9f9;
    & > * {
      opacity: 0;
    }
  }
}
</style>
