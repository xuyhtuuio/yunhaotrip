import {onMounted, onUnmounted, ref} from "vue";
import useCitiesContent from "../store/modeles/citiesContent/houseList.js";


const citiesStore = useCitiesContent();
export default function getScroll() {
    let clienttop = ref(0)
    let clientheightBig = ref(0)
    let key = ref(false)
    let watchScroll = (event) => {
        clienttop.value = document.documentElement.scrollTop
        clientheightBig.value = document.documentElement.scrollHeight
        let clientHeight = document.documentElement.clientHeight
        if (clientHeight + clienttop.value >= clientheightBig.value) {
            console.log("到底部了")
            // citiesStore.page++
            // citiesStore.getHouseContentList().then(finish => {
            //     console.log(finish)
            // })
            key.value = true
        }
    }
    onMounted(() => {
        window.addEventListener("scroll", watchScroll)
    })

    onUnmounted(() => {
        window.removeEventListener("scroll", watchScroll)
    })
    return {key}
}




