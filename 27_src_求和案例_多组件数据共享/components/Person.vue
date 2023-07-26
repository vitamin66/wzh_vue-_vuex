<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件的求和为:{{ first }}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="add">添加</button>

    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
  name: "MyPerson",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["personList", "first"]),
  },
  methods: {
    add() {
      this.$store.commit("ADD_PERSONLIST", { id: nanoid(), name: this.name });
      this.name = "";
    },
  },
};
</script>

