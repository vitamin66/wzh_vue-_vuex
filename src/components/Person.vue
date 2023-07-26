<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件的求和为:{{ first }}</h3>
    <h3>列表中第一个人的名字是:{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>

    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyPerson",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    // 用普通的方式找 对应配置项里的 state 如下
    first() {
      return this.$store.state.countOptions.first;
    },
    personList() {
      return this.$store.state.personOptions.personList;
    },
    firstPersonName() {
      return this.$store.getters["personOptions/firstPersonName"];
    },
  },
  methods: {
    // 用普通的方式 用普通的方式 对应配置项里的 mutations 如下
    add() {
      this.$store.commit("personOptions/ADD_PERSONLIST", {
        id: nanoid(),
        name: this.name,
      });
      this.name = "";
    },
    addWang() {
      this.$store.dispatch("personOptions/addWang", {
        id: nanoid(),
        name: this.name,
      });
      this.name = "";
    },
  },
};
</script>

