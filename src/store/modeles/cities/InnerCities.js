import {defineStore} from "pinia"
import getCity from "../../../services/modules/city.js";

const useCities = defineStore("city", {
    state() {
        return {
            cities: [],
            hotCity: [],
            cityTitleIn: "",
            cityTitleOut: "",
            YourChooseCity: "山东",
        }
    },
    actions: {
        getCityData() {
            const cityData = getCity();
            cityData.then(res => {
                this.cityTitleIn = res.data.cityGroup.title
                this.cityTitleOut = res.data.cityGroupOverSea.title
                this.cities = [...res.data.cityGroup.cities]
                this.hotCity = [...res.data.cityGroup.hotCities]
            })
        }


    }

})

export default useCities
