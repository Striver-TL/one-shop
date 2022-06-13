<!--
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 11:15:05
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-11 13:36:53
 * @FilePath: \one-shop\src\pages\index\content.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container-content">
    <div class="banner float-children">
      <index-category></index-category>
      <index-banner></index-banner>
      <index-card class="float-right"></index-card>
    </div>
    <IndexHot></IndexHot>
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
export default defineComponent({
  components: {
    IndexFloorNav,
    IndexBanner,
    IndexCategory,
    IndexCard,
    IndexHot
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
