<template>
  <transition
    name="animate__animated animate__bounce"
    appear
    enter-active-class="animate__fadeInLeft"
    leave-active-class="animate__fadeOutRight"
  >
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="checkState(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="isEditTodo(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
      <button
        class="btn btn-edit"
        v-show="!todo.isEdit"
        @click="editTodo(todo)"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
import "animate.css";
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    checkState(id) {
      // this.changeTodos(id);
      // 调用 $bus 身上的自定事件 给App传参
      this.$bus.$emit("changeTodos", id);
    },
    deleteTodo(id) {
      if (confirm("确定删除吗?")) {
        // this.deleteTodos(id);
        // 调用 $bus 身上的自定事件 给App传参
        this.$bus.$emit("deleteTodos", id);
      }
    },
    // 编辑按钮的点击事件 给todo身上加属性
    editTodo(todo) {
      if (Object.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    // 失去焦点是才是正真执行修改逻辑的地方
    isEditTodo(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("内容不能为空");
      this.$bus.$emit("edittitle", todo.id, e.target.value);
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