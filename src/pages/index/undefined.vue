<!--
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-14 16:53:45
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-14 17:29:17
 * @FilePath: \one-shop\src\pages\index\undefined.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="undefine">
    <div class="container-content">
      <div class="not-found float-children">
        <div class="found-icon"></div>
        <div class="found-text">
            <span>未找到该商品的信息~</span>
            <span>商品不存在或还在路上o(╥﹏╥)o</span>
            <span><RouterLink to="/index">去首页</RouterLink></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "IndexUndefined",
  beforeCreate() {
    window.scrollTo(0, 0)
  }
});
</script>

<style scoped lang="scss">
.not-found {
    width: 500px;
    padding: 100px 0;
    margin: 0 auto;
    .found-icon {
        width: 200px;
        height: 200px;
        background: url("@/static/not-found.png") center no-repeat;
    }

    .found-text {
        $found-text-height: 90px;
        display: block;
        height: $found-text-height;
        margin: (200px - $found-text-height) / 3 0;
        text-indent: 2em;
        color: #f33;
        span {
            display: block;
            font-size: 18px;
            line-height: $found-text-height / 3;
        }

        a {
            color: #888;
            text-decoration: underline;
            font-size: 14px;
        }
    }
}
</style>
