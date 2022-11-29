import PEnfant from './PEnfant.js'

export default {
  components: { PEnfant },
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

    `,

  data() {
    return {
      inputValue: '',
      valueP: '',
    }
  },

  methods: {
    showValue() {
      this.valueP = this.inputValue;
      this.inputValue = '';
    },
  },
}
