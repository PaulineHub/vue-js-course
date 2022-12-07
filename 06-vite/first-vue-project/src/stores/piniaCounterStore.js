// PINIA

// npm install pinia
// pinia est defini dans le fichier main.js

import { defineStore } from "pinia";

export let usePiniaCounterStore = defineStore("counter", {
  // data
  state() {
    return {
      count: 5,
    };
  },

  // methods
  actions: {
    increment() {
      if (this.count < 10) {
        this.count++;
      }
    },
  },

  // computed
  getters: {
    remaining() {
      return 10 - this.count;
    },
  },
});

// Rappel :
// computed property 
// A computed property will only re-evaluate when some of its reactive dependencies have changed (contrary to a method who will update at each re-render)