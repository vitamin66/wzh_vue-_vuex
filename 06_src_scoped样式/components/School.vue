<template>
  <div class="demo">
    <h2 class="color">学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
};
</script>


// scoped属性可以让 当前style 标签里写的样式 是局部的 这样可以避免多个组件之间的相同类名冲突 
<style scoped>
.demo {
  background-color: hotpink;
}
</style>
