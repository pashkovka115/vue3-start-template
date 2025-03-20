import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

// createWebHistory - url без #
// createWebHashHistory - url с #

const routeHistory = createWebHashHistory();

const routes = createRouter({
    history: routeHistory,
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        /*{
            path: '/:PathMatch(.*)*',
            component: <h1>404 Page Not Found</h1>,
        },*/
        {
            path: '/:CatchAll(.*)',
            name:'404',
            component: NotFoundPage,
        },
    ]
});

export default routes;
