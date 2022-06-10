<template>
  <div class="slideshow" @mouseenter="stopPlay" @mouseleave="startPlay">
    <LazyBlock @success="startPlay" @show="getData">
      <template v-slot:default="slotProps">
        <ul class="slideshow-list">
          <transition name="fade" v-for="(item, index) in banners" :key="index">
            <li v-show="showIndex === index">
              <router-link
                :to="{
                  name: 'indexProduct',
                  query: {
                    id: item.id,
                  },
                }"
              >
                <lazy-image
                  :src="item.src"
                  @success="canLoad(slotProps.toLoad)"
                />
              </router-link>
            </li>
          </transition>
        </ul>
        <div class="slideshow-btns">
          <span
            :class="{
              checked: showIndex === index,
            }"
            v-for="(item, index) in banners"
            :key="index"
            @mouseenter="showIndex = index"
            >{{ index + 1 }}</span
          >
        </div>
        <div class="slideshow-sidebtn">
          <span class="sidebtn-left" @click="toChange(-1)"></span>
          <span class="sidebtn-right" @click="toChange(1)"></span>
        </div>
      </template>
    </LazyBlock>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { sendRequest } from "@/util/sendRequest";
import createAntiShake from "@/util/createAntiShake";
import LazyImage from "@/components/LazyImage";
import LazyBlock from "@/components/LazyBlock";

export default defineComponent({
  name: "IndexBanner",
  setup() {
    const banners = reactive([]);
    const showIndex = ref(0);

    // 防抖跳转
    const toChange = createAntiShake((num) => {
      // 三目运算符
      // 首先判断num正负
      // 正数边界：banners.length - 1
      // 负数边界：0
      num > 0
        ? showIndex.value < banners.length - 1
          ? (showIndex.value += num)
          : (showIndex.value = 0)
        : showIndex.value > 0
        ? (showIndex.value += num)
        : (showIndex.value = banners.length - 1);
    }, 800);

    let timer = null;
    // 自动轮播
    const startPlay = () => {
      if (timer) return;
      timer = setInterval(toChange, 3000, 1);
    };

    // 停止自动轮播
    const stopPlay = () => {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    };

    // 已完成加载
    const loadCount = ref(0);
    const canLoad = (callback) => {
      (loadCount.value += 1) >= banners.length && callback();
    };

    const getData = () => {
      sendRequest({
        url: "getBanner",
        method: "POST",
      }).then((data) => {
        data.forEach((e) => {
          e.src = require(`@/static/${e.src}`);
        });
        banners.push(...data);
      });
    };

    return {
      showIndex,
      banners,
      toChange,
      startPlay,
      stopPlay,
      canLoad,
      loadCount,
      getData,
    };
  },
  components: {
    LazyImage,
    LazyBlock,
  },
});
</script>

<style lang="scss" scoped>
$banner-height: 400px;

.slideshow {
  width: 740px;
  margin: 0 12px;
  position: relative;

  .unload {
    background: #f4f4f4;

    & > * {
      display: none;
    }
  }

  .slideshow-list {
    li {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }

    a {
      display: block;
    }

    .image {
      width: 100%;
      height: $banner-height;
    }

    .fade-leave-active,
    .fade-enter-active {
      transition: opacity 0.8s ease;
    }

    .fade-leave-from,
    .fade-enter-to {
      opacity: 1;
    }

    .fade-leave-to,
    .fade-enter-from {
      opacity: 0;
    }
  }

  .slideshow-btns {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 20px;
    text-align: center;

    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: #ccc0b3;
      border-radius: 10px;
      margin: 0 4px;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      cursor: pointer;
    }

    span.checked {
      background: #fff;
    }
  }

  .slideshow-sidebtn {
    & > span {
      display: block;
      position: absolute;
      top: 50%;
      width: 32px;
      height: 60px;
      margin-top: -30px;
      background-position: 0;
      background-repeat: no-repeat;
      background-size: cover;
      transition: background 0.3s ease;
    }

    & > span:hover {
      background-color: rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }

    .sidebtn-left {
      left: 0;
      background-image: url("@/static/b_left.png");
    }

    .sidebtn-right {
      right: 0;
      background-image: url("@/static/b_right.png");
    }
  }
}
</style>
