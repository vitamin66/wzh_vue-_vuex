<template>
  <div>
    <h2 @click="showName">学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
// 导入混合的配置methods
import { mixin } from "../mixin.js";

export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  // 这里 的methos 配置 可以进行混合
  // methods: {
  //   showName(){
  //     alert(this.name)
  //   }
  // },

  // 然后用 mixins 配置项 使用混合的配置 要写成数组形式
  mixins: [mixin],
};
</script>
