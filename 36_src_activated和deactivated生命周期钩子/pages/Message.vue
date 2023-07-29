<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 路由跳转 携带 params 参数 to 的字符串写法 注意:要在路由配置文件中 给参数占位-->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link
        > -->

        <!-- 路由跳转 携带 params 参数 to 的字符串写法 注意:用对象写法必须配置name 不能 写path 否则报错-->
        <router-link
          :to="{
            name: 'xiangqing',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        >
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyMessage",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      // 在 this.$router 身上有一个 push 方法 可以脱离 router-link 标签 更灵活的指定 路由的跳转 写法和 router-link 里的 to 属性一样
      this.$router.push({
        name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
      // 并且这里的 push 和 replace 跟 router-link标签 中一样 是浏览器历史的模式
      // 在 this.$router 身上有一个 replace 方法 可以脱离 router-link 标签 更灵活的指定 路由的跳转 写法和 router-link 里的 to 属性一样
    replaceShow(m) {
      this.$router.replace({
        name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>
