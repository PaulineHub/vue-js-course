export default {
  template: `
        <div class="flex gap-2">
            <button
                @click="$emit('update:currentTag', tag)"
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag 
                }"
            >{{ tag }}</button> 
        </div>  
    `,

  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    /* Retourne une liste de tags */
    tags() {
      // le constructeur new Set permet de creer un nouvel objet Set d'item unique (pas de doublon)
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
      return ['all', ...new Set(this.initialTags)];
      // ... permet d'ajouter les elements du tableau dans le nouvel objet Set directement dans le tableau general retourne
    },
  },
}
