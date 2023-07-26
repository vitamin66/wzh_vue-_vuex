<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 作用域插槽 数据在子 现在要传给父 并且父要实现复用 每次复用  html结构都不同 可以用到插槽  -->
    <!-- 通过动态绑定属性传参 -->
    <slot :games="games">默认值</slot>
  </div>
</template>

<script>
export default {
  name: "MyCategory",
  props: ["title"],
  data() {
    return {
      games: ["反恐精英", "英雄联盟", "冒险岛", "吃鸡"],
    };
  },
};
</script>

<style scoped>
.category {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}

h3 {
  background-color: orange;
  text-align: center;
}
</style>