<!--
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 11:15:05
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-15 08:29:59
 * @FilePath: \one-shop\src\pages\index\product.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="product">
    <div class="container-content">
      <div class="page-desc">
        <span>所有团购</span>
        <span>&gt;</span>
        <span>包饰</span>
        <span>&gt;</span>
        <span style="color: #f33">{{ product.brand }}</span>
        <span>{{ product.name }}</span>
      </div>
      <div class="page-content">
        <div class="content-param float-children">
          <div class="content-banners">
            <div class="banners-bigger">
              <LazyImage
                v-if="product.banners"
                :src="require(`@/static/${product.banners[bannerIndex]}`)"
              ></LazyImage>
            </div>
            <div class="banners-small">
              <SlideShow v-if="product.smalls" :length="product.smalls.length" :showLength="4">
                <template v-slot:slideshow-content="slideProps">
                  <div class="banners-btn">
                    <ul
                      :style="{
                        left: `-${slideProps.left * 100}%`,
                      }"
                    >
                      <li
                        v-for="(item, index) in product.smalls"
                        :key="item"
                        :class="{
                          checked: index === bannerIndex,
                        }"
                        @click="bannerIndex = index"
                      >
                        <LazyImage
                          :src="require(`@/static/${item}`)"
                        ></LazyImage>
                      </li>
                    </ul>
                  </div>
                </template>
                <template v-slot:slideshow-sidebtn="slideProps">
                  <div class="banners-sidebtn">
                    <span @click="slideProps.sub()"></span>
                    <span @click="slideProps.add()"></span>
                  </div>
                </template>
              </SlideShow>
            </div>
          </div>
          <div class="content-info">
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <span class="product-desc">{{ product.desc }}</span>
              <span class="product-price">
                <span class="product-pricenow"
                  >本店价格：<span>{{ price }}</span></span
                >
                <span class="product-priceold"
                  >参考价：<span>{{ priceOld }}</span></span
                >
              </span>
            </div>
            <div class="product-parm">
              <div
                class="product-select float-children"
                v-for="(item, index) in product.specs"
                :key="index"
              >
                <span>{{ item.title }}：</span>
                <div class="select-items float-children">
                  <span
                    :class="{
                      checked: paramIndex[index] === i,
                    }"
                    v-for="(msg, i) in item.items"
                    :key="i"
                    @click="paramIndex.splice(index, 1, i)"
                    >{{ msg.text }}</span
                  >
                </div>
              </div>
            </div>
            <div class="product-follow">
              <span class="follow">关注商品</span>
            </div>
            <div class="product-cart">
              <button disabled="true">购物车还没写</button>
            </div>
          </div>
        </div>
        <div class="content-global float-children">
          <div class="content-userlike">
            <div class="global-title"><span>用户还喜欢</span></div>
          </div>
          <div class="content-block">
            <div class="content-box">
              <div class="global-title">
                <span class="title-item">商品属性</span>
              </div>
              <div class="content-attribute">
                <ul class="float-children">
                  <li v-for="(item, index) in product.attribute" :key="index">
                    <span>{{ item.key }}：{{ item.value }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="content-box">
              <div class="global-title">
                <span class="title-full">商品详情</span>
              </div>
              <div class="content-details">
                <LazyImage
                  v-for="(item, index) in product.details"
                  :src="require(`@/static/${item}`)"
                  :key="index"
                ></LazyImage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onBeforeMount, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { sendRequest } from "@/util/sendRequest";
import LazyImage from "@/components/LazyImage";
import SlideShow from "@/components/SlideShow";

export default defineComponent({
  name: "IndexProduct",
  setup() {
    const router = useRouter();
    const product = reactive({});
    const bannerIndex = ref(0);
    const paramIndex = reactive([]);
    const priceFunc = (attribute) => {
      return () => {
        if (!product[attribute] && !product.specs) return 0;
        if (product[attribute]) return product[attribute];
        return product.specs.reduce((sum, a, index) => {
          let price = a.items[paramIndex[index]][attribute];
          if (Object.prototype.toString.call(price) === "[object Array]") {
            price = price[paramIndex[index - 1]];
          }
          return sum + (isNaN(price) ? 0 : price);
        }, 0);
      };
    };
    const price = computed(priceFunc("price"));
    const priceOld = computed(priceFunc("oldPrice"));
    onBeforeMount(() => {
      window.scrollTo(0, 0);
      sendRequest({
        url: `getProduct?id=${router.currentRoute.value.query.id}`,
        method: "POST",
        "Content-Type": "application/json",
      })
        .then((data) => {
          Object.assign(product, data);
          data.specs.forEach(() => paramIndex.push(0));
        })
        .catch(() => {
          router.replace("/index/undefined")
        });
    });

    return {
      price,
      priceOld,
      product,
      bannerIndex,
      paramIndex,
    };
  },
  components: {
    LazyImage,
    SlideShow,
  },
});
</script>

<style lang="scss" scoped>
.product {
  padding: 13px;
  color: #888;

  .page-desc {
    font-size: 12px;
    line-height: 38px;

    span {
      padding-right: 5px;
    }
  }

  .content-banners {
    position: relative;
  }

  .banners-bigger {
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;
    overflow: hidden;
  }

  .banners-btn {
    box-sizing: content-box;
    width: 355px;
    margin: 11px 20px 0;
    overflow: hidden;

    ul {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      transition: left 0.5s ease;
    }
    li {
      flex: 0 0 85px;
      height: 85px;
      border: 1px solid #ccc;
      margin-right: 5px;
      overflow: hidden;
    }
    li.checked {
      border-color: #f33;
    }
  }

  .banners-sidebtn {
    span {
      width: 22.5px;
      height: 85px;
      position: absolute;
      bottom: 0;
      background-repeat: no-repeat;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
    span:first-child {
      left: 0;
      background-image: url("@/static/r_left.png");
      background-position: 4px center;
    }
    span:last-child {
      right: 0;
      background-image: url("@/static/r_right.png");
      background-position: 3.5px center;
    }
  }

  .content-info {
    padding-left: 28px;

    .product-name {
      font-size: 18px;
      color: #333;
      line-height: 26px;
    }

    & > span {
      display: block;
    }

    .product-desc {
      font-size: 12px;
      line-height: 24px;
    }

    .product-price {
      padding-top: 25px;
      color: #555;
      & > span {
        display: block;
        font-size: 10px;
        line-height: 34px;
      }

      .product-pricenow > span {
        color: #f33;
        font-size: 14px;
        &::before {
          content: "￥";
        }
      }

      .product-priceold > span {
        font-size: 13px;
        &::before {
          content: "￥";
        }
      }
    }
  }

  .product-parm {
    padding-top: 16px;
    font-size: 12px;
    line-height: 40px;

    .select-items {
      padding: 5px 0;
      span {
        display: block;
        padding: 0 15px;
        border: 1px solid #888;
        margin-right: 10px;
        line-height: 26px;
        cursor: pointer;
      }

      span.checked {
        line-height: 24px;
        padding: 0 14px;
        border: 2px solid #ff3c3c;
        background: url("@/static/ch.png") right bottom no-repeat;
      }
    }
  }

  .product-follow {
    height: 15px;
    margin: 32px 2em;
    font-size: 12px;
    line-height: 15px;
    span.follow {
      display: block;
      height: 100%;
      padding-left: 20px;
      background: url("@/static/care.png") 0 no-repeat;
      cursor: pointer;
    }
  }

  .product-cart {
    padding-top: 25px;
    button {
      font-weight: normal;
      line-height: 40px;
      color: #333;
      padding: 0 10px;
      border-radius: 3px;
    }
  }

  .content-global {
    padding: 20px 0;
    font-size: 12px;
    .content-userlike {
      width: 210px;
      border: 1px solid #ccc;
    }

    .global-title {
      height: 30px;
      background: #f6f6f6;
      text-indent: 10px;
      border-bottom: 1px solid #ccc;
      line-height: 30px;
    }
    .content-block {
      width: 990px;
      .content-box {
        border: 1px solid #ccc;
        margin-bottom: 10px;

        .title-item {
          display: block;
          width: 110px;
          background: #fff;
          border-top: 2px solid #ff4e00;
          text-align: center;
          text-indent: 0;
        }

        .title-full {
          display: block;
          color: #ff4e00;
          border-top: 2px solid #ff4e00;
        }
      }
    }
    .content-attribute {
      padding: 35px 20% 35px 0;
      li {
        width: 25%;
        padding-left: 25px;
        line-height: 25px;
      }
    }

    .content-details {
      padding: 10px 110px;

      .image {
        background: transparent !important;
        padding: 16px 0;
      }
    }
  }
}
</style>
