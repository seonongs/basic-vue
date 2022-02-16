import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import ExampleView from "@/views/ExampleView.vue";
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
        path: "/example",
        component: ExampleView,
        name: "ExampleView",
    },
    {
        path: "/parents",
        component: ParentsView,
        name: "ParentsView",
    },
    {
        path: "/user",
        component: UserView,
        name: "UserView",
    },
    {
        path: "/table",
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
