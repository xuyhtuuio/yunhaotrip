<template>
  <div class="home-search-bar">
    <div class="outer">
      <div class="data_area">
        <div class="intoHotel">
          <div class="intoWorld">入住</div>
          <div class="dataChooseWhenInto">
            <van-cell :title="titleInHotel" :value="dateInHotel" @click="show = true"/>
            <van-calendar v-model:show="show" type="range" @confirm="onConfirm" ref="calendar"
                          :max-range="3"
                          :round="false"
            />
          </div>
        </div>
        <div class="date">
          共<span class="innerWorld">{{ rangeDate }}</span>晚
        </div>
        <div class="outHotel">
          <div class="outWorld">
            离店
          </div>
          <div class="dataChooseWhenOut">
            <van-cell :title="titleOutHotel" :value="dateInHotel" @click="show = true"/>
            <van-calendar v-model:show="show" type="range" @confirm="onConfirm"/>
          </div>
        </div>
      </div>
      <div class="price_people">
        <div class="price">价格不限</div>
        <div class="people">人数不限</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import format_date from "../../../../utils/date/format_date.js";
import {computeRangeDate} from "../../../../utils/date/comput_range_of_date.js";

const dateInHotel = ref('');
const dateOutHotel = ref("")
const titleInHotel = ref("");
const titleOutHotel = ref("");
const show = ref(false);
const calendar = ref(null)


const nowDate = ref(new Date());
const nextOneDate = ref(nowDate.value.setDate(nowDate.value.getDate() + 1))

const currentDate = format_date(nowDate.value)
const nextDate = format_date(nowDate.value.setDate(nowDate.value.getDate() + 1))

titleInHotel.value = currentDate
titleOutHotel.value = nextDate
//
// const dateObj = {
//   1: 31,
//   2: 28,
//   3: 31,
//   4: 30,
//   5: 31,
//   6: 30,
//   7: 31,
//   8: 31,
//   9: 30,
//   10: 31,
//   11: 30,
//   12: 31,
// }
// let StartMonth = ref(0)
// let StartDay = ref(0)
// let EndMonth = ref(0)
// let EndDay = ref(0)

const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;

function changeFormat(dateArr) {
  const result = dateArr.map((item, index) => {
    if (index === 0) {
      if (item < 10) {
        return "0" + item + "月"
      } else {
        return item + "月"
      }

    }
    if (index === 1) {
      if (item < 10) {
        return "0" + item + "日"
      } else {
        return item + "日"
      }

    }
  })

  return result.join("")
}

const rangeDate = computed(() => {
  return computeRangeDate(nowDate.value, nextOneDate.value)
})
const onConfirm = (values) => {
  const [start, end] = values;
  nowDate.value = end
  nextOneDate.value = start

  titleInHotel.value = format_date(start)
  titleOutHotel.value = format_date(end)
  show.value = false
};


// const rangeAboutDay = computed(() => {
//   let range = 0
//   if (StartDay.value > EndDay.value) {
//     for (let a in dateObj) {
//       if (a == StartMonth.value) {
//         range = dateObj[a] - StartDay.value + EndDay.value
//       }
//     }
//     return range
//   } else {
//     if (EndDay.value === StartDay.value) {
//       return 1
//     } else {
//       return EndDay.value - StartDay.value
//     }
//   }
// })
</script>

<style lang="less" scoped>
.data_area {
  display: flex;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
  border-top: 0.5px solid rgba(233, 234, 246, 0.71);
  border-bottom: 0.5px solid rgba(233, 234, 246, 0.71);
  justify-content: space-around;

  :deep(.van-cell__value) {
    display: none;
  }

  :deep(.van-cell__title, .van-cell__value) {
    font-size: 4vw;
    font-weight: bolder;
  }

  :deep(.van-cell__title) {
    position: relative;
    //right: 20px;
  }

  .intoHotel {
    //flex: auto;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    .intoWorld {
      //position: relative;
      //right: 23px;
      font-size: 13px;
      color: #8B97A2FF;
    }
  }

  .date {
    //flex: auto;
  }

  .outHotel {
    //flex: auto;
    display: flex;
    flex-direction: column;

    .outWorld {
      //position: relative;
      //right: 23px;
      font-size: 13px;
      color: #8B97A2FF;

      .dataChooseWhenOut {
        span {
          font-size: 100px;
        }
      }
    }
  }

  .date {
    line-height: 60.8px;
  }
}

.price_people {
  display: flex;
  //justify-content: space-between;
  border-bottom: 0.5px solid rgba(233, 234, 246, 0.71);
  padding-bottom: 12px;

  .price {
    //position: relative;
    //left: 40px;
    color: darkgray;
    font-size: 15px;
    font-style: italic;
    flex: auto;
    text-align: center;
  }

  .people {
    //position: relative;
    //right: 65px;
    color: darkgray;
    font-size: 15px;
    font-style: italic;
    flex: auto;
    text-align: center;
  }
}

.innerWorld {
  font-size: 25px;
  font-style: italic;
  font-stretch: ultra-condensed;
}
</style>
