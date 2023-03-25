<template>
  <div class="mid_location">
    <div class="outer">
      <div class="city"><span class="innerLocation">位置: </span>山东</div>
      <div class="MyLocation">
        <span class="text" @click="getLocation">我的位置</span>
        <img class="innerImg" :src="Props.src">
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue"

const Props = defineProps({
  src: {
    type: String
  }
})


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
