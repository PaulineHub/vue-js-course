<script setup>
import BiereCard from "../components/BiereCard.vue";
import { useBiereStore } from "../stores/BiereStore.js";
import { onMounted, computed } from "vue";
import { RouterLink } from "vue-router";

let store = useBiereStore();

//onMounted()
// https://vuejs.org/api/composition-api-lifecycle.html#onmounted
// Registers a callback to be called after the component has been mounted.
onMounted(() => {
  store.fetchBieres();
});

// computed()
//  A computed property will only re-evaluate when some of its reactive dependencies have changed. 
const getBieres = computed(() => {
  return store.getBieres;
});

</script>

<template>
  <main class='grid'>
    <!-- :to is a shorthand for v-bind:to, using this synthax you can use expressions that you usally write inside mustaches -->
    <RouterLink v-for="biere in getBieres" :to="`/biere/${biere.id_biere}`">
      <BiereCard :nom="biere.nom" :brasserie="biere.brasserie" />
    </RouterLink>
  </main>
</template>




