import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './router'
import App from './App.vue'
import './sass/_ui.scss'
import './ui.js'


Vue.use(VueRouter)
new Vue({
  router: new VueRouter(Router),
  render: h => h(App),
}).$mount('#app')
