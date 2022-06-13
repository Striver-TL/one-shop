<!--
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 11:15:05
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-13 10:11:12
 * @FilePath: \one-shop\src\components\IndexCategory.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 鼠标离开该区域后隐藏内容区域 -->
  <div class="category" @mouseleave="showIndex = -1">
    <!-- 懒加载模块 -->
    <!-- 当节点被加载时自动加载模块功能 -->
    <!-- 成功加载完毕后获取数据 -->
    <LazyBlock @success="getList" :autoLoad="true">
      <template v-slot:default>
        <!-- 分类导航栏 -->
        <div class="category-list">
          <ul>
            <!-- 遍历数据 -->
            <li v-for="(item, index) in list" :key="index">
              <!-- 鼠标移入该区域后显示该位置的内容区域 -->
              <a
                href="javascript: void(0)"
                class="text-middle"
                @mouseenter="
                  showIndex = index;
                  getContent(index);
                "
              >
                <span>
                  <i><img :src="require(`@/static/${item.icon}`)" /></i>
                  <template v-for="(text, index) in item.links" :key="index">
                    <span v-if="index">、</span>
                    <RouterLink
                      :to="{
                        path: '/index/search',
                        query: {
                          word: text,
                        },
                      }"
                      >{{ text }}</RouterLink
                    >
                  </template>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 分类内容区域 -->
        <div class="category-content">
          <!-- 有多少个列表项，就创建多少个的对应的内容区 -->
          <div
            class="category-item"
            v-for="(item, index) in list.length"
            :key="item"
            v-show="index === showIndex"
          >
            <!-- 第一次被显示的时添加懒加载模块 -->
            <LazyBlock v-if="content[index] !== null" :autoLoad="true">
              <template v-slot:default>
                <ul>
                  <li
                    v-for="(item, i) in content[index].links"
                    :key="i"
                    class="float-children"
                  >
                    <b
                      ><RouterLink
                        :to="{
                          path: '/index/search',
                          query: {
                            word: item.title,
                          },
                        }"
                        >{{ item.title }}</RouterLink
                      ></b
                    >
                    <span></span>
                    <div>
                      <RouterLink
                        v-for="(link, j) in item.item"
                        :key="j"
                        :to="{
                          path: '/index/search',
                          query: {
                            word: link,
                          },
                        }"
                        >{{ link }}</RouterLink
                      >
                    </div>
                  </li>
                </ul>
              </template>
            </LazyBlock>
          </div>
        </div>
      </template>
    </LazyBlock>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import LazyBlock from "@/components/LazyBlock";
import { sendRequest } from "@/util/sendRequest";

export default defineComponent({
  name: "IndexCategory",
  setup() {
    // 分类列表数据
    const list = reactive([]);
    // 显示的区域索引
    const showIndex = ref(-1);
    // 显示区域能否被移动
    const canFixed = ref(false);
    // 内容区域数据
    const content = reactive([]);
    return {
      list,
      content,
      showIndex,
      canFixed,
      getList() {
        sendRequest({
          url: "getCategory?type=list",
          method: "POST",
          "Content-Type": "application/json",
        }).then((data) => {
          data.forEach(() => content.push(null));
          list.push(...data);
        });
      },
      getContent(index) {
        if (content[index] !== null) return;
        sendRequest({
          url: `getCategory?type=content&index=${index}`,
          method: "POST",
          "Content-Type": "application/json",
        }).then((data) => {
          content.splice(index, 1, data);
        });
      },
    };
  },
  components: {
    LazyBlock,
  },
});
</script>

<style lang="scss" scoped>
.category {
  position: relative;
  .unload {
    background: #f1f1f1;

    & > * {
      visibility: hidden;
    }
  }

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

        & > a {
          cursor: default;
          height: 100%;
          color: #fff;
          font-size: 12px;
          position: relative;

          a {
            color: inherit;

            &:hover {
              text-decoration: underline;
            }
          }

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

  .category-content {
    width: 0;
    height: 100%;
    .category-item {
      position: absolute;
      top: 0;
      left: 212px;
      width: 988px;
      height: 100%;
      background: #fff;
      box-shadow: 0 0 10px rgba(100, 100, 100, 0.7);
      z-index: 9;

      .lazy-block {
        padding: 30px 10px;
      }

      li {
        padding: 10px 0;
        line-height: 24px;

        div {
          width: 800px;
        }
      }

      b {
        float: left;
        width: 60px;
        height: 100%;
        text-align: right;
      }

      a {
        color: #555;
        margin: 0 5px;
        font-size: 12px;
        white-space: nowrap;
        &:hover {
          text-decoration: underline;
          color: #f33;
        }
      }
    }
  }
}
</style>
