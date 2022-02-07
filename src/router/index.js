import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import SimpleVue from "@/views/SimpleVue.vue";
import ErrorPage from "@/views/ErrorPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },    {
        path: "/simpleVue",
        name: "SimpleVue",
        component: SimpleVue,
    },
    {
        path: '/:pathMatch(.*)*',
        name: "ErrorPage",
        component: ErrorPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
