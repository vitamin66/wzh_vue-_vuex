<template>
  <div>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  // 消息订阅与发布
  mounted() {
    this.pubId = pubsub.subscribe("hello", (msgName, data) => {
      console.log(`消息订阅名：${msgName},数据为:${data}`);
    });
  },
  // 并且 组件被销毁前要 取消订阅
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>



