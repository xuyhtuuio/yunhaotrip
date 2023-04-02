import {defineStore} from "pinia";

const useHideLoading = defineStore("loading", {
    state() {
        return {
            inHideLoading: true
        }
    }
})

export default useHideLoading

