import {defineStore} from "pinia";
import getHouseList from "../../../services/modules/houseList.js";


const useCitiesContent = defineStore("citiesContent", {
    state() {
        return {
            houseList: [],
            page: 1,

        }
    },
    actions: {
        async getHouseContentList() {
            // this.houseList = [...(await getHouseList(this.page)).data]
            const resultData = (await getHouseList(this.page)).data
            resultData.forEach(item => {
                this.houseList.push(item)
            })

            // console.log(resultData)
            return `已获取房间列表信息,第${this.page}页数据`
        }
    }
})

export default useCitiesContent
