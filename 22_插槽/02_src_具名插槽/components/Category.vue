<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 具名插槽 就是给name 然后那边需要什么标签就在什么标签上写 对应的name值 就会插入到指定slot 标签里了 -->
    <slot name="center">默认值</slot>
    <slot name="footer">默认值</slot>
  </div>
</template>

<script>
export default {
  name: "MyCategory",
  props: ["title"],
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