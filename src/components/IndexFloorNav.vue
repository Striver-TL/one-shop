<!--
 * @Author: Striver-TL 2806717229@qq.com
 * @Date: 2022-06-11 11:15:05
 * @LastEditors: Striver-TL 2806717229@qq.com
 * @LastEditTime: 2022-06-13 18:30:00
 * @FilePath: \one-shop\src\components\IndexFloorNav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="floornav">
    <IndexAdvert :src="require(`@/static/mban_2.jpg`)"></IndexAdvert>
    <IndexFloorItem
      :floorData="floorData[0]"
      @show="getData('1')"
    ></IndexFloorItem>
    <IndexAdvert :src="require(`@/static/mban_2.jpg`)"></IndexAdvert>
    <IndexFloorItem
      :floorData="floorData[1]"
      @show="getData('2')"
    ></IndexFloorItem>
    <IndexFloorItem
      :floorData="floorData[2]"
      @show="getData('3')"
    ></IndexFloorItem>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { sendRequest } from "@/util/sendRequest";
import IndexFloorItem from "@/components/IndexFloorItem";
import IndexAdvert from "@/components/IndexAdvert";
export default defineComponent({
  name: "IndexFloorNav",
  setup() {
    const floorData = reactive([null, null, null]);
    return {
      floorData,
      getData(id) {
        sendRequest({
          url: "getFloor",
          method: "POST",
          "Content-Type": "application/json",
          data: {
            id,
          },
        }).then((data) => {
          if (!data) return;
          floorData.splice(data.id - 1, 1, data);
        });
      },
    };
  },
  components: {
    IndexFloorItem,
    IndexAdvert,
  },
});
</script>

<style>
.floornav .lazy-block:not(:nth-child(2)) .floor-content .floor-linktool {
  background: #fcebf3;
}
</style>
