// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// bootstrap 3
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/vue-multiselect/dist/vue-multiselect.min.css'
import '../static/themify-icons.css'

import Vue from 'vue'
import App from '@/App'
import router from './router/index'
import VueI18n from 'vue-i18n'
import messages from './i18n/locale'
import * as uiv from 'uiv'
import 'babel-polyfill'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'vue-moment'

window._ = require('lodash')

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(uiv)
Vue.use(VueAxios, axios)
Vue.use(moment)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  i18n: i18n
})
