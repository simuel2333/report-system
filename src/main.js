import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import './plugins/element.js'
import store from './store'
import VCharts from 'v-charts'
Vue.use(VCharts)
import axios from 'axios';
import VueAxios from 'vue-axios'
axios.defaults.withCredentials = true;
Vue.use(VueAxios,axios);
import _global from "./Global.vue"
Vue.prototype.GLOBAL=_global

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    var log = console
    log.log(router)
    next()
})

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
