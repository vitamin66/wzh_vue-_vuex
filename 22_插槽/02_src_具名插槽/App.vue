<template>
  <div class="container">
    <Category title="美食">
      <!-- 写slot属性 值为 对象的 slot标签的name值 绑定后就可以插入指定的slot 标签里 -->
      <img slot="center" src="./assets/image/九局下半.jpg" alt="" />
      <a slot="footer" href="javascript:;">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div slot="footer" class="demo">
        <a slot="footer" href="javascript:;">单机游戏</a>
        <a slot="footer" href="javascript:;">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <img slot="center" src="./assets/image/九局下半.jpg" alt="" />
      <div slot="footer" class="demo">
        <a slot="footer" href="javascript:;">热门</a>
        <a slot="footer" href="javascript:;">经典</a>
        <a slot="footer" href="javascript:;">推荐</a>
      </div>
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
.container,
.demo {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}

img {
  width: 100%;
  height: 200px;
}
</style>

