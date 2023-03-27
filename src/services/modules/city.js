import MyAxios from "../requset/MyAxios.js"

function getCity() {
    return MyAxios.get({
        url: "/city/all"
    })
}

export default getCity
