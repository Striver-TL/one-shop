<template>
  <div class="hot">
    <LazyBlock>
      <template v-slot:default>
        <div class="hot-list">
          <ul>
            <li v-for="(item, index) in products" :key="index">
              <router-link
                :to="{
                  path: '/index/product',
                  query: {
                    id: item.id,
                  },
                }"
              >
                <LazyImage :src="item.src"></LazyImage>
                <span class="hot-name">{{ item.name }}</span>
                <span class="hot-desc">{{ item.desc }}</span>
                <span>
                  <span class="hot-price">{{ item.price }}</span>
                  <span class="hot-label">{{ item.label }}</span>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </template>
    </LazyBlock>
  </div>
</template>

<script>
import { defineComponent, reactive, onBeforeMount } from "vue";
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
    return {
      products,
    };
  },
  components: {
    LazyImage,
    LazyBlock,
  },
});
</script>

<style lang="scss" scoped>
.hot {
    .image {
        width: 160px;
        height: 136px;
        margin: 0 auto;
    }
}
</style>
