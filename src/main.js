// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// bootstrap 3
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import App from './App'
import router from './router/index'
import * as uiv from 'uiv'

Vue.use(uiv)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
