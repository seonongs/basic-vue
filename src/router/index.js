import { createWebHistory, createRouter } from "vue-router";
import SimpleVue from "@/views/SimpleVue.vue";
import ErrorPage from "@/views/ErrorPage.vue";

const routes = [
    {
        path: "/",
        name: "SimpleVue",
        component: SimpleVue,
    },
    {
        path: "/errorPage",
        name: "ErrorPage",
        component: ErrorPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
