import { createApp } from "vue";
import { createPinia } from "pinia"; // npm install pinia avant
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// fichier avec tailwind, a installer
//https://tailwindcss.com/docs/guides/vite
import "./assets/index.css"; 

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount("#app");
