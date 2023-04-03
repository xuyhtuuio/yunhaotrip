<template>
  <div class="specCity">
    <van-nav-bar
        title="🏠"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <!--    这是具体的页面-->
    <!--    houseId: {{ citiesContentStore.currentHouseId }}-->
    <!--    <div>houseIdByRoute: {{ $route.params.houseId }}</div>-->

  </div>

  <van-swipe :autoplay="3000" lazy-render :height="200">
    <van-swipe-item v-for="item in details.imgList" :key="item">
      <img :src="item.url"/>
    </van-swipe-item>

    <template #indicator="{ active, total }">
      <div class="custom-indicator">
        {{ active + 1 }}/{{ total }}
        <template v-for="pict in _">
          <span class="intro"> </span>
        </template>
      </div>
    </template>
  </van-swipe>
</template>

<script setup>
import useCitiesContent from "../../../store/modeles/citiesContent/houseList.js";
import useHideLoading from "../../../store/hideLoading.js";
import usehideLoading from "../../../store/hideLoading.js";
import getDetailsByHouseId from "../../../services/modules/getDetailsByHouseId.js";
import useDetails from "../../../store/modeles/houseDetails/houseDetails.js";

let hideLoading = usehideLoading();
hideLoading.inHideLoading = false
let citiesContentStore = useCitiesContent();
let details = useDetails()

const onClickLeft = () => history.back();
const pattern = new RegExp("[\u4E00-\u9FA5]+");

getDetailsByHouseId(citiesContentStore.currentHouseId).then(res => {
  details.imgList = [...res.data.mainPart.topModule.housePicture.housePics]

  function integrate() {
    const total = []
    const group = {}
    details.imgList.map((item, index) => {
      total.push(formatHouseType(item.title))
    })
    total.map((item, index) => {
      group[item] = []
    })
    Object.keys(group).map((key, index) => {
      total.map((everyType, index) => {
        if (key === everyType) {
          group[key].push(everyType)
        }
      })
    })
    return group
  }

  const groupByType = integrate()
  console.log(groupByType)


  function formatHouseType(houseType) {
    const formatedHouseType = []
    houseType.toString().split("").map((item, index) => {
      if (pattern.test(item)) {
        formatedHouseType.push(item)
      }
    })
    return formatedHouseType.join("")
  }
})

</script>

<style lang="less" scoped>
.specCity {
  --van-font-size-md: 18px;
  --van-nav-bar-title-font-size: 25px;
  //position: relative;
  //

  :deep(.van-swipe) {
    margin-top: 20px;
    background-size: contain;
  }
}

//
img {
  width: 100%;
  height: 100%;
}


.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  //background: rgba(0, 0, 0, 0.1);
}

</style>
