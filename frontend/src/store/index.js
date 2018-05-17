import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  isLoggedIn: false,
}

const mutations = {
  loggedIn (state) {
    state.isLoggedIn = true
  },
  loggedOut (state) {
    state.isLoggedIn = false
  },
}

const actions = {
  login ({commit}) {
    commit('loggedIn')
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
