import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import SimpleVue from "@/views/SimpleVue.vue";
import ParentsView from "@/views/ParentsView";
import ExampleView from "@/views/ExampleView";
import ErrorPage from "@/views/ErrorPage.vue";

const routes = [
    {
        path: "/",
        component: Home,
        name: "Home",
    },
    {
        path: "/simpleVue",
        component: SimpleVue,
        name: "SimpleVue",
    },
    {
        path: "/parentsView",
        component: ParentsView,
        name: "ParentsView",
    },
    {
        path: "/exampleView",
        component: ExampleView,
        name: "ExampleView",
    },
    {
        path: '/:pathMatch(.*)*',
        component: ErrorPage,
        name: "ErrorPage",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
