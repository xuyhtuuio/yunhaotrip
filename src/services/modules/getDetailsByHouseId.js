import MyAxios from "../requset/MyAxios.js";

function getDetailsByHouseId(houseId) {
    return MyAxios.get({
        url: "/detail/infos",
        params: {
            houseId,
        }
    })
}

export default getDetailsByHouseId
