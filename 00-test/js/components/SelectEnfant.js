export default {
  template: `
    <h2>{{ titre }}</h2>
    <select v-model="menuChoisi" @change="showMenuSelected">
        <option 
        v-for="optionMenu in optionsMenu" 
        :key="optionMenu.id"
        >{{ optionMenu.name }}</option>
    </select>
    `,

  props: {
    optionsMenu: Array,
    titre: String,
  },

  data() {
    return {
      menuChoisi: '',
    }
  },

  methods: {
    showMenuSelected() {
      this.$emit('showMenu', this.menuChoisi)
    },
  },
}
