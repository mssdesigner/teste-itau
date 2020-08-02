import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/vuex'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
