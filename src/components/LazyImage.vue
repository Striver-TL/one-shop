<template>
<div class="image">
    <img :src="src" alt="#" v-if="isLoad"/>
</div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "LazyImage",
  props: {
      src: {
          type: String,
          required: true
      }
  },
  setup(prop, { emit }) {
      const isLoad = ref(false)
    
      onMounted(() => {
        const image = new Image()
        image.src = prop.src
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

<style lang="scss" scoped>
.image {
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
