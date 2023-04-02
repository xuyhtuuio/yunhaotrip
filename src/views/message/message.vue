<template>
<div class="message">
  MESSAGE
  <div class="back">
    <router-link to="/home">点击返回</router-link>
  </div>
</div>
</template>

<script setup>
import useisHidden from "../../store/modeles/hideBar.js";

let isHidden = useisHidden();
isHidden.changeStateToHidden()
</script>

<style scoped>

</style>

