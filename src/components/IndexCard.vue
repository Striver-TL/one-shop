<!--
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 11:15:05
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-13 16:50:57
 * @FilePath: \one-shop\src\components\IndexCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="card">
    <div class="card-title float-clear">
      <h3 class="float-left">快讯</h3>
      <a class="float-right">更多&gt;</a>
    </div>
    <div class="card-list">
      <LazyBlock :autoLoad="true" @success="getNews">
        <template v-slot:default>
          <ul>
            <template v-if="news.length">
              <li v-for="(item, index) in news" :key="index">
                <a :href="item.href">
                  <b>【{{ item.type }}】</b>
                  <span>{{ item.text }}</span>
                </a>
              </li>
            </template>
            <template v-else>
              <li class="card-empty" v-for="i in 5" :key="i"></li>
            </template>
          </ul>
        </template>
      </LazyBlock>
    </div>
    <div class="card-title"><h3>一号钱包</h3></div>
    <div class="card-link">
      <p>收益日结，收益赚High！</p>
      <lazy-image :src="require('@/static/oneAD.jpg')"></lazy-image>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import LazyImage from "@/components/LazyImage";
import LazyBlock from "@/components/LazyBlock";
import { sendRequest } from "@/util/sendRequest";

export default defineComponent({
  name: "IndexCard",
  setup() {
    const news = reactive([]);
    return {
      news,
      getNews() {
        sendRequest({
          url: "getNews",
          method: "POST",
          "Content-Type": "application/json",
        })
          .then((data) => {
            news.push(...data);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    };
  },
  components: {
    LazyBlock,
    LazyImage,
  },
});
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.card {
  width: 210px;
  border: 1px solid $border-color;
  font-size: 12px;

  a {
    color: #888;
  }
}

.card-title {
  padding: 0 10px;
  line-height: 40px;
  border-bottom: 1px dotted $border-color;

  &:not(:nth-of-type(1)) {
    border-top: 1px solid $border-color;
  }

  h3 {
    font-weight: normal;
    font-size: 16px;
  }
}

.card-list {
  padding: 1px 0 20px;

  li {
    padding: 0 10px;
    line-height: 30px;

    a {
      &:hover {
        text-decoration: underline;
        color: #f33;
      }
    }
  }

  li.card-empty {
    height: 25px;
    background: #f1f1f1;
    margin: 5px 10px 0;
  }
}

.card-link {
  p {
    line-height: 25px;
    padding: 0 10px;
  }

  .image {
    width: 186px;
    height: 108px;
    margin: 0 auto;
  }
}
</style>
