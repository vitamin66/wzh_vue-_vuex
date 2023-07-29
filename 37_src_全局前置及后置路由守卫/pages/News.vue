<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢迎学习Vue</li>
      <li>news001 <input type="text" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyNews",
  data() {
    return {
      opacity: 1,
    };
  },
  // 两个生命周期钩子 activated 在组件被激活时触发
  activated() {
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.1;
      if (this.opacity < 0) this.opacity = 1;
    }, 160);
  },
  // deactivated 在组件失活时触发
  deactivated() {
    clearInterval(this.timer)
  }
};
</script>


