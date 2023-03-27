<template>
  <div class="city">
    <city-serch/>
    <city-choose/>
    <router-view/>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import useCities from "../../../../store/modeles/cities.js";
import useisHidden from "../../../../store/modeles/hideBar.js";
import CitySerch from "./city-search/city-serch.vue";
import CityChoose from "./city-content/city-choose/city-choose.vue";

import {ref} from "vue";


const cityStore = useCities();
let isHidden = useisHidden();

const cityData = ref();
let route = useRoute();
isHidden.changeStateToHidden();




</script>

<style lang="less" scoped>

</style>
