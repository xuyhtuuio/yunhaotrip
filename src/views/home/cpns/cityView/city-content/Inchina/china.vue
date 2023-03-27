<template>
  <div class="chinaCity">
    <div class="hotTitle">热门</div>
    <div class="hotCity">
      <div class="hot" v-for="hotCity in cityStore.hotCity" @click="emitYourCity(hotCity.cityName)">
        {{ hotCity.cityName }}
      </div>
    </div>
    <van-index-bar :sticky="true">
      <template v-for="city in cityStore.cities">
        <van-index-anchor :index="city.group"/>
        <template v-for="specCity in city.cities">
          <van-cell :title="specCity.cityName" @click="emitYourCity(specCity.cityName)"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import useCities from "../../../../../../store/modeles/cities/InnerCities.js";
import {ref} from "vue";
import {useRouter} from "vue-router";


const cityStore = useCities()
let router = useRouter();
//获取数据
cityStore.getCityData()


function emitYourCity(YourChoose) {
  cityStore.YourChooseCity = YourChoose;
  router.push({
    path: "/home"
  })
}

</script>

<style lang="less" scoped>
.hotTitle {
  font-size: 20px;
  padding-left: 20px;
  font-weight: bolder;
}

.hotCity {
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
  margin: 20px 30px;

  .hot {
    height: 30px;
    width: 69px;
    background-color: #fff4ec;
    margin: 0 20px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
}
</style>
