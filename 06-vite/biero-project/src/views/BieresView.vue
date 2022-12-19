<script setup>
import BiereCard from "../components/BiereCard.vue";
import { useBiereStore } from "../stores/BiereStore.js";

let bieres = useBiereStore();

</script>

<template>
  <main class='grid'>
    <BiereCard/>
    {bieres}
  </main>
</template>




