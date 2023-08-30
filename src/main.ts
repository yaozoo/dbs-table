/*
 * @Author: luyao
 * @Date: 2023-08-02 14:03:09
 * @LastEditTime: 2023-08-30 15:47:57
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /dbs-table/src/main.ts
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
const app = createApp(App);
app.use(ElementPlus, { size: "small" });
app.mount("#app");
