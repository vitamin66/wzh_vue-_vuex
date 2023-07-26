<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeInUp"
      leave-active-class="animate__fadeOutDown"
    >
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
// 如果是引入css库直接 import '库名' 即可
import "animate.css";
export default {
  name: "MyTest",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>