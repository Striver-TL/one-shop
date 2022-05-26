<template>
  <div class="header">头部</div>
  <RouterView name="default"></RouterView>
  <div class="footer">尾部</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {},
});
</script>

<style lang="scss"></style>
