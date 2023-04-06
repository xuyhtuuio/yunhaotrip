<template>
  <div class="specCity">
    <van-nav-bar
        title="🏠"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <swip/>
    <intro/>
  </div>
</template>

<script setup>
import usehideLoading from "../../../store/hideLoading.js";
import Swip from "./cpns/swip.vue";
import Intro from "./cpns/intro.vue";

let hideLoading = usehideLoading();
hideLoading.inHideLoading = false

const onClickLeft = () => history.back();
</script>

<style lang="less" scoped>
.specCity {
  --van-font-size-md: 18px;
  --van-nav-bar-title-font-size: 25px;

  :deep(.van-swipe-item) {
    margin-top: 20px;
  }
}

</style>
