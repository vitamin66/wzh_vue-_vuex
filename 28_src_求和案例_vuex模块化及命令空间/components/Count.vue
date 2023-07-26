<template>
  <div>
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
    // ...mapState({ first: "first", school: "school", subject: "subject" }), // 对象写法
    ...mapState("countOptions", ["first", "school", "subject"]), // 数组写法 注意: 数组写法必须保证 里面的值和state中的值名称保持一致
    ...mapState("personOptions", ["personList"]),
    // ...mapGetters({ bigSum: "bigSum" }),
    ...mapGetters("countOptions", ["bigSum"]),
  },
  methods: {
    ...mapMutations("countOptions", { add: "JIA", subtraction: "JIAN" }), // 对象写法
    // ...mapMutations(["JIA", "JIAN"]), // 数组写法 要保证 两个函数名字一致

    ...mapActions("countOptions", {
      oddNumber: "jiaOdd",
      waitAMinute: "jiaWait",
    }), // 对象写法
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