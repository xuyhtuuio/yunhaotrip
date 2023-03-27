<template>
  <div class="content">
    <van-tabs v-model:active="active"
              @click-tab="jumpCity"
              type="line">
      <van-tab title="国内.港澳台"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const active = ref()

function jump() {
  console.log(active.value)
}

let router = useRouter();

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
