<template>
  <div class="container-content">
    <div class="banner float-children">
      <index-category></index-category>
      <index-banner></index-banner>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import IndexBanner from "@/components/IndexBanner.vue";
import IndexCategory from "@/components/IndexCategory.vue";

export default defineComponent({
  components: { IndexBanner, IndexCategory },
  name: "IndexContent",
});
</script>

<style lang="scss" scoped>
$banner-height: 400px;

.banner {
  height: $banner-height;

  & > * {
    height: 100%;
  }
  .category {
    width: 210px;
    background: #b01d1d;
  }
}
</style>
