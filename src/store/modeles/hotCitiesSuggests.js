import {defineStore} from "pinia";
import getHotSuggests from "../../services/modules/homeHotSuggests.js";

const useHotCitiesStore = defineStore("HotCities", {
    state() {
        return {
            HotCitiesNames: [],
            HotCitiesBackColor: "",
            HotCitiesColor: "",
            key: true
        }
    },

    actions: {
        getHotCitiesSuggests() {
            if (this.key === true) {
                getHotSuggests().then(res => {
                    res.data.map(item => {
                        this.HotCitiesNames.push(item)
                        this.HotCitiesColor = item.tagText.color
                        this.HotCitiesBackColor = item.tagText.background.color
                        this.key = false
                    })
                })
            }
        }
    }
})


export default useHotCitiesStore
