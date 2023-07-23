<template>
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendName">点我给School传学生姓名</button>
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
  // 谁要发参数就调自定义事件 并且传参
  methods: {
    sendName() {
      this.$bus.$emit("hello", this.name);
    },
  },
};
</script>

