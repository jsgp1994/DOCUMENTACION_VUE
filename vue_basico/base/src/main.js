import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from '@/router'
import { upperCaseFilter, lowerCaseFilter } from '@/filters'
import { VueSpinners } from '@saeris/vue-spinners'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.filter('upper', upperCaseFilter)
Vue.filter('lower', lowerCaseFilter)
Vue.use(VueSpinners)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
