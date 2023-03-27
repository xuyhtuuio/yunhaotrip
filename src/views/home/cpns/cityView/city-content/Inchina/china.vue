<template>
  <div class="chinaCity">
    <van-index-bar>
      <van-index-anchor index="A"/>
      <van-cell title="文本"/>
      <van-cell title="文本"/>
      <van-cell title="文本"/>

      <van-index-anchor index="B"/>
      <van-cell title="文本"/>
      <van-cell title="文本"/>
      <van-cell title="文本"/>
    </van-index-bar>

  </div>
</template>

<script setup>
import getCity from "../../../../../../services/modules/city"
import {ref} from "vue";

const cityData = ref()
const data = getCity()
data.then(res => {
  cityData.value = res
})
</script>

<style lang="less" scoped>

</style>
