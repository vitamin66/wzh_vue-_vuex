<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        @keyup.enter="searchUsers"
        v-model="keyWord"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "MySearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    // searchUsers() {
    //     this.$bus.$emit("userList", {isWelcome:false,isLoading:true,errmsg:'', users:[] });
    //   axios({
    //     method: "get",
    //     url: `https://api.github.com/search/users`,
    //     params: {
    //       q: this.keyWord,
    //     },
    //   })
    //     .then((res) => {
    //       this.$bus.$emit("userList", {isWelcome:false,isLoading:false,errmsg:'', users: res.data.items });
    //     })
    //     .catch((err) => {
    //       console.log("请求错误", err.message);
    //       this.$bus.$emit("userList", {isWelcome:false,isLoading:false,errmsg:err.message, users: [] });
    //     });
    // },
    searchUsers() {
      this.$bus.$emit("userList", {
        isWelcome: false,
        isLoading: true,
        errmsg: "",
        users: [],
      });
      axios({
        method: "get",
        url: "https://api.github.com/search/users",
        params: {
          q: this.keyWord,
        },
      })
        .then((res) => {
          this.$bus.$emit("userList", {
            isWelcome: false,
            isLoading: false,
            errmsg: "",
            users: res.data.items,
          });
        })
        .catch((err) => {
          this.$bus.$emit("userList", {
            isWelcome: false,
            isLoading: false,
            errmsg: err.message,
            users: [],
          });
        });
    },
  },
};

// 当前案例练习的接口地址
// https://api.github.com/search/users?q=xxx
</script>

<style>
</style>