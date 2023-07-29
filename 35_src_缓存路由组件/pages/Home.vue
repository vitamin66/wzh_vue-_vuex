<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- keep-alive 标签可以包裹 router-view 让里面显示的组件在切走时不会被销毁  可以用 include 属性指定组件 注意这里的值是组件名-->
      <!-- 多个组件可以用动态绑定的数组写法  :include="['MyNews','message']" -->
      <keep-alive include="MyNews">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHome",
};
</script>
