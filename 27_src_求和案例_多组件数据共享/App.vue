<template>
  <div>
    <Count />
    <hr />
    <Person />
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: {
    Count,
    Person,
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

