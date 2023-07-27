<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 路由跳转 携带query参数 to 的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link
        > -->

        <!-- 路由跳转 携带query参数 to 的对象写法 可以给路由命名 然后可以在对象写法的 to 里写对应的name 可以避免太长的路由繁琐问题-->
        <router-link
          :to="{
            name:'xiangqing',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        >
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
};
</script>
