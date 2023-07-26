<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodos="addTodos" />
        <MyList :todos="todos" />
        <MyFooter
          :todos="todos"
          @clearTaskTodos="clearTaskTodos"
          @checkeAllTodos="checkeAllTodos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyList from "./components/MyList.vue";

export default {
  components: {
    MyHeader,
    MyFooter,
    MyList,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 新增一个事情
    addTodos(obj) {
      this.todos.unshift(obj);
    },
    // 修改事情的 done的值
    changeTodos(_, id) {
      this.todos.forEach((t) => {
        if (t.id === id) t.done = !t.done;
      });
    },
    // 删除一个事情
    deleteTodos(_, id) {
      this.todos = this.todos.filter((t) => {
        return t.id !== id;
      });
    },
    // 清除已完成的任务
    clearTaskTodos() {
      this.todos = this.todos.filter((t) => {
        return !t.done;
      });
    },
    // 全选OR取消全选
    checkeAllTodos(done) {
      this.todos.forEach((t) => {
        t.done = done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  // 用全局事件总线来 绑定自定义事件
  mounted() {
    // this.$bus.$on("changeTodos", this.changeTodos);
    // this.$bus.$on("deleteTodos", this.deleteTodos);
    this.pubId1 = pubsub.subscribe("changeTodos", this.changeTodos);
    this.pubId2 = pubsub.subscribe("deleteTodos", this.deleteTodos);
  },
  // 同时也要写销毁前解绑的代码
  beforeDestroy() {
    // this.$bus.$off(["changeTodos", "deleteTodos"]);
    pubsub.unsubscribe(this.pubId1);
    pubsub.unsubscribe(this.pubId2);
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>