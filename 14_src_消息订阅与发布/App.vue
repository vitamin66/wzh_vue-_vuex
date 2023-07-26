<template>
  <div>
    <h2>{{ msg }}</h2>
    <School/>
    <Student/>
  </div>
</template>

<script>
// 导入汇总 其他组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "欢迎来到英雄联盟",
    };
  },

};
</script>


