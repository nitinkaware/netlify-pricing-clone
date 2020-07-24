import { createRouter, createWebHistory } from 'vue-router'
import Home from './Pages/Home.vue'
import Netlify from './Pages/Netlify.vue'
import AdminPanel from './Pages/AdminPanel.vue'
import Login from './Pages/Login.vue'

const routes = [
    { path: "/", component: Home },
    { path: "/netlify", component: Netlify },
    { path: "/admin-panel", component: AdminPanel },
    { path: "/login", component: Login },
];

export default createRouter({
    history: createWebHistory(),
    routes: routes,
})