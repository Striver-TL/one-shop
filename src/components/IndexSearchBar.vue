<template>
  <div class="search">
    <div class="searchbar">
      <div class="input">
        <input
          type="text"
          v-model="text"
          @focus="showDesc = false"
          @blur="inputBlur"
        />
        <span class="input-desc" v-show="showDesc">请输入关键字</span>
      </div>
      <div class="button">
        <button @click="toSearch">搜索</button>
      </div>
    </div>
    <div class="quicksearch">
      <ul class="float-children" @click="wordClickHandle">
        <li v-for="(word, index) in words" :key="index">
          <a href="javascript: void(0)" :data-word="word">{{ word }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "IndexSearchBar",
  setup() {
    const showDesc = ref(true);
    const text = ref("");

    const words = reactive([
      "咖啡",
      "iphone 6s",
      "新鲜美食",
      "蛋糕",
      "日用品",
      "连衣裙",
    ]);
    // 定义事件代理处理函数
    const wordClickHandle = (e) => {
      const target = e.target;
      if (target.tagName === "A") {
        text.value = target.getAttribute("data-word");
        showDesc.value = false;
        toSearch();
      }
    };

    const inputBlur = () => {
      showDesc.value = !text.value;
    };
    const toSearch = () => {
        console.log("search")
    };

    return {
      showDesc,
      text,
      words,
      wordClickHandle,
      inputBlur,
      toSearch
    };
  },
});
</script>

<style lang="scss" scoped>
$searchbar-height: 40px;
$border-width: 2px;
$searchbar-color: #ff3c3c;

.search {
  .searchbar {
    width: 500px;
    border: $border-width solid $searchbar-color;
    display: flex;
    flex-flow: row nowrap;

    .input {
      flex: 1 1 0;
      position: relative;
      $input-padding: 10px;

      input {
        padding: 0 $input-padding;
        border: none;
        width: 100%;
        height: 100%;
      }

      .input-desc {
        position: absolute;
        left: $input-padding;
        top: 50%;
        transform: translateY(-50%);
        color: #a9a9a9;
        font-size: 14px;
      }
    }

    .button {
      flex: 0 0 (90px - $border-width);
      height: $searchbar-height - $border-width * 2;

      button {
        width: 100%;
        height: 100%;
        background: $searchbar-color;
        border: none;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .quicksearch {
    line-height: 20px;
    li {
      padding-right: 15px;
    }
    a {
      color: #333;
      font-size: 12px;

      &:hover {
        color: $searchbar-color;
      }
    }
  }
}
</style>
