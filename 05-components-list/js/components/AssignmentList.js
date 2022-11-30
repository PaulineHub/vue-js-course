import Assignment from './Assignment.js'
import AssignmentTags from './AssignmentTags.js'
import Panel from './Panel.js'

export default {
  components: { Assignment, AssignmentTags, Panel },

  template: `
        <panel v-show="assignments.length" class="w-60">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">
                    {{ title }}
                    <span>({{ assignments.length }})</span>
                </h2>
                
                <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
            </div>
            
            <assignment-tags
                v-model:currentTag="currentTag"
                :initial-tags="assignments.map(a => a.tag)" 
            ></assignment-tags>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
               <assignment 
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
            
            <slot></slot>
        </panel> 
        <panel>
          <template #footer>
          <!-- content for the header slot -->
          Footer
          </template>
        </panel> 
    `,

  // https://vuejs.org/guide/components/slots.html#named-slots
  // The <slot> element is a slot outlet that indicates where the parent-provided slot content should be rendered.
  // A <slot> outlet without name implicitly has the name "default".
  // To pass a named slot, we need to use a <template> element with the v-slot directive, and then pass the name of the slot as an argument to v-slot:
  // v-slot has a dedicated shorthand #, so <template v-slot:header> can be shortened to just <template #header>. Think of it as "render this template fragment in the child component's 'header' slot".

  //v-model: bind value of the input to dans data(), and update the value on change

  // v-show="canToggle" : flag true qui nous a ete passe en prop, show le bouton uniquement si canToggle est vrai.

  props: {
    assignments: Array,
    title: String,
    canToggle: { type: Boolean, default: false },
  },

  data() {
    return {
      currentTag: 'all',
    }
  },

  computed: {
    /* Retourne un tableau d"assignments filtre */
    filteredAssignments() {
      if (this.currentTag === 'all') {
        return this.assignments
      }

      return this.assignments.filter((a) => a.tag === this.currentTag)
    },
  },
}
