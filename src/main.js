import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import './plugins/element.js'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
