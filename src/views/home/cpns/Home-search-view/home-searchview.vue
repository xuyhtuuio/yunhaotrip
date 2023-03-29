<template>
  <div class="searchView">
    <div class="outer">
      <div class="title">这是模拟搜索页面</div>
      <div class="content">
        <div class="city">您的选择城市: {{ cityStore.YourChooseCity }}</div>
        <div class="location city">您的选择事件范围: 具体就是建立一个store管理时间的数据，然后再拿过来就完事了，麻烦不搞了！
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import useCities from "../../../../store/modeles/cities/InnerCities.js";

let cityStore = useCities();

</script>

<style lang="less" scoped>
.outer {
  .title {
    text-align: center;
    font-size: 30px;
    text-shadow: 2px 2px 9px #94894c;
    color: var(--primary-color);
  }

  .content {
    .city {
      font-size: 20px;
    }
  }
}
</style>
