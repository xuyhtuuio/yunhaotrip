<template>
  <div class="tab-control">
    <!--    <van-tabs v-model:active="active">-->
    <!--      <van-tab v-for="index in 4" :title="'标签 ' + index">-->
    <!--&lt;!&ndash;        内容 {{ index }}&ndash;&gt;-->
    <!--      </van-tab>-->
    <!--    </van-tabs>-->
    <van-tabs v-model:active="active" scrollspy sticky>
      <van-tab v-for="item in arrTab" :title="item">
        内容 {{ item }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {showToast} from 'vant';

const active = ref(0);
const onClickTab = ({title}) => showToast(title);

const arrTab = ["房屋设施", "房屋介绍", "热门评论", "预定须知"]
</script>

<style lang="less">
.tab-control {
  --van-tabs-line-height: 55px;
}
</style>

