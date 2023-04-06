<template>
  <div class="specCity">
    <van-nav-bar
        title="眼光 不错"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <swip/>
    <intro/>
    <detail-section/>
    <detail-section/>
  </div>
</template>

<script setup>
import usehideLoading from "../../../store/hideLoading.js";
import Swip from "./cpns/swip.vue";
import Intro from "./cpns/intro.vue";
import DetailSection from "../../../components/detail-section/detailSection.vue";
import useHideBar from "../../../store/modeles/hideBar.js";

let hideLoading = usehideLoading();
let HideBar = useHideBar()
hideLoading.inHideLoading = false
HideBar.isNotHidden = false

const onClickLeft = () => history.back();
</script>

<style lang="less" scoped>
.specCity {
  --van-font-size-md: 18px;
  --van-nav-bar-title-font-size: 20px;

  :deep(.van-swipe-item) {
    margin-top: 20px;
  }
}

</style>
