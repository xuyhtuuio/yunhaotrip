<template>
  <div class="specCity">
    <div class="tab-control" v-if="hideReach.isHiddenTab">
      <tabcontral/>
    </div>
    <van-nav-bar
        title="眼光 不错"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <swip/>
    <intro/>
    <facility :house-facility="faclity"/>
    <landlord :landlord="landlord"/>
    <comment :comment="comment"/>
    <notice :order-rules="notice"/>
    <introduction :price-intro="introduction"/>
    <div class="footer">
      <img src="../../../assets/img/detail/icon_ensure.png" alt="">
      <div class="text">云皓旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import usehideLoading from "../../../store/hideLoading.js";
import Swip from "./cpns/swip.vue";
import Intro from "./cpns/intro.vue";
import DetailSection from "../../../components/detail-section/detailSection.vue";
import useHideBar from "../../../store/modeles/hideBar.js";
import getDetailsByHouseId from "../../../services/modules/getDetailsByHouseId.js";
import useCitiesContent from "../../../store/modeles/citiesContent/houseList.js";
import {ref} from "vue";
import Facility from "./cpns/facility.vue";
import Landlord from "./cpns/landlord.vue";
import Comment from "./cpns/comment.vue";
import Notice from "./cpns/notice.vue";
import Tabcontral from "../../../components/tabContral/tabcontral.vue";
import useHideReach from "../../../store/hideSearch.js";
import getScroll from "../../../hooks/getScroll.js";
import Introduction from "./cpns/introduction.vue";

//获取滚动信息
getScroll()

let hideLoading = usehideLoading();
let HideBar = useHideBar()
let hideReach = useHideReach();
hideLoading.inHideLoading = false
HideBar.isNotHidden = false
let faclity = ref()
let landlord = ref()
let comment = ref()
let intro = ref()
let notice = ref()
let introduction = ref()
const onClickLeft = () => history.back();
getDetailsByHouseId(useCitiesContent().currentHouseId).then(res => {
  faclity.value = res.data?.mainPart.dynamicModule.facilityModule.houseFacility
  landlord.value = res.data?.mainPart.dynamicModule.landlordModule
  comment.value = res.data?.mainPart.dynamicModule.commentModule
  intro.value = res.data?.mainPart.introductionModule
  notice.value = res.data?.mainPart.dynamicModule.rulesModule.orderRules
  introduction.value = res.data?.mainPart.introductionModule
})
</script>

<style lang="less" scoped>
.specCity {
  --van-font-size-md: 18px;
  --van-nav-bar-title-font-size: 20px;

  :deep(.van-swipe-item) {
    margin-top: 20px;
  }
}


.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}

.tab-control {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

</style>
