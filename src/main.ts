import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
const app = createApp(App);
app.use(ElementPlus, { size: "small" });
app.mount("#app");
