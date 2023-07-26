<template>
  <div class="container">
    <!-- 作用域插槽 当在父组件要写子组件结构时 并且当数据在子组件时 可以使用 示例如下:-->
    <!-- 这边要用 scope 来接子组件传过来的数据 注意 数据data的里面  data.games才是传过来-->
    <!-- 注意: 必须包裹在 template 标签里 并且 scope 也要写在 template 身上  -->
    <Category title="游戏">
      <template scope="data">
        <ul>
          <li v-for="(g, index) in data.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="data">
        <ol>
          <li v-for="(g, index) in data.games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="data">
        <h4 v-for="(g, index) in data.games" :key="index">{{g}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
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

