<template>
  <div class="category">
    <div class="category-list">
      <ul>
        <li>
          <a href="javascript: void(0)" class="text-middle"
            ><span
              ><i><img src="@/static/nav1.png" /></i>进口食品、生鲜</span
            ></a
          >
        </li>
        <li>
          <a href="javascript: void(0)" class="text-middle"
            ><span
              ><i><img src="@/static/nav2.png" /></i>食品、饮料、酒</span
            ></a
          >
        </li>
        <li>
          <a href="javascript: void(0)" class="text-middle"
            ><span
              ><i><img src="@/static/nav3.png" /></i>母婴、玩具、童装</span
            ></a
          >
        </li>
        <li>
          <a href="javascript: void(0)" class="text-middle">
            <span
              ><i><img src="@/static/nav4.png" /></i>家居、家庭清洁、纸品</span
            ></a
          >
        </li>
        <li>
          <a href="javascript: void(0)" class="text-middle"
            ><span
              ><i><img src="@/static/nav5.png" /></i>美妆、个人护理、洗护</span
            ></a
          >
        </li>
        <li>
          <a href="javascript: void(0)" class="text-middle"
            ><span
              ><i><img src="@/static/nav6.png" /></i>女装、内衣、中老年</span
            ></a
          >
        </li>
        <li>
          <a href="javascript: void(0)" class="text-middle"
            ><span
              ><i><img src="@/static/nav7.png" /></i>鞋靴、箱包、腕表配饰</span
            ></a
          >
        </li>
        <li>
          <a href="javascript: void(0)" class="text-middle"
            ><span
              ><i><img src="@/static/nav8.png" /></i>男装、运动</span
            ></a
          >
        </li>
        <li>
          <a href="javascript: void(0)" class="text-middle"
            ><span
              ><i><img src="@/static/nav9.png" /></i>手机、小家电、电脑</span
            ></a
          >
        </li>
        <li>
          <a href="javascript: void(0)" class="text-middle"
            ><span
              ><i><img src="@/static/nav10.png" /></i>礼品、充值</span
            ></a
          >
        </li>
      </ul>
    </div>
    <div class="category-content"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexCategory",
});
</script>

<style lang="scss" scoped>
.category {
  .category-list {
    &,
    & > ul {
      height: 100%;
    }
    ul {
      display: flex;
      flex-flow: column;

      li {
        flex: 1;

        a {
          height: 100%;
          color: #fff;
          font-size: 12px;
          position: relative;

          &:hover {
            background: rgb(255, 0, 0);
          }

          &::after {
            content: "";
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            display: block;
            width: 5px;
            height: 9px;
            background: url("@/static/n_arrow.gif") 0 no-repeat;
          }

          i {
            display: inline-block;
            width: 40px;
            text-align: center;

            img {
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
}
</style>
