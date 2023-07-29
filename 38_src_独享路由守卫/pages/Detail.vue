<template>
  <div>
    <ul>
      <li>消息编号:{{id }}</li>
      <li>消息标题:{{title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyDetail",
  // 用路由的props 配置 接收参数
  props: ["id", "title"],
};
</script>
