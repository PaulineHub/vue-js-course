import { defineStore } from "pinia";

export let useTeamStore = defineStore("team", {
    // convention pour state d'utiliser une fonction car facilite approche avec TypeScript
  state: () => ({
    name: "",
    spots: 0,
    members: [],
  }),

  actions: {
    async fill() {
      let r = await import("@/team.json");
      //retourne un module avec differentes cles, on veut l'objet avec la cle 'default' 
      // this.name = r.default.name;
      // this.spots = r.default.spots;
      // this.members = r.default.members;
      this.$state = r.default;
    },

    grow(spots) {
      this.spots = spots;
    },
  },

  getters: {
    spotsRemaining() {
      return this.spots - this.members.length;
    },
  },
});
