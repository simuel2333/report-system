import Vue from "vue"
import Router from "vue-router"
import Home from "../components/home/home.vue"
import login from "../components/login/login.vue"
import signUp from "../components/login/signUp.vue"
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
        }
    ],
})
