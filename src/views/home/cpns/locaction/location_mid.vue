<template>
  <div class="mid_location">
    <div class="outer">
      <div class="city">山东</div>
      <div class="MyLocation">
        <span class="text">我的位置</span>
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
</script>

<style lang="less" scoped>
.outer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;

  .city {
    margin-left: 20px;
    font-size: 3.4vh;
  }

  .MyLocation {
    display: flex;
    color: #666;
    margin-right: 28px;
    font-size: 3vh;


    .innerImg {
      height: 25px;
      position: relative;
      top: -4px;
      left: 5px;

    }
  }
}

</style>
