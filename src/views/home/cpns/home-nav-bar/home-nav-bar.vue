<template>
<div>
  <div class="nav-bar">
    <div class="title">欢迎光临! 云皓旅店</div>
  </div>
  <div class="picture">
    <img class="inner_img" :src="Props.src">
  </div>
</div>
</template>

<script setup>
import {defineProps} from "vue"

const Props = defineProps({
  src : {
    type : String,
  }
})
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    padding-top:10px ;
    color: var(--primary-color);
    font-size: 20px;
    font-family: "Times New Roman", sans-serif;
    text-shadow: 2px 2px 9px #94894c;
  }

  .picture {
    width: 100%;
  }

}
.inner_img {
  width: 100%;
  margin-top: 20px ;
}

</style>
