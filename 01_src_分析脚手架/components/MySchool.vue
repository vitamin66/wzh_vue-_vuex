<template>
  <div>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件的行为
export default {
  name: "MySchool",
  data() {
    return {
      name: "武汉交通",
      address: "武汉",
    };
  },
  methods: {
    showName() {
      alert(this.name)
    },
  },
};
</script>

<style>
/* 组件的样式 */
</style>