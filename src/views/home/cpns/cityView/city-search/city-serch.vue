<template>
  <div class="search">
    <van-search
        v-model="value"
        placeholder="城市/区域/位置"
        input-align="left"
        shape="round"
        background="#FFFCFCFF"
        @update:model-value="change"
        show-action="true"
        @cancel="jumpToHome"
    />

  </div>
</template>

<script setup>
import {useRouter} from "vue-router"
import {ref} from "vue"

const value = ref("")
const router = useRouter();

function change() {
  console.log(value.value)
}


function jumpToHome() {
  router.push({
    path: "/home"
  })
}

</script>

<style lang="less" scoped>
.search {

}


</style>
