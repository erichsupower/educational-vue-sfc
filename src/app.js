// Main CSS：網站主要樣式
import "./assets/main.css";
// App.vue：主要 component
import App from "./app.vue";
// Vue router
import router from "./router.js";
// import Vue.js
import { createApp } from "vue";
// 初始化 Vue.js
const app = createApp(App);
// 使用 router
app.use(router);
// 將 Vue 置入 #app
app.mount("#app");
