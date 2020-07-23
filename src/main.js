import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './assets/transitions.css'
import 'tailwindcss/tailwind.css'

createApp(App)
    .use(router)
    .mount('#app')
