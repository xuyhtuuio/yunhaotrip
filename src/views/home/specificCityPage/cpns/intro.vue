<template>
  <div class="intro">
    <div class="Intro">
      {{ Intro }}
    </div>
    <div class="tags">
      <template v-for="everyTag in tagList">
        <div class="everyTags"
             :style="{color:everyTag.tagText?.color,
             background:everyTag.tagText?.background.color}"
        >
          {{ everyTag.tagText?.text }}
        </div>
      </template>
    </div>
  </div>
  <div class="comment extra">
    <div class="left">
      <span class="score">{{ comment.overall }}</span>
      <span class="title">{{ comment.scoreTitle }}</span>
      <span class="brief">{{ comment.commentBrief }}</span>
    </div>
    <div class="right">
        <span class="count">
          {{ comment.totalCount }}条评论
          <van-icon name="arrow"/>
        </span>
    </div>
  </div>
  <div class="position extra">
    <div class="left address">
      {{ position.address }}
    </div>
    <div class="right">
      地图·周边
      <van-icon name="arrow"/>
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
let comment = ref("")
let position = ref("")

getDetailsByHouseId(citiesContentStore.currentHouseId).then(res => {
  Intro.value = res.data.mainPart.topModule.houseName;
  tagList.value = [...res.data.mainPart.topModule.houseTags];
  comment.value = res.data.mainPart.topModule.commentBrief;
  position.value = res.data.mainPart.topModule.nearByPosition
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
  flex-wrap: wrap;

  .everyTags {
    margin-right: 5px;
  }
}

.extra {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  margin: 12px 0;
  border-radius: 5px;
  font-size: 12px;
  background-color: #f5f7fa;

  .right {
    color: #ff9645;
  }
}

.comment {
  .score {
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }

  .title {
    color: #333;
    font-weight: 700;
    margin: 0 3px;
  }

  .brief {
    color: #666;
  }
}

.position {
  .address {
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }
}


</style>
