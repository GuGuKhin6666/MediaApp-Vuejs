import { createStore } from 'vuex'

export default createStore({
  state: {
    token : '',
    userData : {},
  },
  getters: {
    getToken : state => state.token,
    getData : state => state.userData,

  },
  mutations: {
  },
  actions: {
    setToken : ({state},value) => state.token = value,
    setData : ({state},value) => state.userData = value,
  },
  modules: {
  }
})
