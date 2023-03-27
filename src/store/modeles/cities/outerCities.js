import {defineStore} from "pinia";
import getCity from "../../../services/modules/city.js";

let useOuterCities = defineStore("outerCities", {
    state() {
        return {
            cities: [],
            hotCity: [],
            cityTitleIn: "",
            cityTitleOut: "",
        }
    },

    actions: {
        getCityData() {
            const cityData = getCity();
            cityData.then(res => {
                this.cityTitleIn = res.data.cityGroupOverSea.title
                this.cityTitleOut = res.data.cityGroupOverSea.title
                this.cities = [...res.data.cityGroupOverSea.cities]
                this.hotCity = [...res.data.cityGroupOverSea.hotCities]
            })
        }
    }
});

export default useOuterCities
