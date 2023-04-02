import axios from "axios";
import {BASE_URL, TIMEOUT} from "./config.js"
import useHideLoading from "../../store/hideLoading.js";

const hideLoading = useHideLoading()

class MyAxios {
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL,
            timeout,
        })

        this.instance.interceptors.request.use((config) => {
            hideLoading.inHideLoading = true
            return config
        }, (err) => {
            console.log("出错了")
        })

        this.instance.interceptors.response.use((config) => {
            hideLoading.inHideLoading = false
            return config
        }, (err) => {
            console.log("出错了")
        })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({...config, method: "get"})
    }

    post(config) {
        return this.request({...config, method: "post"})
    }


}


export default new MyAxios(BASE_URL, TIMEOUT)
