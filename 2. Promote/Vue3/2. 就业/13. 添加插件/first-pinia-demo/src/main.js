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
import {
  myPiniaPlugin1,
  myPiniaPlugin2,
  myPiniaPlugin3,
  myPiniaPlugin4,
} from "./plugins";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 创建pinia实例
const pinia = createPinia();

// 引入自定义插件
pinia.use(myPiniaPlugin1);
pinia.use(myPiniaPlugin2);
pinia.use(myPiniaPlugin3);
pinia.use(myPiniaPlugin4);
pinia.use(piniaPluginPersistedstate);

createApp(App).use(router).use(pinia).mount("#app");
