import { defineStore } from 'pinia'

export let useBiereStore = defineStore('biere', {
  // data
  state() {
    return {
      nom: '',
      brasserie:''
    }
  },

  // methods
  actions: {
    
  },

  // computed
  getters: {
    
  },
})
