import {onMounted, onUnmounted, ref} from "vue";
import useCitiesContent from "../store/modeles/citiesContent/houseList.js";
import useHideReach from "../store/hideSearch.js";
import hideSearch from "../store/hideSearch.js";
import {throttle} from "underscore"

const hideReach = useHideReach();
const citiesStore = useCitiesContent();
export default function getScroll() {
    let clienttop = ref(0)
    let clientheightBig = ref(0)
    let disTop = 0
    let disTop1 = 0
    let key = ref(false)
    let isShowSearch = false

    let watchScroll = throttle((event) => {
        clienttop.value = document.documentElement.scrollTop
        clientheightBig.value = document.documentElement.scrollHeight
        let clientHeight = document.documentElement.clientHeight
        if (clientHeight + clienttop.value >= clientheightBig.value) {
            console.log("到底部了")
            key.value = true
        }
    }, 100)

    let watchReach = throttle((event) => {
        disTop = document.documentElement.scrollTop
        if (disTop > 500) {
            hideReach.isHidden = true;
            hideReach.isHiddenTab = true;
        }
        if (disTop < 500 && disTop !== null) {
            hideReach.isHidden = false
            hideReach.isHiddenTab = false
        }
    }, 100)

    let watchTab = throttle((event) => {
        disTop1 = document.documentElement.scrollTop
        if (disTop1 > 300) {
            hideReach.isHiddenTab = true;
        }
        if (disTop1 < 300 && disTop !== null) {
            hideReach.isHiddenTab = false
        }
    }, 100)

    onMounted(() => {
        window.addEventListener("scroll", watchScroll)
        window.addEventListener("scroll", watchReach)
        window.addEventListener("scroll", watchTab)
    })

    onUnmounted(() => {
        window.removeEventListener("scroll", watchScroll)
        window.removeEventListener("scroll", watchReach)
        window.removeEventListener("scroll", watchTab)
    })
    return {key}
}




