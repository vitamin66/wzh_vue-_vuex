<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="checkState(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    checkState(id) {
      // this.changeTodos(id);
      // 调用 $bus 身上的自定事件 给App传参
      // this.$bus.$emit("changeTodos", id);
      pubsub.publish("changeTodos", id);
    },
    deleteTodo(id) {
      if (confirm("确定删除吗?")) {
        // this.deleteTodos(id);
        // 调用 $bus 身上的自定事件 给App传参
        // this.$bus.$emit("deleteTodos", id);
        pubsub.publish("deleteTodos", id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>