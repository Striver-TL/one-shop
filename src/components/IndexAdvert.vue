<template>
  <div class="advertisement">
    <LazyBlock @success="success">
      <template v-slot:default="slotProps">
        <LazyImage :src="src" @success="slotProps.toLoad()"></LazyImage>
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
  setup() {
    return {
      success() {
        console.log("ok")
      },
    };
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
