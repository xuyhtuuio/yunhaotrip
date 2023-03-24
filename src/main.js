import { createApp } from 'vue'
import App from './App.vue'
import "normalize.css"
import "./assets/css/index.css"
import pinia from "./store/index.js";
import router from "./router/index.js";

createApp(App).use(router).use(pinia).mount('#app')
