import { createRouter, createWebHistory } from 'vue-router'
import Home from './Pages/Home.vue'
import Netlify from './Pages/Netlify.vue'
import AdminPanel from './Pages/AdminPanel.vue'
import Login from './Pages/Login.vue'
import Interview from './Pages/Interview.vue'

const routes = [
    { path: "/", component: Home },
    { path: "/netlify", component: Netlify },
    { path: "/admin-panel", component: AdminPanel },
    { path: "/login", component: Login },
    { path: "/interview", component: Interview },
];

export default createRouter({
    history: createWebHistory(),
    routes: routes,
})