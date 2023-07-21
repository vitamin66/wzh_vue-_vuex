<template>
  <div>
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
    export default {
        name:'MySchool',
        data() {
            return {
                name:'武汉交通',
                address:'湖北武汉'
            }
        },
    }
</script>

<style>

</style>