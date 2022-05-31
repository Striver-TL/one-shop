<template>
<div class="image">
    <img :src="imgData.src" alt="#" v-if="isLoad"/>
</div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "LazyImage",
  props: {
      imgData: {
          type: Object,
          required: true
      }
  },
  setup(prop, { emit }) {
      const isLoad = ref(false)
    
      onMounted(() => {
        const image = new Image()
        image.src = prop.imgData.src
        image.onload = () => {
            isLoad.value = true
            emit("success")
        }
        image.onerror = () => {
            isLoad.value = false
            emit("error")
        }
      })

      return {
          isLoad
      }
  }
});
</script>
