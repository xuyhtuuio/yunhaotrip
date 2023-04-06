<template>
  <div class="swip">
    <div class="outSwip">
      <van-swipe :autoplay="2000" lazy-render :height="200" @change="onChange">
        <van-swipe-item v-for="item in details.imgList" :key="item">
          <img :src="item.url"/>
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">
            <div class="everyType" v-for="(value, key, index) in groupByType" :key="key">
              <div class="inner" :class="{active : totalType[active] === key}" v-if="totalType[active] === key">
                {{ key }}:{{ value.length }}
              </div>
              <div class="inner" v-else>
                {{ key }}
              </div>
            </div>
          </div>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script setup>
import useCitiesContent from "../../../../store/modeles/citiesContent/houseList.js";
import useDetails from "../../../../store/modeles/houseDetails/houseDetails.js";
import {ref} from "vue";
import getDetailsByHouseId from "../../../../services/modules/getDetailsByHouseId.js";

let citiesContentStore = useCitiesContent();
let details = useDetails()
const groupByType = ref([])
const totalType = ref([])
const indexOfType = ref(1)

const pattern = new RegExp("[\u4E00-\u9FA5]+");

getDetailsByHouseId(citiesContentStore.currentHouseId).then(res => {
  details.imgList = [...res.data.mainPart.topModule.housePicture.housePics]

  function integrate() {
    const total = []
    const group = {}
    details.imgList.map((item, index) => {
      total.push(formatHouseType(item.title))
      totalType.value = total
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

  groupByType.value = integrate()
  console.log(groupByType.value)

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

img {
  width: 100%;
  height: 100%;
  //border-radius: 20px;
  border: 1px solid #fa8c1d;
  overflow: clip;
}

.custom-indicator {
  position: absolute;
  //width: 100px;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;

  .everyType {
    //width: 100%;
    margin-right: 5px;
    justify-content: space-around;
    text-align: center;

    .inner {
      //width: 100%;
      color: #e8e0d8;
      background-color: #999999;
      border-radius: 5px;
      font-size: 10px;

      &.active {
        background-color: #fff;
        color: #333
      }
    }
  }

  .outSwip {
    margin-top: 10px;
  }

}
</style>
