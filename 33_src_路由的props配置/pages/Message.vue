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
