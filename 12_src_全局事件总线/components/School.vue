<template>
  <div>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  // 谁要参数就在哪个组件里面绑定事件 一般来说都在mounted这个钩子里绑
  mounted() {
    this.$bus.$on("hello", (name) => {
      console.log(name);
    });
  },
  // 注意:绑定还需要在 当前组件销毁前 也解绑事件 因为事件是绑在$bus身上的 组件销毁了 但是事件不会跟着销毁所以需要手动写
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>



