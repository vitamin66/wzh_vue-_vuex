<template>
  <div>
    <!-- ref 属性是 id 的替代品 加在html标签上 可以拿到DOM元素 -->
    <h2 v-text="msg" ref="title"></h2>
    <button @click="showDOM" ref="btn">点我获取DOM元素或组件实例对象</button>
    <!-- ref 属性是 id 的替代品 加在子组件标签上 可以拿到当前子标签组件的 实例对象(vc) -->
    <School ref="sch"></School>
  </div>
</template>

<script>
// 导入汇总 其他组件
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {
    showDOM() {
      // 获取元素身上的 ref 属性
      console.log(this.$refs.title); // 获取真实的DOM元素
      console.log(this.$refs.btn); // 获取真实的DOM元素
      console.log(this.$refs.sch); // 获取School子组件的实例对象(vc)
    },
  },
};
</script>

<style>
</style>