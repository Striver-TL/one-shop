<template>
  <div class="container-content">
    <div class="banner float-children">
      <div class="category"></div>
      <div class="slideshow">
        <ul class="slideshow-list">
          <transition name="fade">
            <li><a href=""><img src="@/static/ban1.jpg" alt=""></a></li>
          </transition>
        </ul>
        <div class="slidesohw-btns"></div>
        <div class="slideshow-sidebtn">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "IndexContent",
  setup() {},
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
    background: #B01D1D;
  }

  .slideshow {
    width: 740px;
    margin: 0 12px;

    a {
      display: block;
    }

    img {
      width: 100%;
      height: $banner-height;
    }
  }
}
</style>
