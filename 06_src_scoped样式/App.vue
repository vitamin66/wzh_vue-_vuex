<template>
  <div>
    <School />
    <Student />
  </div>
</template>

<script>
// 导入汇总 其他组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School, Student },
};
</script>

// 另外App 组件里的样式不推荐写 scoped 属性 这样会让 样式变成局部的 只有App组件能用 
// 不写 scoped 可以变成公共样式 其他小弟组件都可以用这些样式
<style>
.color {
  color: red;
}
</style>
