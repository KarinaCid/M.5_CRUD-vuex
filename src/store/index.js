import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersList: []
  },
  mutations: {
    SET_USERS_LIST(state, users) {
      state.usersList = users
    }
  },
  actions: {
    getUsersList({commit}) {
      axios.get(`https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/users`)
      .then(resp => commit('SET_USERS_LIST', resp.data)) 
    },
    createUser({dispatch}, user) {
      axios.post(`https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/users`, user)
      .then(resp => dispatch('getUsersList', resp.data)) 
    }
  },
  modules: {
  }
})
