<template>
  <div class="specCity">
    这是具体的页面
    houseId: {{ citiesContentStore.currentHouseId }}
    <div>houseIdByRoute: {{ $route.params.houseId }}</div>

  </div>
</template>

<script setup>
import useCitiesContent from "../../../store/modeles/citiesContent/houseList.js";

let citiesContentStore = useCitiesContent();

</script>

<style lang="less" scoped>

</style>
