import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import store from "./store/index.js";
import "./assets/css/font.css";
import "./assets/css/style.css";
import "./assets/css/responsives.css";

library.add(faUserSecret);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.config.productionTip = false;

app
  .use(router)
  .use(store)
  .mount("#app");
