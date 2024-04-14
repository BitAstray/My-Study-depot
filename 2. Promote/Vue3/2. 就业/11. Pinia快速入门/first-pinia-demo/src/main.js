/*
 * @Author: Astray
 * @Date: 2023-09-27 13:20:59
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// 路由
import router from "@/router";

// 仓库

import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
