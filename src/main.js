import './assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
// createApp(App).mount('#app')

app.use(router);
app.mount('#app');