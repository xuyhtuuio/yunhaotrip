<template>
  <div class="HomeContent">
    <div class="title">热门精选</div>
<!--    <button @click="emitPage">点我请求不同的数据</button>-->
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

const citiesStore = useCitiesContent()

function emitPage() {
  citiesStore.page++

}

citiesStore.getHouseContentList().then(finish => {
  console.log(finish)
})

</script>

<style lang="less" scoped>
.HomeContent {
  //width: 300px;
  //height: 300px;
  box-sizing: border-box;
  margin-top: 10px;

  .title {
    font-size: 20px;
    padding-left: 35px;
  }

  .content {
    margin-top: 15px;
    padding-left: 10px;
    display: flex;
    flex-wrap: wrap;
  }

}
</style>
