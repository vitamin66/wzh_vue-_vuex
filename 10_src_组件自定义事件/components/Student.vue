<template>
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendName">点我发送学生姓名</button>
    <button @click="unbind">点我解绑当前组件的自定义事件</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    // 记住自定义这种方法传参 其实需要在外层套个壳 然后调用 this.$emit() 方法 第一个是自定义事件名 后面是参数
    sendName() {
      this.$emit("haha", this.name);
      // this.$emit("wzh");
    },
    unbind() {
      this.$off("zzy");  // 解绑一个自定义事件
      // this.$off(["zzy", "wzh"]); // 解绑多个自定义事件用数组的方式写多个自定义事件名 注意是事件名 不是事件的回调函数名
      // this.$off(); // 解绑所有自定义事件 不传参即可
      // 另外也可以用 this.$destroy() 摧毁vc实例 他身上的自定义事件也会被摧毁 原生的事件不会 但是 vue会失去数据监视
      // this.$destroy()
    },
  },
};
</script>

