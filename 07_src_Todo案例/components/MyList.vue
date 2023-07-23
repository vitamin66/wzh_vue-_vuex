<template>
  <ul class="todo-main">
    <!-- v-for初始化基础数据 -->
    <MyItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :changeTodos="changeTodos"
      :deleteTodos="deleteTodos"
    />
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: {
    MyItem,
  },
  props: ["todos", "changeTodos", "deleteTodos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>