<template>
  <div>
    <!-- 如果想传参 直接在子组件 标签上传属性和值即可 需要和子组件中的插值语法传一样的key-->
    <!-- 另外 如果需要动态传参 可以用v-bind: 简写: 传递参数  这样会把双引号里的值当表达式处理 然后传的是表达式的值-->
    <Student name="周子怡" :age="22" sex="女" />
  </div>
</template>

<script>
// 导入汇总 其他组件
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: { Student },
};
</script>
