import {defineStore} from "pinia";

let useisHidden = defineStore("hideBar", {
    state() {
        return {
            isNotHidden: true,
        }
    },

    actions: {
        changeStateToHidden() {
            this.isNotHidden = false
        },
        changeStateToAppear() {
            this.isNotHidden = true
        }
    }
})

export default useisHidden
