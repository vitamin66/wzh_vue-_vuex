<template>
  <div>
    <button @click="getStudents">点我获取学生信息</button>
    <button @click="getCars">点我获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      axios({
        method: "get",
        // 用代理服务器发请求可以解决跨域问题 但是第一种配置代理服务器的方式有缺点 如下
        // 这是 第一种配置代理服务器的 缺点
        // 如果 你的public 文件夹下 有students 文件 那么代理服务器就不会再去向5000发请求拿数据 而是直接把public 文件中的students给你
        // 并且只能向一个服务器发请求 不能绑定多个服务器
        url: "http://localhost:8080/api1/students",
      })
        .then((res) => {
          console.log('学生信息',res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getCars() {
      axios({
        method: "get",
        url: "http://localhost:8080/api2/cars",
      })
        .then((res) => {
          console.log("汽车信息", res.data);
        })
        .catch((err) => {
          console.log("请求错误", err.message);
        });
    },
  },
};
</script>
