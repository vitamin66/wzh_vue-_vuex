<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkeAll" />
    </label>
    <span>
      <span>已完成{{ count }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearTask">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "clearTaskTodos", "checkeAllTodos"],
  computed: {
    total() {
      return this.todos.length;
    },
    count() {
      let i = 0;
      this.todos.forEach((t) => {
        if (t.done) {
          i++;
        }
      });
      return i;
    },
    isAll() {
      return this.total === this.count && this.total > 0;
    },
  },
  methods: {
    clearTask() {
      if (confirm("确认清空?")) this.clearTaskTodos();
    },
    checkeAll(e) {
      this.checkeAllTodos(e.target.checked);
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>