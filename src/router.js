import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home";
import Profile from "./views/Profile";
import Messages from "./views/Messages";
import Activity from "./views/Activity";
import Settings from "./views/Settings";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home },
    { path: "/profile", component: Profile },
    { path: "/messages", component: Messages },
    { path: "/Activity", component: Activity },
    { path: "/Settings", component: Settings },
];

export const router = new VueRouter({
    mode: "history",
    routes
});
