// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '../static/css/base.css'
import $ from 'jquery'
// import '../src/assets/js/modernizr.js'
import '../src/assets/js/scrollReveal.js'
import '../src/assets/css/base.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
