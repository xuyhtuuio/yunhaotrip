<template>
  <div class="home">
    <HomeNavBar src="./src/assets/img/home/banner.png"/>
    <location_mid src="./src/assets/img/home/icon_location.png"/>
    <home_search/>
  </div>
</template>

<script setup>
import {ref} from "vue";
import HomeNavBar from "./cpns/home-nav-bar/home-nav-bar.vue";
import Location_mid from "./cpns/locaction/location_mid.vue";
import Home_search from "./cpns/home-date-range/home_date_range.vue";
import useisHidden from "../../store/modeles/hideBar.js";
import MyAxios from "../../services/requset/MyAxios.js";

let useisHidden1 = useisHidden();
useisHidden1.changeStateToAppear()


</script>

<style lang="less" scoped>

</style>

