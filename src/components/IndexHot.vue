<template>
  <div class="hot">
    <LazyBlock
      :load="products.length > loadCount"
      @show="getData"
      class="float-clear"
    >
      <template v-slot:default="slotProps">
        <div class="left-product float-left" v-if="leftProduct">
          <router-link
            :to="{
              path: '/index/product',
              query: {
                id: leftProduct.id,
              },
            }"
          >
            <lazy-image
              :src="leftProduct.src"
              @success="loadImage(slotProps.toLoad)"
            ></lazy-image>
            <span class="float-children">
              <span class="hot-price">{{ leftProduct.price.toFixed(2) }}</span>
              <span class="hot-label">{{ leftProduct.label }}</span>
            </span>
          </router-link>
        </div>
        <div class="hot-list float-right">
          <SlideShow :length="products.length" :showLength="4">
            <template v-slot:slideshow-content="slideProps">
              <ul
                v-if="products.length"
                :style="{
                  transform: `translateX(-${slideProps.left * 100}%)`,
                }"
              >
                <li v-for="(item, index) in products" :key="index">
                  <router-link
                    :to="{
                      path: '/index/product',
                      query: {
                        id: item.id,
                      },
                    }"
                  >
                    <LazyImage
                      :src="item.src"
                      @success="loadImage(slotProps.toLoad)"
                    ></LazyImage>
                    <span class="hot-name">{{ item.name }}</span>
                    <span class="hot-desc">{{ item.desc }}</span>
                    <span>
                      <span class="hot-price">{{ item.price }}</span>
                      <span class="hot-label">{{ item.label }}</span>
                    </span>
                  </router-link>
                </li>
              </ul>
            </template>
            <template v-slot:slideshow-sidebtn="slotProps">
              <div class="hot-sidebtn">
                <span class="hot-leftbtn" @click="slotProps.sub()"></span>
                <span class="hot-rightbtn" @click="slotProps.add()"></span>
              </div>
            </template>
          </SlideShow>
        </div>
      </template>
    </LazyBlock>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { sendRequest } from "@/util/sendRequest";
import LazyBlock from "@/components/LazyBlock";
import LazyImage from "@/components/LazyImage";
import SlideShow from "@/components/SlideShow";

export default defineComponent({
  name: "IndexHot",
  setup() {
    const products = reactive([]);
    const leftProduct = ref(undefined);
    const loadCount = ref(-Infinity);
    const loadImage = (callback) => {
      (loadCount.value += 1) >= products.length &&
        Object.prototype.toString.call(callback) === "[object Function]" &&
        callback();
    };
    const getData = () => {
      sendRequest({
        url: "getHot",
        method: "POST",
      }).then((data) => {
        data.forEach((e) => {
          e.src = require(`@/static/${e.src}`);
        });
        loadCount.value = 0;
        leftProduct.value = data.splice(0, 1)[0];
        products.push(...data);
      });
    };

    return {
      products,
      leftProduct,
      loadCount,
      loadImage,
      getData,
    };
  },
  components: {
    LazyImage,
    LazyBlock,
    SlideShow,
  },
});
</script>

<style lang="scss" scoped>
$hot-border-color: #eaeaea;

.hot {
  height: 280px;
  padding: 20px 0;
  .unload {
    .image > * {
      opacity: 0 !important;
    }

    .left-product {
      background: #f9f9f9;
      & > * {
        visibility: hidden;
      }
    }

    li > * {
      padding: 0 20px;
      border: none !important;

      & > * *,
      & *::after,
      & *::before,
      &::after,
      &::before {
        visibility: hidden;
      }

      .image,
      & > span {
        font-size: 0 !important;
        background: #f9f9f9;
      }
    }

    .hot-sidebtn {
      display: none;
    }
  }

  .left-product {
    background: #f9f9f9;
    width: 210px;
    height: 240px;

    a {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      background: #d8eefc;
      padding-top: 5px;

      .image {
        width: 188px;
        height: 188px;
      }

      span {
        display: block;
      }

      $span-height: 20px;

      & > span {
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
        width: 100px;
        height: $span-height;

        .hot-price {
          width: 60px;
          height: 100%;
          line-height: $span-height;
          background: orangered;
          color: #fff;
          text-align: center;
          font-size: 14px;

          &::before {
            content: "￥";
            font-size: 12px;
          }
        }

        .hot-label {
          width: 40px;
          text-align: right;
          font-size: 12px;
          line-height: $span-height;
          color: orangered;
        }
      }
    }
  }

  .hot-list {
    position: relative;
    width: 979px;
    overflow: hidden;

    ul {
      display: flex;
      flex-flow: row nowrap;
      justify-content: left;
      transition: transform .5s ease;
    }

    li {
      flex: 0 0 245.5px;
      margin-right: -1px;

      & > a,
      & > * > span {
        display: block;
        text-align: center;
      }

      a {
        position: relative;
        border: 1px solid #eaeaea;
        transition: border 0.3s ease;

        &::after {
          content: "热门";
          position: absolute;
          top: 10px;
          left: 10px;
          display: block;
          width: 40px;
          height: 40px;
          line-height: 40px;
          background: orangered;
          border-radius: 20px;
          color: #fff;
          font-size: 14px;
        }

        .hot-price::before {
          content: "￥";
          font-size: 12px;
        }

        &:hover {
          z-index: 1;
          border-color: #f33;

          .image {
            opacity: 0.7;
          }

          .hot-name {
            color: #f33;
          }
        }
      }
    }

    .image {
      width: 160px;
      height: 136px;
      margin: 10px 0 0;
      margin-bottom: 13px;
      transition: opacity 0.3s ease;
    }

    .hot-name {
      height: 24px;
      font-size: 16px;
      line-height: 24px;
      font-weight: bold;
      color: #555;
    }

    .hot-desc {
      height: 16px;
      font-size: 12px;
      line-height: 16px;
      color: #888;
    }

    .hot-price {
      height: 38px;
      font-size: 16px;
      line-height: 38px;
      font-weight: bold;
      color: #ff4e00;
    }

    .hot-label {
      font-size: 10px;
      color: #888;
      padding-left: 12px;
    }
  }

  .hot-sidebtn {
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      width: 32px;
      height: 60px;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }
    }

    .hot-leftbtn {
      left: 0;
      background: url("@/static/b_left.png") no-repeat center;
    }

    .hot-rightbtn {
      right: 0;
      background: url("@/static/b_right.png") no-repeat center;
    }
  }
}
</style>
