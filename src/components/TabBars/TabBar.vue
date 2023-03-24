<template>
  <div class="TabBar">
    <div class="outer">
      <div class="home inner"
           :class="{current : gestate === `home`}"
           @click="jumpHome(`home`)"
      >
        <img :src="gestate === `home` ?
        `/src/assets/img/tabbar/tab_home_active.png` :
        `/src/assets/img/tabbar/tab_home.png`">
        <span>家</span>
      </div>
      <div class="favor inner"
           :class="{current : gestate === `favor`}"
           @click="jumpFavor(`favor`)">
        <img :src="gestate === `favor` ?
        `/src/assets/img/tabbar/tab_favor_active.png` :
        `/src/assets/img/tabbar/tab_favor.png`">
        <span>收藏</span>
      </div>
      <div class="order inner"
           :class="{current : gestate === `order`}"
           @click="jumpOrder(`order`)"
      ><img :src="gestate === `order` ?
        `/src/assets/img/tabbar/tab_order_active.png` :
        `/src/assets/img/tabbar/tab_order.png`">
        <span>订单</span>
      </div>
      <div class="message inner"
           :class="{current : gestate === `message`}"
           @click="jumpMessage(`message`)"
      ><img :src="gestate === `message` ?
        `/src/assets/img/tabbar/tab_message.png` :
        `/src/assets/img/tabbar/tab_message.png`">
        <span>消息</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from "vue";
import {useRouter} from "vue-router";

const state = ref("")
const router = useRouter()

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
  if (state.value === "home") {
    return "home"
  }
  if (state.value === "favor") {
    return "favor"
  }
  if (state.value === "order") {
    return "order"
  }
  if (state.value === "message") {
    return "message"
  }

})

</script>

<style lang="less" scoped>
.outer {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;

  .home {
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .favor {
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .message {
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .order {
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


.current {
  color: orange;
}


img {
  width: 36px;
  background-size: contain;
}

.inner {
  display: flex;
  flex-direction: column;
}
</style>





