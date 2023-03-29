import MyAxios from "../requset/MyAxios.js";

function getCategoriesDate() {
    return MyAxios.get({
        url: "/home/categories"
    })
}

export default getCategoriesDate
