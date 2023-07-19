import { createRouter, createWebHistory } from 'vue-router';
import App from "./App.vue"
import Gys from "./gys.vue"

const routes = [
    {
        path: '/',
        component: App
    },
];

const router = createRouter({
    history: createWebHistory(window.location.pathname),
    base: '/sjzl/',
    routes
});

export default router;
