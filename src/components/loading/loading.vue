<template>
  <div class="loading" v-if="hideLoadingStore.inHideLoading" @click="cancelLoading">
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block">
          <img src="../../assets/img/home/full-screen-loading.gif" alt="">
        </div>
      </div>
    </van-overlay>


  </div>
</template>

<script setup>
import {ref} from "vue";
import useHideLoading from "../../store/hideLoading.js";

const show = ref(true)
const hideLoadingStore = useHideLoading()


function cancelLoading() {
  hideLoadingStore.inHideLoading = false
}
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

}

img {
  width: 100px;
  height: 100px;
}
</style>
