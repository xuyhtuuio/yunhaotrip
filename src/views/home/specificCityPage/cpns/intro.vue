<template>
  <div class="intro">
    <div class="Intro">
      {{ Intro }}
    </div>
    <div class="tags">
      <template v-for="everyTag in tagList">
        <div class="everyTags">
          {{ everyTag.tagText?.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import getDetailsByHouseId from "../../../../services/modules/getDetailsByHouseId.js";
import useCitiesContent from "../../../../store/modeles/citiesContent/houseList.js";
import {ref} from "vue";

const citiesContentStore = useCitiesContent()

const Intro = ref("")
let tagList = ref([])

getDetailsByHouseId(citiesContentStore.currentHouseId).then(res => {
  Intro.value = res.data.mainPart.topModule.houseName;
  tagList.value = [...res.data.mainPart.topModule.houseTags];
  console.log(tagList.value)
  tagList.value.map(item => {
    console.log(item.tagText?.text)
  })
})

</script>

<style lang="less" scoped>
.Intro {
  font-weight: bolder;
  font-size: 5.5vw;
  box-sizing: border-box;
  padding: 20px 15px 15px 15px;
  text-align: justify;
}

.tags {
  display: flex;
  font-size: 10px;
  justify-content: left;
  padding: 0 15px 0 15px;


  .everyTags {
    margin-right: 5px;
    background-color: v-bind("");
  }
}


</style>
