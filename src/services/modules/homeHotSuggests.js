import MyAxios from "../requset/MyAxios.js";

function getHotSuggests() {
    return MyAxios.get({
        url: "/home/hotSuggests"
    })
}

export default getHotSuggests
