<template>
  <div class="hideSearch">
    <van-search
        v-model="value"
        show-action
        label="地址"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        shape="square"
    >
      <template #action>
        <div @click="onClickButton">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {Toast} from "vant";

const value = ref('');
const onSearch = (val) => Toast(val);
const onClickButton = () => Toast(value.value);

</script>

<style lang="less" scoped>
.hideSearch {
  --van-search-background: linear-gradient(#ffb154, #fdf3ee);
}

</style>
