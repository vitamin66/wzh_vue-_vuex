<template>
    <div>
        <School/>
        <Student/>
    </div>
</template>

<script>
import Student from "./components/MyStudent.vue";
import School from "./components/MySchool.vue";

export default {
  name: "App",
  components: {Student,School},
};
</script>

