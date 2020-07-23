import { createRouter, createWebHistory } from 'vue-router'
import Home from './Pages/Home.vue'
import Netlify from './Pages/Netlify.vue'
import AdminPanel from './Pages/AdminPanel.vue'

const routes = [
    { path: "/", component: Home },
    { path: "/netlify", component: Netlify },
    { path: "/admin-panel", component: AdminPanel },
];

export default createRouter({
    history: createWebHistory(),
    routes: routes,
})