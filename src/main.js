import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/ui/BaseCard";
import BaseButton from "./components/ui/BaseButton";
import BaseAlert from "./components/ui/BaseAlert";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);

const options = {
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes!'
};

app.use(VueSweetalert2, options);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-alert", BaseAlert);

app.mount("#app");
