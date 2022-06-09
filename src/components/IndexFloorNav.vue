<template>
  <div class="floornav">
    <div class="floor-content">
        <div class="floor-top float-clear">
            <div class="floor-title float-left float-children">
                <span class="floor-title-back">1F</span>
                <h2>进口·生鲜</h2>
            </div>
            <div class="floor-link float-right">
                <ul class="float-children">
                    <li>
                        <RouterLink :to="{
                            path: '/index/product',
                            query: {
                                id: '999'
                            }
                        }">进口咖啡</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{
                            path: '/index/product',
                            query: {
                                id: '999'
                            }
                        }">进口酒</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{
                            path: '/index/product',
                            query: {
                                id: '999'
                            }
                        }">进口母婴</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{
                            path: '/index/product',
                            query: {
                                id: '999'
                            }
                        }">新鲜蔬菜</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{
                            path: '/index/product',
                            query: {
                                id: '999'
                            }
                        }">新鲜水果</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="float-chilren">
            <div class="floor-left">
                <div class="floor-banner">
                    <div class="banner-content">
                        <ul>
                            <transition name="floor">
                                <li>
                                    <RouterLink :to="{
                                        path: '/index/product',
                                        query: {
                                            id: '120'
                                        }
                                    }">
                                        <LazyImage :src="require(`@/static/fre_r.jpg`)"></LazyImage>
                                    </RouterLink>
                                </li>
                            </transition>
                        </ul>
                    </div>
                    <div class="banner-sidebtn">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LazyImage from "@/components/LazyImage";
export default defineComponent({
  name: "IndexFloorNav",
  setup() {},
  components: {
      LazyImage
  }
});
</script>

<style lang="scss" scoped>
$unload-color: #f9f9f9;
.floornav {
    background: $unload-color;
    $top-height: 50px;
    .floor-top {
        height: $top-height;
        overflow: hidden;
        border-bottom: 2px solid #ff4e00;

        .floor-title {
            height: $top-height;
            .floor-title-back {
                $back-width: 33px;
                width: $back-width;
                height: $top-height;
                margin-right: $top-height - $back-width;
                text-indent: 5px;
                line-height: $top-height + 8px;
                background: url("@/static/floor.png") 0 center no-repeat;
                color: #fff;
            }

            h2 {
                margin-top: 10px;
                font-size: 18px;
                line-height: 40px;
                font-weight: normal;
                color: #ff4e00;
            }
        }
    }

    .floor-link {
        $padding-top: 10px;
        padding-top: $padding-top;

        li {
            padding-right: 20px;
        }

        a {
            color: #777;
            font-size: 12px;
            line-height: $top-height - $padding-top;
            transition: all .2s ease;

            &:hover {
                text-decoration: underline;
                color: #ff4e00;
            }
        }
    }

    .floor-banner {
        $banner-width: 211px;
        $banner-height: 286px;
        width: $banner-width;
        height: $banner-height;
    }
}
</style>
