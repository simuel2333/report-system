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
import predictdata from "../components/analyst/predictdata.vue"
import modelTraining from "../components/analyst/modelTraining.vue"
import trainingOutcome from "../components/analyst/trainingOutcome.vue"
import investForecast from "../components/analyst/investForecast.vue"
import forecastModel from "../components/analyst/forecastModel.vue"
import myRatingForecast from "../components/analyst/myRatingForecast.vue"
import emotionModelTraining from "../components/analyst/emotionModelTraining.vue"
import emotionForest from "../components/analyst/emotionForest.vue"
import sourcedatamanage from "../components/analyst/source/sourcedatamanage.vue"
import uploadsourcedata from "../components/analyst/source/uploadsourcedata.vue"
import ratingReport from "../components/analyst/report/ratingReport.vue"
import reportCheck from "../components/analyst/reportCheck.vue"
import emotionIndex from "../components/analyst/emotionIndex.vue"
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
            },
            {
                path: "predictdata",
                component: predictdata,
            },
            {
                path: "modelTraining",
                component: modelTraining,
            },
            {
                path: "trainingOutcome",
                component: trainingOutcome,
            },
            {
                path: "investForecast",
                component: investForecast,
            },
            {
                path: "forecastModel",
                component: forecastModel,
            },
            {
                path: "myRatingForecast",
                component: myRatingForecast,
            },
            {
                path: "emotionModelTraining",
                component: emotionModelTraining,
            },
            {
                path: "emotionForest",
                component: emotionForest,
            },
            {
                path: "sourcedatamanage",
                name:"源数据管理",
                component: sourcedatamanage,
            },
            {
                path: "uploadsourcedata",
                name:"源数据上传",
                component: uploadsourcedata,
            },
            {
                path: "ratingReport",
                name:"评级研究报告",
                component: ratingReport,
            },
            {
                path: "reportCheck",
                name:"报告审核",
                component: reportCheck,
            },
            {
                path: "emotionIndex",
                name:"报告审核",
                component: emotionIndex,
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
