<template>
  <div>
    <h2>学生姓名是:{{ name }}</h2>
    <!-- props方式 子给父传参 -->
    <School :getSchoolName="getSchoolName" />

    <!-- @方式的自定义事件子给父传参 也可以给组件绑定原生的DOM 事件需要用 @click.native="text" native修饰符注明-->
    <!-- <Student @zzy="getStudentName" @click.native="text" /> -->

    <!-- 第二种方式的自定义事件子给父传参 需要用到 ref-->
    <Student ref="student" />
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
      name: "",
    };
  },
  methods: {
    // props方式 子给父传参
    getSchoolName(name) {
      console.log(name);
    },

    // 自定义事件子给父传参
    getStudentName(name) {
      this.name = name;
    },

    // 给组件绑定原生DOM事件
    text() {
      console.log(11);
    },
  },
  // 第二种自定义事件传参的方式 这种方式更灵活可以 加延时器等
  mounted() {
    this.$refs.student.$on("haha", this.getStudentName);
  },
};
</script>


