import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/ui/BaseCard";
import BaseButton from "./components/ui/BaseButton";
import BaseAlert from "./components/ui/BaseAlert";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-alert", BaseAlert);

app.mount("#app");
