import { defineStore } from 'pinia'

// Reference fetch avec Pinia
//https://blog.logrocket.com/consume-apis-vuex-pinia-axios/

export let useBiereStore = defineStore('biere', {
  // data
  state: () => ({
    bieres: [],
    biere: {},
    id: '',
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
    async fetchBiere() {
      fetch(`http://127.0.0.1:8000/webservice/php/biere/${this.id}`)
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
    async fetchCommentaires() {
      fetch(`http://127.0.0.1:8000/webservice/php/biere/${this.id}/commentaire`)
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
    async fetchNote() {
      fetch(`http://127.0.0.1:8000/webservice/php/biere/${this.id}/note`)
        .then((response) => {
          if (response.ok) return response.json()
          else throw Error()
        })
        .then((data) => {
          console.log('note', data.data)
          this.note = data.data
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    async postComment(oComment) {
      let options = this.buildOptions(oComment)
      let putCommentaire = await fetch(
          `http://127.0.0.1:8000/webservice/php/biere/${this.id}/commentaire`,
          options
        ),
        getCommentaires = await fetch(
          `http://127.0.0.1:8000/webservice/php/biere/${this.id}/commentaire`
        )

      Promise.all([putCommentaire, getCommentaires])
        .then((response) => {
          return response[1].json()
        })
        .then((data) => {
          this.commentaires = data.data
        })
    },
    async postNote(oNote) {
      let options = this.buildOptions(oNote)
      let putNote = await fetch(
          `http://127.0.0.1:8000/webservice/php/biere/${this.id}/note`,
          options
        ),
        getNote = await fetch(
          `http://127.0.0.1:8000/webservice/php/biere/${this.id}/note`
        )

      Promise.all([putNote, getNote])
        .then((response) => {
          return response[1].json()
        })
        .then((data) => {
          this.note = data.data;
        })
    },
    buildOptions(body) {
      let options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa('biero:biero'),
        },
        body: JSON.stringify(body),
      }
      return options
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
