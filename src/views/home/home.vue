<template>
  <div class="home">
    <HomeNavBar src="./src/assets/img/home/banner.png"/>
    <location_mid src="./src/assets/img/home/icon_location.png"/>
    <home_search/>
    <HotSuggestsAndSearch/>
    <categories/>
    <div class="world" v-if="hideSearch.isHidden">
      <van-search
          v-model="value"
          show-action
          label="地址"
          placeholder="请输入搜索关键词"
          @search="onSearch"
      >
        <template #action>
          <div @click="onClickButton">搜索</div>
        </template>
      </van-search>
    </div>
    <home-content-list/>
  </div>
</template>

<script setup>
import {ref} from "vue";
import HomeNavBar from "./cpns/home-nav-bar/home-nav-bar.vue";
import Location_mid from "./cpns/locaction/location_mid.vue";
import Home_search from "./cpns/home-date-range/home_date_range.vue";
import useisHidden from "../../store/modeles/hideBar.js";
import MyAxios from "../../services/requset/MyAxios.js";
import HotSuggestsAndSearch from "./cpns/homeHotSuggestsAndSearch/HotSuggestsAndSearch.vue";
import Categories from "./cpns/categories/categories.vue";
import HomeContentList from "./cpns/homeCityContentList/homeContentList.vue";
import usehideSearch from "../../store/hideSearch.js";
import {Toast} from "vant";

let useisHidden1 = useisHidden();
let hideSearch = usehideSearch()
useisHidden1.changeStateToAppear()
const value = ref('');
const onSearch = (val) => Toast(val);
const onClickButton = () => Toast(value.value);

</script>

<style lang="less" scoped>
.world {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>

