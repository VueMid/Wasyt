import {
    Toast,
    options
} from './libs/toastification.js';
import "vue-toastification/dist/index.css";
import {
    createApp
} from 'vue';
import {
    createPinia
} from 'pinia';
import './assets/css/fonts.css';
import './assets/css/style.css';
import './assets/css/tailwind.css';
import App from './App.vue';
import router from './router';
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Toast, options);
app.mount('#app');