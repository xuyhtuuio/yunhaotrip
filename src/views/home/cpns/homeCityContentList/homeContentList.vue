<template>
  <div class="HomeContent">
    <div class="title">热门精选</div>
    <div class="content">
      <template v-for="(item, index) in citiesStore.houseList" :key="item.data.houseId">
        <Nine v-if="item.discoveryContentType === 9"
              :Data="item.data"
        />
        <Three v-else :Data="item.data" src="./src/assets/img/home/location.png"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import useCitiesContent from "../../../../store/modeles/citiesContent/houseList.js";
import Nine from "../../../../components/TypeHouseItem/typeOfNIne/Nine.vue";
import Three from "../../../../components/TypeHouseItem/typeOfThree/Three.vue";
import getScroll from "../../../../hooks/getScroll.js";
import {ref, watch} from "vue";

const citiesStore = useCitiesContent();
let isNext = ref(false)
let {key} = getScroll()

watch(key, (newKey) => {
  if (newKey) {
    citiesStore.page++
    citiesStore.getHouseContentList().then(finish => {
      key.value = false
      console.log(finish)
    })
  }
})
citiesStore.getHouseContentList().then(finish => {
  console.log(finish)
})
</script>

<style lang="less" scoped>

.HomeContent {
  box-sizing: border-box;
  margin-top: 10px;

  .title {
    font-size: 24px;
    padding-left: 35px;
    font-weight: bolder;
  }

  .content {
    margin-top: 15px;
    padding-left: 10px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
