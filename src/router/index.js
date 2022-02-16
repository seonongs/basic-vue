import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import SimpleVue from "@/views/SimpleVue.vue";
import ParentsView from "@/views/ParentsView";
import UserView from "@/views/UserView";
import TableView from "@/views/TableView"
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
        path: "/userView",
        component: UserView,
        name: "UserView",
    },
    {
        path: "/TableView",
        component: TableView,
        name: "TableView",
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
