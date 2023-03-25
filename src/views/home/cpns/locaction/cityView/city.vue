<template>
  <div class="city">
    这是城市
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import useCities from "../../../../../store/modeles/cities.js";
import useisHidden from "../../../../../store/modeles/hideBar.js";


const cityStore = useCities();
let isHidden = useisHidden();

let route = useRoute();
isHidden.changeStateToHidden();

</script>

<style lang="less" scoped>

</style>
