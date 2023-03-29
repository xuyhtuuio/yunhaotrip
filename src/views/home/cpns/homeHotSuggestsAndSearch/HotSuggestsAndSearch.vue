<template>
  <div class="outer">
    <div class="hot">
      <div class="hotCities" v-for="item in HotCitiesStore.HotCitiesNames">
        <div class="innerWorld">
          {{ item.tagText.text }}
        </div>
      </div>
    </div>

    <div class="section search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import getHotSuggests from "../../../../services/modules/homeHotSuggests"
import {ref} from "vue";
import useHotCitiesStore from "../../../../store/modeles/hotCitiesSuggests.js";
import {useRouter} from "vue-router";

const HotCitiesData = ref("")

const HotCitiesStore = useHotCitiesStore();
HotCitiesStore.getHotCitiesSuggests();
const bckColor = HotCitiesStore.HotCitiesBackColor

let router = useRouter();

function searchBtnClick() {
  router.push({
    path: "/search"
  })
}
</script>

<style lang="less" scoped>


.hot {
  margin-top: 10px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100px;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 12px;
  padding-right: 20px;

  .hotCities {
    text-align: center;
    //width: 100px;
    height: 28px;
    line-height: 28px;
    margin: 0 7px;
    background-color: #F1F3F5;
    color: #3F4954;
    border-radius: 20px;

    .innerWorld {
      padding: 0 5px;
      font-size: 13px;
    }
  }
}


.search-btn {
  box-sizing: border-box;

  .btn {
    width: 91.2vw;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
    margin: 10px auto;
  }
}
</style>
