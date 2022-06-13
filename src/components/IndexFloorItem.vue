<template>
  <LazyBlock @show="$emit('show')" :autoLoad="true">
    <template v-slot:default>
      <div class="floor-content" v-if="floorData">
        <div class="floor-top float-clear">
          <div class="floor-title float-left float-children">
            <span class="floor-title-back">{{ floorData.id }}F</span>
            <h2>{{ floorData.title }}</h2>
          </div>
          <div class="floor-link float-right">
            <ul class="float-children">
              <li v-for="(text, index) in floorData.toplink" :key="index">
                <RouterLink
                  :to="{
                    path: '/index/product',
                    query: {
                      id: '999',
                    },
                  }"
                  >{{ text }}</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="float-children">
          <div class="floor-left">
            <div class="floor-banner">
              <div class="banner-content">
                <ul>
                  <transition
                    name="floor"
                    v-for="(banner, index) in floorData.banners"
                    :key="index"
                  >
                    <li>
                      <RouterLink
                        :to="{
                          path: '/index/product',
                          query: {
                            id: banner.id,
                          },
                        }"
                      >
                        <LazyImage
                          :src="require(`@/static/${banner.src}`)"
                        ></LazyImage>
                      </RouterLink>
                    </li>
                  </transition>
                </ul>
              </div>
              <div class="banner-sidebtn" v-if="floorData.banners.length > 1">
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="floor-linktool">
              <div class="linktool-link">
                <ul class="float-children">
                  <li v-for="(text, index) in floorData.toollink" :key="index">
                    <RouterLink to="/index/index">{{ text }}</RouterLink>
                  </li>
                </ul>
              </div>
              <div class="linktool-line">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div class="floor-center">
            <ul class="float-children">
              <li v-for="product in floorData.products" :key="product.id">
                <RouterLink
                  :to="{
                    path: '/index/product',
                    query: {
                      id: product.id,
                    },
                  }"
                >
                  <span class="product-name">{{ product.name }}</span>
                  <span class="product-price">{{
                    product.price.toFixed(2)
                  }}</span>
                  <LazyImage
                    :src="require(`@/static/${product.src}`)"
                  ></LazyImage>
                </RouterLink>
              </li>
            </ul>
          </div>
          <div class="floor-right">
            <div v-for="item in floorData.rightlink" :key="item.id">
              <RouterLink
                :to="{
                  path: '/index/product',
                  query: {
                    id: item.id,
                  },
                }"
              >
                <LazyImage :src="require(`@/static/${item.src}`)"></LazyImage>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </template>
  </LazyBlock>
</template>

<script>
import { defineComponent } from "vue";
import LazyImage from "@/components/LazyImage";
import LazyBlock from "@/components/LazyBlock";
export default defineComponent({
  name: "IndexFloorItem",
  props: {
    floorData: {
      type: Object,
      default: null,
    },
  },
  components: {
    LazyBlock,
    LazyImage,
  },
});
</script>

<style lang="scss">
$unload-color: #f1f1f1;

.unload {
  .floor-linktool {
    background-color: $unload-color !important;
  }

  .floor-top {
    border-bottom: 10px solid #fff !important;
  }

  .floor-right {
    div {
      width: 260px;
      margin: 10px 0;
    }
  }

  .floor-top,
  .floor-banner,
  .floor-linktool ul,
  .floor-linktool .linktool-line,
  .product-name,
  .product-price,
  .floor-center a .image,
  .floor-right div {
    font-size: 0 !important;
    background-color: $unload-color !important;
    & > * {
      visibility: hidden;
    }
  }
}

$top-height: 50px;
.floor-content {
  margin-top: 10px;
}

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
    transition: all 0.2s ease;

    &:hover {
      text-decoration: underline;
      color: #ff4e00;
    }
  }
}

.floor-left {
  $left-width: 211px;
  width: $left-width;
  .floor-banner {
    $banner-height: 285px;
    height: $banner-height;
  }

  .floor-linktool {
    $link-height: 30px;
    position: relative;
    height: 155px;
    border-width: 11px 0 24px;
    border-style: solid;
    border-color: transparent;
    background: #e4f7ec;

    .linktool-link {
      li {
        height: $link-height;
        line-height: $link-height;
        padding: 0 12px 0 20px;
      }

      a {
        color: #999;
        font-size: 12px;
        transition: all 0.2s ease;

        &:hover {
          color: #ff4e00;
        }
      }
    }

    .linktool-line {
      span {
        position: absolute;
        left: 0;
        display: block;
        width: 100%;
        height: 0;
        border-bottom: 1px dotted #999;
      }

      span:first-child {
        top: $link-height - 1;
      }

      span:nth-child(2) {
        top: $link-height * 2 - 1;
      }

      span:nth-child(3) {
        top: $link-height * 3 - 1;
      }

      span:last-child {
        top: $link-height * 4 - 1;
      }
    }
  }
}

.lazy-block:not(:first-of-type) .floor-content .floor-linktool {
  background: #feecea;
}

.floor-center {
  $product-width: 243px;
  $product-height: 221px;
  width: $product-width * 3;
  height: 440px;
  overflow: hidden;

  li {
    width: $product-width;
    height: $product-height;
    overflow: hidden;

    &:nth-child(-n + 3) > a {
      border-bottom: 1px solid #eaeaea;
    }

    a {
      &,
      span {
        display: block;
      }
      border-left: 1px solid #eaeaea;
      height: 100%;
      text-align: center;
      overflow: hidden;
      .image {
        transition: opacity 0.3s ease;
      }

      &:hover {
        .product-name {
          text-decoration: underline;
          color: #ff4e00;
        }
        .image {
          opacity: 0.8;
        }
      }

      .product-name {
        $product-name-height: 28px;
        height: $product-name-height;
        line-height: $product-name-height;
        margin: 19px 10px 0;
        font-size: 14px;
        color: #333;
        transition: color 0.3s ease;
      }

      .product-price {
        $product-name-height: 24px;
        height: $product-name-height;
        line-height: $product-name-height;
        margin: 8px 20px;
        font-size: 16px;
        color: #ff4e00;

        &::before {
          content: "￥";
          font-weight: bold;
        }
      }

      .image {
        width: 185px;
        height: 155px;
        margin: 0 auto;
      }
    }
  }
}

.floor-right {
  div {
    height: 220px;
    overflow: hidden;
  }
}
</style>
