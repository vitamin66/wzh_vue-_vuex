<template>
  <div class="row">
    <div class="card" v-for="user in info.users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 欢迎 -->
    <h2 v-show="info.isWelcome">欢迎!!!!</h2>
    <!-- 加载 -->
    <h2 v-show="info.isLoading">加载....</h2>
    <!-- 错误 -->
    <h2 v-show="info.errmsg">{{ info.errmsg }}</h2>
  </div>
</template>

<script>
export default {
  name: "MyList",
  data() {
    return {
      info: {
        isWelcome: true,
        isLoading: false,
        errmsg: "",
        users: [],
      },
    };
  },
  mounted() {
    // this.$bus.$on("userList", (obj) => {
    //   this.info = obj;
    // });

    this.$bus.$on("userList", (obj) => {
      this.info = obj
    });
  },
  beforeDestroy() {
    this.$bus.$off("userList");
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>