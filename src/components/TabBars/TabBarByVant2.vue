<template>
  <div class="TabBar">
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" @click="jumpHome(active)"
                       to="/home">
        <span>家</span>
        <template #icon="props">
          <img :src="props.active ?
          `/src/assets/img/tabbar/tab_home_active.png`
          : `/src/assets/img/tabbar/tab_home.png`"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item @click="jumpOrder(active)" to="/order">
        <span>订单</span>
        <template #icon="props">
          <img :src="props.active ?
          `/src/assets/img/tabbar/tab_order_active.png`
          : `/src/assets/img/tabbar/tab_order.png`"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item @click="jumpFavor(active)" to="/favor">
        <span>收藏</span>
        <template #icon="props">
          <img :src="props.active ?
          `/src/assets/img/tabbar/tab_favor_active.png`
          : `/src/assets/img/tabbar/tab_favor.png`"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item @click="jumpMessage(active)" to="/message">
        <span>消息</span>
        <template #icon="props">
          <img :src="props.active ?
          `/src/assets/img/tabbar/tab_message.png`
          : `/src/assets/img/tabbar/tab_message.png`"/>
        </template>
      </van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script setup>
import {ref, computed} from "vue";
import {useRouter} from "vue-router";

const state = ref(0)
const router = useRouter()
const active = ref(0)

function jumpHome(type) {
  state.value = type
  router.push({
    path: "/home"
  })
}

function jumpOrder(type) {
  state.value = type
  router.push({
    path: "/order"
  })
}

function jumpMessage(type) {
  state.value = type
  router.push({
    path: "/message"
  })
}

function jumpFavor(type) {
  state.value = type
  router.push({
    path: "/favor"
  })
}


const gestate = computed(() => {
  if (state.value === 0) {
    return 0
  }
  if (state.value === 1) {
    return 1
  }
  if (state.value === 2) {
    return 2
  }
  if (state.value === 3) {
    return 3
  }

})

</script>

<style lang="less" scoped>
.TabBar {
  img {
    height: 30px;
  }
}

</style>





