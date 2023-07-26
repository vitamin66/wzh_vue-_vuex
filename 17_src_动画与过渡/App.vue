<template>
  <div>
    <test />
    <test2 />
  </div>
</template>

<script>
import test from "./components/test.vue";
import test2 from "./components/test2.vue";

export default {
  components: {
    test,
    test2,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
};
</script>

