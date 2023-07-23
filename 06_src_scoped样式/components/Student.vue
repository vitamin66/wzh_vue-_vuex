<template>
  <div class="demo">
    <h2 class="color">学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
};
</script>

  // scoped属性可以让 当前style 标签里写的样式 是局部的 这样可以避免多个组件之间的相同类名冲突 
<style scoped>
.demo {
  background-color: orange;
}
</style>
