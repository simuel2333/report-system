import Vue from "vue"
import Router from "vue-router"
import Home from "../components/home/home.vue"
import login from "../components/login/login.vue"
import signUp from "../components/login/signUp.vue"
import p1 from "../components/permissionTest/p1.vue"
import p2 from "../components/permissionTest/p2.vue"
import "../css/reset.css"
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/login",
            name: "login",
            component: login,
        },
        {
            path: "/signUp",
            name: "signUp",
            component: signUp,
        },
        {
            path: "/p1",
            name: "p1",
            component: p1,
        },
        {
            path: "/p2",
            name: "p2",
            component: p2,
        }
    ],
})
