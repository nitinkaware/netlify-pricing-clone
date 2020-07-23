import { createRouter, createWebHistory } from 'vue-router'
import Home from './App.vue'
import Netlify from './Pages/Netlify.vue'

const routes = [
    { path: "/", component: Home },
    { path: "/netlify", component: Netlify },
];

export default createRouter({
    history: createWebHistory(),
    routes: routes,
})