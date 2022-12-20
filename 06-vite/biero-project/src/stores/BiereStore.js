import { defineStore } from 'pinia'

// Reference fetch avec Pinia
//https://blog.logrocket.com/consume-apis-vuex-pinia-axios/

export let useBiereStore = defineStore('biere', {
  // data
  state: () => ({
    bieres: [],
    biere: {},
    commentaires: [],
    note: {},
  }),

  // methods
  actions: {
    async fetchBieres() {
      fetch('http://127.0.0.1:8000/webservice/php/biere/')
        .then((response) => {
          if (response.ok) return response.json()
          else throw Error()
        })
        .then((data) => {
          this.bieres = data.data
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    async fetchBiere(id) {
      fetch(`http://127.0.0.1:8000/webservice/php/biere/${id}`)
        .then((response) => {
          if (response.ok) return response.json()
          else throw Error()
        })
        .then((data) => {
          this.biere = data.data
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    async fetchCommentaires(id) {
      fetch(`http://127.0.0.1:8000/webservice/php/biere/${id}/commentaire`)
        .then((response) => {
          if (response.ok) return response.json()
          else throw Error()
        })
        .then((data) => {
          this.commentaires = data.data
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    async fetchNote(id) {
      fetch(`http://127.0.0.1:8000/webservice/php/biere/${id}/note`)
        .then((response) => {
          if (response.ok) return response.json()
          else throw Error()
        })
        .then((data) => {
          console.log('note', data.data);
          this.note = data.data
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
  },

  // computed
  getters: {
    getBieres(state) {
      return state.bieres
    },
    getBiere(state) {
      return state.biere
    },
    getCommentaires(state) {
      return state.commentaires
    },
    getNote(state) {
      return state.note
    },
  },
})
