<template>
  <div>
    <h1>我是About的内容</h1>
  </div>
</template>

<script>
export default {
  name: "MyAbout",

  // 组件内路由守卫 在进入该组件时调用
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem("name") === "wzh") {
        next();
      } else {
        alert("没有权限查看！");
      }
    } else {
      next();
    }
  },
  // 组件内路由守卫 在离开该组件时调用
  beforeRouteLeave(to, from, next) {
    next();
  },
};
</script>
