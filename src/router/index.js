import {createRouter, createWebHashHistory} from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: () => import("../views/home/home.vue"),
            meta: {
                appearBar: true,
            }
        },
        {
            path: "/favor",
            component: () => import("../views/favor/favor.vue")
        },
        {
            path: "/order",
            component: () => import("../views/order/order.vue")
        },
        {
            path: "/message",
            component: () => import("../views/message/message.vue")
        },
        {
            path: "/city",
            redirect: "/city/chinaCity"
        },
        {
            path: "/city",
            component: () => import("../views/home/cpns/cityView/city.vue"),
            meta: {
                hideBar: false,
            },
            children: [
                {
                    path: "chinaCity",
                    component: () => import("../views/home/cpns/cityView/city-content/Inchina/china.vue")
                },
                {
                    path: "outChinaCity",
                    component: () => import("../views/home/cpns/cityView/city-content/outchina/outChina.vue")
                }
            ]
        },

    ]
})

export default router
