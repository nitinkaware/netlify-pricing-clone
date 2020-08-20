import { createRouter, createWebHistory } from 'vue-router'
import Home from './Pages/Home.vue'
import Netlify from './Pages/Netlify.vue'
import Dashboard from './Pages/Dashboard.vue'
import Login from './Pages/Login.vue'
import Interview from './Pages/Interview.vue'
import Modals from './Pages/Modals.vue'
import Forms from './Pages/Forms.vue'
import AppSetting from './Pages/AppSetting.vue'

const routes = [
    { path: "/", component: Home },
    { path: "/dashboard", component: Dashboard },
    { path: "/modals", component: Modals },
    { path: "/netlify", component: Netlify },
    { path: "/login", component: Login },
    { path: "/interview", component: Interview },
    { path: "/forms", component: Forms },
    { path: "/app-setting", component: AppSetting },
];

export default createRouter({
    history: createWebHistory(),
    routes: routes,
})