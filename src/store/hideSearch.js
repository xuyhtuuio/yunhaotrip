import {defineStore} from "pinia";

const useHideReach = defineStore("hideReach", {
    state() {
        return {
            isHidden: false,
            isHiddenTab: false,
        }
    },

})

export default useHideReach
