// Vue Router 路由設定
// 線上參考文件：https://book.vue.tw/CH4/4-2-route-settings.html

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    // 開啟功能：HTML5 (History API) Mode
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./components/HomeComponent.vue"),
        },
        {
            path: "/about/:type",
            name: "about",
            component: () => import("./components/AboutComponent.vue"),
        },
    ],
});

export default router;
