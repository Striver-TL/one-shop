<template>
  <IndexHeader></IndexHeader>
  <RouterView name="default"></RouterView>
  <div class="footer">尾部</div>
</template>

<script>
import { defineComponent } from "vue";
import IndexHeader from "@/components/IndexHeader.vue"

export default defineComponent({
  name: "IndexPage",
  setup() {},
  components: {
    IndexHeader
  }
});
</script>

<style lang="scss"></style>
