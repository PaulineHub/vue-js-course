export default {
  //@submit.prevent="add" : e.preventDefault AND on submit, execut add()
  template: `
        <form @submit.prevent="addValue">
            <div class="border border-gray-600 text-black">
                <input v-model="newAssignment" placeholder="New assignment..." class="p-2" style="width:77%"/> 
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form> 
    `,

  data() {
    return {
      newAssignment: '',
    }
  },

  methods: {
    addValue() {
      this.$emit('addAssignment', this.newAssignment)

      this.newAssignment = '' // clear input value
    },
  },
}
