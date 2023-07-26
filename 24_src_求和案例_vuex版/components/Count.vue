<template>
  <div>
    <h2>当前求和为:{{ $store.state.first }}</h2>
    <h3>当前和的十倍是:{{ $store.getters.bigSum }}</h3>
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
export default {
  name: "MyCount",
  data() {
    return {
      choose: 1,
    };
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