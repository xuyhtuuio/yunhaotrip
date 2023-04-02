<template>
  <div class="app">
    <router-view/>
    <TabBarByVant2 v-if="isHidden.isNotHidden"/>
    <!--    <div class="loading">Loading....</div>-->
    <loading/>
  </div>
</template>

<script setup>
import TabBarByVant2 from "./components/TabBars/TabBarByVant2.vue";
import useisHidden from "./store/modeles/hideBar.js";
import Loading from "./components/loading/loading.vue";

let isHidden = useisHidden();
isHidden.changeStateToAppear()

console.log(isHidden.isNotHidden)
</script>

<style scoped>

</style>
