import Vue from 'vue'
import Vuex from 'vuex'

import client from '@/api'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  isLoggedIn: false,
}

const mutations = {
  loggedIn (state, token) {
    state.isLoggedIn = true
    client.defaults.headers.common['Authorization'] = `JWT ${token}`
  },
  loggedOut (state) {
    state.isLoggedIn = false
  },
}

const actions = {
  login ({commit}, [username, password]) {
    return client.auth.login(username, password).then(res => {
      commit('loggedIn', res.data.token)
      return res
    })
  },
  logout ({commit}) {
    commit('loggedOut')
  },
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
}

export default new Vuex.Store({
  strict: debug,
  actions,
  getters,
  mutations,
  state,
})
