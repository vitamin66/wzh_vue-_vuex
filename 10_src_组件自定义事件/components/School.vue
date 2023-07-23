<template>
  <div>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="sendSchoolName">点我发送学校名称给App</button>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  props:['getSchoolName'],
  methods:{
    sendSchoolName() {
      this.getSchoolName(this.name)
    }
  },
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
};
</script>



