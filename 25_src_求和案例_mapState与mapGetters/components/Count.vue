<template>
  <div>
    <!-- 但是这里一直都在复用 $store.state ...  就可以用计算属性来简化一下-->
    <h2>当前求和为:{{ first }}</h2>
    <h3>当前和的十倍是:{{ bigSum }}</h3>
    <h3>
      学校名称是: {{ school }} , 学科是 :
      {{ subject }}
    </h3>
    <select v-model.number="choose">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="subtraction">-</button>
    <button @click="oddNumber">当前和为奇数再加</button>
    <button @click="waitAMinute">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "MyCount",
  data() {
    return {
      choose: 1,
    };
  },
  computed: {
    // 虽然用了计算属性 但是这里的代码还是有很多重复的地方 这时候就可以用 mapState 生成计算属性
    // 是vuex中的一个方法 可以帮助我们拿到 $store.state 用之前记得先引入 import {mapState} from 'vuex'
    /* first() {
      return this.$store.state.first;
    },
    school() {
      return this.$store.state.school;
    },
    subject() {
      return this.$store.state.subject;
    }, */
    // 这里要注意 需要用 ES6 展开语法 把 mapState 对象或者数组展开
    // ...mapState({ first: "first", school: "school", subject: "subject" }), // 对象写法
    ...mapState(["first", "school", "subject"]), // 数组写法 注意: 数组写法必须保证 里面的值和state中的值名称保持一致



    /* *************************************************************** */
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    //借助mapGetters生成计算属性：bigSum（对象写法）
    // ...mapGetters({ bigSum: "bigSum" }),

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapGetters(["bigSum"]),
  },
  methods: {
    add() {
      // 像单纯加减没有其他业务逻辑的 可以直接使用  this.$store.commit 提交到 mutations 处理
      this.$store.commit("JIA", this.choose);
      // this.$store.dispatch("jia", this.choose);
    },
    subtraction() {
      // 像单纯加减没有其他业务逻辑的 可以直接使用  this.$store.commit 提交到 mutations 处理
      this.$store.commit("JIAN", this.choose);
      // this.$store.dispatch('jian',this.choose)
    },
    oddNumber() {
      this.$store.dispatch("jiaOdd", this.choose);
    },
    waitAMinute() {
      this.$store.dispatch("jiaWait", this.choose);
    },
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 10vmin;
}
button {
  margin-left: 5px;
}
</style>