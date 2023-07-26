<template>
  <div>
    <h2>当前求和为:{{ first }}</h2>
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
      first: 0,
      choose: 1,
    };
  },
  methods: {
    add() {
      this.first += this.choose;
    },
    subtraction() {
      if (this.first <= 0) return;
      this.first -= this.choose;
    },
    oddNumber() {
      if (this.first % 2 !== 0) {
        this.first += this.choose;
      }
    },
    waitAMinute() {
      setTimeout(() => {
        this.first += this.choose;
      }, 500);
    },
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