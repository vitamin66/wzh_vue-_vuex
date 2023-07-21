<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>学生年龄:{{ myAge + 1 }}</h2>
    <button @click="updateAge">点我年龄+1</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      msg: "我是一个无业游民",
      myAge: this.age,
    };
  },
  methods: {
    // 如果要 改 props里的数据 不能直接改 需要 拷贝一份到data 里 然后改拷贝的数据
    updateAge() {
      this.myAge++;
    },
  },
  // 然后在子组件中需要 一个 porps 配置项用来接收传过来的参数
  // 数组写法 (简写 只能接收)
  props: ["name", "age", "sex"],

  // 对象写法1 (可以提示接收的类型 但是类型不对也能收 只不过会多一个提示)
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // },

  // 对象写法2 (可以配置指定 接收的类型 必选项 以及 默认值)
  // props: {
  //   name: {
  //     type: String, //name 类型为 字符串
  //     required: true, // name是必要的
  //   },
  //   age: {
  //     type: Number,
  //     default: 100, // 如果没有传age 默认值就是100
  //   },
  //   sex: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>
