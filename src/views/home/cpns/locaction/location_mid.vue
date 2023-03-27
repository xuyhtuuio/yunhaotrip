<template>
  <div class="mid_location">
    <div class="outer">
      <div class="city" @click="changetoCity"><span class="innerLocation"></span>{{ cityStore.YourChooseCity }}</div>
      <div class="MyLocation">
        <span class="text" @click="getLocation">我的位置</span>
        <img class="innerImg" :src="Props.src">
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue"
import {useRouter} from "vue-router"
import useCities from "../../../../store/modeles/cities/InnerCities.js";


const router = useRouter();
const Props = defineProps({
  src: {
    type: String
  }
})
let cityStore = useCities();

function getLocation() {
  navigator.geolocation.getCurrentPosition(res => {
        console.log("获取成功", res)
      }, err => {
        console.log("获取失败", err)
      },
      {
        timeout: 3000
      });
}


function changetoCity() {
  router.push({
    path: "/city"
  })
}
</script>

<style lang="less" scoped>
.outer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;

  .city {
    margin-left: 36px;
    font-size: 3.2vh;

    .innerLocation {
      font-size: 10px;
      color: rgb(182, 150, 150);
    }

  }

  .MyLocation {
    display: flex;
    color: #666;
    margin-right: 28px;
    font-size: 2.3vh;


    .innerImg {
      height: 20px;
      position: relative;
      top: -4px;
      left: 5px;

    }
  }
}

</style>
