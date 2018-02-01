import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    startDate: null
  },
  getters: {
    getterStartDate (state) {
      return state.startDate
    }
  },
  mutations: {
    getStartDate (state, date) {
      state.startDate = date
    }
  },
  actions: {
    getStartDate ({commit}) {
      axios({
        method: 'get',
        url: process.env.API_URL + '/api/check-login',
        withCredentials: true
      }).then((response) => {
        let result = new Date()

        if (response.data.status) {

        } else {
          result.setDate(result.getDate() + 2)
        }
        commit('getStartDate', result)
      }, (error) => {
        console.log(error)
        this.error = 'error.authError'
      })
    }
  }
})
