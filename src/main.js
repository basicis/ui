import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './router'
import App from './App.vue'
import FontAwesomeIcon  from  './utils/icons'
import './sass/_ui.scss'
//import './utils/ui.js'


Vue.use(VueRouter)
Vue.component('fontawesome',FontAwesomeIcon)
new Vue({
  router: new VueRouter(Router),
  render: h => h(App),
}).$mount('#app')

