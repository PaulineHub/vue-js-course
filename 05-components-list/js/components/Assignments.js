import AssignmentList from './AssignmentList.js'
import AssignmentCreate from './AssignmentCreate.js'

export default {
  components: { AssignmentList, AssignmentCreate },

  template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress">
                <assignment-create @add="add"></assignment-create> 
            </assignment-list>
            
            <div v-show="showCompleted">
                <assignment-list 
                    :assignments="filters.completed" 
                    title="Completed" 
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                ></assignment-list>
            </div> 
        </section>
    `,
  // :assignments car on passe la valeur de 'filters.inProgress'
  // title (sans :) car on passe la string
  // @addAssignment="add" : au lieu de v-on:click, on a un customed event named 'addAssignment' donc on ecrit @addAssignment
  //j'ecoute le 'addAssignment' @emit from assignment-create qui remonte en parametre la valeur de l'input du form
  // can-toggle est un flag qu'on passe comme prop a l'elt enfant (valeur true comme on le declare)

  data() {
    return {
      assignments: [],
      showCompleted: true,
    }
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      }
    },
  },

  // Lifecycle options
  // https://vuejs.org/api/options-lifecycle.html#created
  // created() : Called after the instance has finished processing all state-related options.
  // mounted() : Called after the component has been mounted.
  created() {
    fetch('http://localhost:3001/assignments')
      .then((response) => response.json())
      .then((assignments) => {
        this.assignments = assignments
      })
  },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      })
    },
  },
}
