import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home";
import Profile from "./views/Profile";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home },
    { path: "/profile", component: Profile },
];

export const router = new VueRouter({
    mode: "history",
    routes
});
