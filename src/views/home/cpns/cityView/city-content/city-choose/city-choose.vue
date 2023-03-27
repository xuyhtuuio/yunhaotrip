<template>
  <div class="content">
    <van-tabs v-model:active="active"
              @click-tab="jumpCity"
              type="line">
      <van-tab :title="cityStore.cityTitleIn"></van-tab>
      <van-tab :title="cityStore.cityTitleOut"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import useCities from "../../../../../../store/modeles/cities/InnerCities.js";

const active = ref()
const cityStore = useCities()
let router = useRouter();
cityStore.getCityData()

function jumpCity() {
  if (active.value === 0) {
    router.push({
      path: "/city/chinaCity"
    })
  }
  if (active.value === 1) {
    router.push({
      path: "/city/outChinaCity"
    })
  }

}


</script>

<style lang="less" scoped>

</style>
