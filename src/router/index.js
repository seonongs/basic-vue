import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import SimpleVue from "@/views/SimpleVue.vue";
import TestCase from "@/views/TestCase";
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
    },    {
        path: "/testCase",
        component: TestCase,
        name: "TestCase",
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
