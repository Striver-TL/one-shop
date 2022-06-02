<template>
  <div class="hot">
    <LazyBlock class="float-clear">
      <template v-slot:default="slotProps">
        <div class="hot-list float-right">
          <ul v-if="products.length">
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
          <ul v-else>
            <li v-for="index in 4" :key="index">
              <div>
                <span class="image"></span>
                <span class="hot-name"></span>
                <span class="hot-desc"></span>
                <span class="hot-price"></span>
              </div>
            </li>
          </ul>
          <div class="hot-sidebtn">
            <span class="hot-leftbtn"></span>
            <span class="hot-rightbtn"></span>
          </div>
        </div>
      </template>
    </LazyBlock>
  </div>
</template>

<script>
import { defineComponent, reactive, onBeforeMount, ref } from "vue";
import { path, sendRequest } from "@/util/sendRequest";
import LazyBlock from "@/components/LazyBlock";
import LazyImage from "@/components/LazyImage";

export default defineComponent({
  name: "IndexHot",
  setup() {
    const products = reactive([]);

    onBeforeMount(() => {
      sendRequest({
        url: "getHot",
        method: "POST",
      }).then((data) => {
        data.forEach((e) => {
          e.src = `${path}/${e.src}`;
        });
        products.push(...data);
      });
    });

    const loadCount = ref(0);

    return {
      products,
      loadImage(callback) {
        (loadCount.value += 1) >= products.length && callback();
      },
    };
  },
  components: {
    LazyImage,
    LazyBlock,
  },
});
</script>

<style lang="scss" scoped>
$hot-border-color: #eaeaea;
.hot {
  margin: 20px 0;

  .unload {
    li > div {
      padding: 0 20px;
      .image,
      .hot-name,
      .hot-desc,
      .hot-price {
        background: #f9f9f9;
      }
    }

    .hot-sidebtn {
      display: none;
    }
  }

  .hot-list {
    width: 977px;

    ul {
      display: flex;
      flex-flow: row nowrap;
      justify-content: left;
    }

    li {
      flex: 0 0 245px;
      margin-left: -1px;
      & > a,
      & > * > span {
        display: block;
        text-align: center;
      }

      a {
        position: relative;
        border: 1px solid #eaeaea;
        transition: border 0.3s ease;

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
      margin: 0 auto;
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
}
</style>
