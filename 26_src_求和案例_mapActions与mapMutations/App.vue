<template>
  <div>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: {
    Count,
  },
};
</script>

<style scoped>
.container,
.demo {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}

img {
  width: 100%;
  height: 200px;
}
</style>

