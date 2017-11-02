// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// bootstrap 3
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/style/main.scss'

import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueI18n from 'vue-i18n'
import messages from './i18n/locale'
import * as uiv from 'uiv'

window._ = require('lodash')

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(uiv)

const i18n = new VueI18n({
  locale: 'en',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  i18n
})
