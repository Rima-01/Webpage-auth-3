import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// Set up Axios for HTTP requests
axios.defaults.baseURL = "http://127.0.0.1:8000"; // Your backend URL

const app = createApp(App);
app.use(router);
app.config.globalProperties.$http = axios; // Make Axios available globally
app.mount("#app");

