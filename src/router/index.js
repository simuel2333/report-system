import Vue from "vue"
import Router from "vue-router"
import Home from "../components/home/home.vue"
import login from "../components/login/login.vue"
import signUp from "../components/login/signUp.vue"
import p1 from "../components/permissionTest/p1.vue"
import p2 from "../components/permissionTest/p2.vue"
import error from "../components/error/404.vue"
import analyst from "../components/analyst/analystmain.vue"
import analysthelp from "../components/analyst/help.vue"
import analystdata from "../components/analyst/analystdata.vue"
import "../css/reset.css"
Vue.use(Router)

export const constantRouterMap = [
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
        path: "/analyst",
        name: "analyst",
        component: analyst,
        children:[
            {
                path: "/",
                component: analysthelp,
            },
            {
                path: "data",
                component: analystdata,
            }
        ]
    },
    {
        path: "*",
        name: "404",
        component: error,
    }
]

export default new Router({
    routes: constantRouterMap
})

//异步挂载的路由
//动态需要根据权限加载的路由表 
export const asyncRouterMap = [
    {
        path: '/p1',
        component: p1,
        name: '权限测试',
        meta: { role: ['admin'] }, //页面需要的权限
    },
    {
        path: '/p2',
        component: p2,
        name: '权限测试',
        meta: { role: ['normal_user'] }, //页面需要的权限
    },
    { path: '*', redirect: '/404', hidden: true }
];
