<template>
  <div class="card">
    <div class="card-title float-clear">
      <h3 class="float-left">快讯</h3>
      <a class="float-right">更多&gt;</a>
    </div>
    <div class="card-list">
      <ul>
        <li>
          <a href="javascript:void(0)">
            <b>【特惠】</b>
            <span>掬一轮明月&nbsp;表无尽惦念</span>
          </a>
        </li>
        <li>
          <a href=""><b>【公告】</b> <span>好奇金装成长裤新品上市</span></a>
        </li>
        <li>
          <a href=""><b>【特惠】</b> <span>大牌闪购·抢！</span></a>
        </li>
        <li>
          <a href=""
            ><b>【公告】</b> <span>发福利&nbsp;买车就抢千元油卡</span></a
          >
        </li>
        <li>
          <a href=""><b>【公告】</b> <span>家电低至五折</span></a>
        </li>
      </ul>
    </div>
    <div class="card-title"><h3>一号钱包</h3></div>
    <div class="card-link">
      <p>收益日结，收益赚High！</p>
      <lazy-image :src="require('@/static/oneAD.jpg')"></lazy-image>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LazyImage from "@/components/LazyImage";

export default defineComponent({
  name: "IndexCard",
  setup() {},
  components: {
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
