<template>
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendName">点我给School传学生姓名</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  // 消息订阅与发布
  methods: {
    sendName() {
      pubsub.publish("hello", this.name);
    },
  },
};
</script>

