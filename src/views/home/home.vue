<template>
  <keep-alive>
    <div class="home">
      <HomeNavBar src="./src/assets/img/home/banner.png"/>
      <location_mid src="./src/assets/img/home/icon_location.png"/>
      <home_search/>
      <HotSuggestsAndSearch/>
      <categories/>
      <div class="world" v-if="hideSearch.isHidden">
        <hide-search-bar/>
      </div>
      <home-content-list/>
    </div>
  </keep-alive>
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
import HideSearchBar from "../../components/hideSearchBar/hideSearchBar.vue";

let useisHidden1 = useisHidden();
let hideSearch = usehideSearch()
useisHidden1.changeStateToAppear()

</script>

<style lang="less" scoped>
.world {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  --van-search-input-height: 40px;
}
</style>

