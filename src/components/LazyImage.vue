<!--
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 11:15:05
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-13 10:56:45
 * @FilePath: \one-shop\src\components\LazyImage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="image">
    <img :src="src" alt="#" v-if="isLoad" />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import createDeplayFunc from "@/util/createDeplayFunc";

const deplayFunc = createDeplayFunc(true);

export default defineComponent({
  name: "LazyImage",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  setup(prop, { emit }) {
    const isLoad = ref(false);

    onMounted(() => {
      const image = new Image();
      deplayFunc(() => {
        image.src = prop.src;
        image.onload = () => {
          isLoad.value = true;
          emit("success");
        };
        image.onerror = () => {
          isLoad.value = false;
          emit("error");
        };
      }, 30);
    });

    return {
      isLoad,
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
.unload {
  .image {
    img {
      display: none;
    }
  }
}

.image {
  background: #f1f1f1;
  img {
    width: 100%;
    height: 100%;
    animation: fade 0.3s ease;
  }
}
</style>
