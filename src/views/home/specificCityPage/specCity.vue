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
    <facility :house-facility="faclity"/>
    <landlord :landlord="landlord"/>
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

let hideLoading = usehideLoading();
let HideBar = useHideBar()
hideLoading.inHideLoading = false
HideBar.isNotHidden = false
let faclity = ref()
let landlord = ref()
const onClickLeft = () => history.back();
getDetailsByHouseId(useCitiesContent().currentHouseId).then(res => {
  faclity.value = res.data.mainPart.dynamicModule.facilityModule.houseFacility
  landlord.value = res.data.mainPart.dynamicModule.landlordModule
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

</style>
