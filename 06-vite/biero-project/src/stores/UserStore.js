import { defineStore } from 'pinia'

export let useUserStore = defineStore('user', {
  // data
  state: () => ({
    courriel: '',
    login: '',
  }),

  // methods
  actions: {
    login(state) {
        state.login = state.courriel;
    }
  },

  // computed
  getters: {
    getCourriel(state) {
      return state.courriel;
    },

  },
})
