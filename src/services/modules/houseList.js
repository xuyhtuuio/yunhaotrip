import MyAxios from "../requset/MyAxios.js";

function getHouseList(page) {
    return MyAxios.get({
        url: "/home/houselist",
        params: {
            page,
        }
    })
}

export default getHouseList
