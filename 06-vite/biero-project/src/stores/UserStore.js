import { defineStore } from 'pinia'

export let useUserStore = defineStore('user', {
  // data
  state: () => ({
    courriel: '',
    login: '',
    commentaire: '',
    note: '',
  }),

  // methods
  actions: {
    log() {
      this.login = this.courriel;
    },
    prepareCommentInfos() {
      let oCommentaire = {
        commentaire: this.commentaire,
        courriel: this.login,
      }
      return oCommentaire;
    },
    prepareNoteInfos() {
      let oNote = {
        Note: this.note,
        courriel: this.login,
      }
      return oNote;
    }
  },

  // computed
  getters: {
    getCourriel(state) {
      return state.courriel;
    },

  },
})
