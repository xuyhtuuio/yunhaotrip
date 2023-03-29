import getCategoriesDate from "../../services/modules/categories.js";
import {defineStore} from "pinia";

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],

        currentPage: 1,
        houselist: []
    }),
    actions: {
        async fetchCategoriesData() {
            const res = await getCategoriesDate()
            this.categories = res.data
        },
    }
})

export default useHomeStore

