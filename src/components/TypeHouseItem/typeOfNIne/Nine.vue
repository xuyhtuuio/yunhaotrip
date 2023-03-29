<template>
  <div class="Nine">
    这是9的时候 {{ Props.intro }}
  </div>
</template>

<script setup>

import {defineProps} from "vue"

const Props = defineProps({
  intro: {
    default: {}
  }
})
</script>

<style lang="less" scoped>

</style>
