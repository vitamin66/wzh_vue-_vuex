<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="go">go API</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyBanner",
  methods: {
    back() {
      this.$router.back(); // 后退
    },
    forward() {
      this.$router.forward(); // 前进
    },
    go() {
      this.$router.go(-3); // 传参数指定前进或后退  正数是几就前进几 负数是几就后退几
    },
  },
};
</script>

<style>
</style>