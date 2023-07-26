<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 默认插槽 slot 标签 可以把在父组件里写的子组件标签里的内容解析拿过来放到子组件的slot标签里 -->
    <!-- 另外如果没有传标签过来 slot 就会用默认值 -->
    <slot>默认值</slot>
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