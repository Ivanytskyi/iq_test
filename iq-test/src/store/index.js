import { createStore } from 'vuex'

export default createStore({
  state: {
    toggleSidebar: false
  },
  getters: {
    toggleSidebar: (state) => state.toggleSidebar

  },
  mutations: {
    toggleSidebar(state, value) {
      state.toggleSidebar = value
    }
  },
  actions: {},
  modules: {}
})
