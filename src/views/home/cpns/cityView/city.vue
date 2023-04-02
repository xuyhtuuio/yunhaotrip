<template>
  <div class="city">
    <div class="head">
      <city-choose-and-search/>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import useCities from "../../../../store/modeles/cities/InnerCities.js";
import useisHidden from "../../../../store/modeles/hideBar.js";
import CitySerch from "./city-search/city-serch.vue";
import CityChoose from "./city-content/city-choose/city-choose.vue";
import {ref} from "vue";
import CityChooseAndSearch from "./city-content/cityChooseAndSearch.vue";
const cityStore = useCities();
let isHidden = useisHidden();

const cityData = ref();
let route = useRoute();
isHidden.changeStateToHidden();
</script>

<style lang="less" scoped>
.head {
  position: relative;
  z-index: 10;
}

.content {
  height: calc(100vh - 110px);
  overflow-y: auto;

}

:deep(.van-index-anchor--sticky) {

}
</style>
