import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './router'
import App from './App.vue'
import FontAwesomeIcon  from  './utils/icons'
import './sass/_ui.scss'
//import jqueryReady from './utils/ui'
import $ from 'jquery'

Vue.use(VueRouter)
Vue.component('fontawesome',FontAwesomeIcon)
new Vue({
  router: new VueRouter(Router),
  render: h => h(App),
  mounted(){
    //$(document).ready(jqueryReady);
  }
}).$mount('#app')

