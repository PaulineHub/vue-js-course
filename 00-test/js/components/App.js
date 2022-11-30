import PEnfant from './PEnfant.js'
import SelectEnfant from './SelectEnfant.js'

export default {
  components: { PEnfant, SelectEnfant },
  template: `
            <form @submit.prevent="showValue">
                <div class="border border-gray-600 text-black">
                    <input 
                    v-model="inputValue"
                    type="text" 
                    placeholder="Tape un truc..." 
                    class="p-2"/>   
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form> 
            <p>Meme niveau :{{ valueP }}</p>

            <p-enfant :textP="valueP"></p-enfant>

            <select-enfant :optionsMenu="menu" titre="menu" @showMenu="afficheMenu"></select-enfant>
            <p>Menu choisi: {{ choix }}</p>

    `,

  data() {
    return {
      inputValue: '',
      valueP: '',
      menu: [
        { id: 1, name: 'cocktails' },
        { id: 2, name: 'plats' },
        { id: 3, name: 'desserts' },
      ],
      choix: '',
    }
  },

  methods: {
    showValue() {
      this.valueP = this.inputValue
      this.inputValue = ''
    },

    afficheMenu(menuChoisi) {
      this.choix = menuChoisi
    },
  },
}
