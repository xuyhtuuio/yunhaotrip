import {defineStore} from "pinia";

const useDetails = defineStore("details", {
    state() {
        return {
            imgList: [],
        }
    }
})

export default useDetails
