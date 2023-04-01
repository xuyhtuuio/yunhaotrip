import {onMounted, onUnmounted, ref} from "vue";
import useCitiesContent from "../store/modeles/citiesContent/houseList.js";
import useHideReach from "../store/hideSearch.js";
import hideSearch from "../store/hideSearch.js";

const hideReach = useHideReach();
const citiesStore = useCitiesContent();
export default function getScroll() {
    let clienttop = ref(0)
    let clientheightBig = ref(0)
    let disTop = 0
    let key = ref(false)
    let isShowSearch = false
    let watchScroll = (event) => {
        clienttop.value = document.documentElement.scrollTop
        clientheightBig.value = document.documentElement.scrollHeight
        let clientHeight = document.documentElement.clientHeight
        if (clientHeight + clienttop.value >= clientheightBig.value) {
            console.log("到底部了")
            key.value = true
        }
    }

    let watchReach = (event) => {
        disTop = document.documentElement.scrollTop
        if (disTop > 500) {
            hideReach.isHidden = true;
        }
        if (disTop < 500 && disTop !== null) {
            hideReach.isHidden = false
        }
    }

    onMounted(() => {
        window.addEventListener("scroll", watchScroll)
        window.addEventListener("scroll", watchReach)
    })

    onUnmounted(() => {
        window.removeEventListener("scroll", watchScroll)
        window.removeEventListener("scroll", watchReach)
    })
    return {key}
}




