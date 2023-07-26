<template>
  <div class="container">
    <Category title="美食">
      <img src="./assets/image/九局下半.jpg" alt="" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影">
       <!-- <img src="./assets/image/九局下半.jpg" alt="" /> -->
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  data() {
    return {
      foods: ["火锅", "牛排", "烧烤", "炒菜"],
      games: ["反恐精英", "英雄联盟", "冒险岛", "吃鸡"],
      films: ["阿甘正传", "头号玩家", "教父", "拆弹专家"],
    };
  },
  components: {
    Category,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}

img {
  width: 100%;
  height: 200px;
}
</style>

