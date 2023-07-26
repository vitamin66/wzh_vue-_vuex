<template>
  <div>
    <!-- 但是这里一直都在复用 $store.state ...  就可以用计算属性来简化一下-->
    <h1>当前求和为:{{ first }}</h1>
    <h3>当前和的十倍是:{{ bigSum }}</h3>
    <h3>person组件的人员数为:{{ personList.length }}</h3>
    <h3>
      学校名称是: {{ school }} , 学科是 :
      {{ subject }}
    </h3>
    <select v-model.number="choose">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(choose)">+</button>
    <button @click="subtraction(choose)">-</button>
    <button @click="oddNumber(choose)">当前和为奇数再加</button>
    <button @click="waitAMinute(choose)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
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
    // 这里要注意 需要用 ES6 展开语法 把 mapState 对象或者数组展开

    // ...mapState({ first: "first", school: "school", subject: "subject" }), // 对象写法
    ...mapState(["first", "school", "subject", "personList"]), // 数组写法 注意: 数组写法必须保证 里面的值和state中的值名称保持一致

    /* *************************************************************** */
    //借助mapGetters生成计算属性：bigSum（对象写法）
    // ...mapGetters({ bigSum: "bigSum" }),

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // 程序员手写的
    /* add() {
      this.$store.commit("JIA", this.choose);
    },
    subtraction() {
      this.$store.commit("JIAN", this.choose);
    }, */

    // 除了 mapState，mapgetters 还有 mapActions , mapMutations
    // mapMutations 可以帮助我们代写 上面的 commit 代码 可以直接跟 mutations 对话
    // 跟mapState 类似 唯一的区别在于 需要在调用 methods函数的地方传递参数
    ...mapMutations({ add: "JIA", subtraction: "JIAN" }), // 对象写法
    // ...mapMutations(["JIA", "JIAN"]), // 数组写法 要保证 两个函数名字一致

    /* ***************************************************************** */
    // oddNumber() {
    //   this.$store.dispatch("jiaOdd", this.choose);
    // },
    // waitAMinute() {
    //   this.$store.dispatch("jiaWait", this.choose);
    // },

    // mapActions 可以帮助我们代写 上面的 dispatch 代码 可以直接跟 actions 对话
    // 跟mapState 类似 唯一的区别在于 需要在调用 methods函数的地方传递参数
    ...mapActions({ oddNumber: "jiaOdd", waitAMinute: "jiaWait" }), // 对象写法
    // ...mapActions(["jiaOdd", "jiaWait"]), // 数组写法 要保证 两个函数名字一致
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