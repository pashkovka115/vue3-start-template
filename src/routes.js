import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";

import HomePage from "@/pages/Home.vue";
import AboutPage from "@/pages/About.vue";

// createWebHistory - url без #
// createWebHashHistory - url с #

const routeHistory = createWebHashHistory();

const routes = createRouter({
    history: routeHistory,
    routes:[
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/about',
            component: AboutPage
        },
    ]
});

export default routes;
