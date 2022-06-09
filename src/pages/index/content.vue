<template>
  <div class="container-content">
    <div class="banner float-children">
      <index-category></index-category>
      <index-banner></index-banner>
      <index-card class="float-right"></index-card>
    </div>
    <IndexHot></IndexHot>
    <IndexAdvert :src="require(`@/static/mban_2.jpg`)"></IndexAdvert>
    <IndexFloorNav></IndexFloorNav>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import IndexBanner from "@/components/IndexBanner.vue";
import IndexCategory from "@/components/IndexCategory.vue";
import IndexCard from "@/components/IndexCard";
import IndexHot from "@/components/IndexHot";
import IndexFloorNav from "@/components/IndexFloorNav.vue";
import IndexAdvert from "@/components/IndexAdvert.vue";
export default defineComponent({
  components: {
    IndexFloorNav,
    IndexBanner,
    IndexCategory,
    IndexCard,
    IndexHot,
    IndexAdvert
  },
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
