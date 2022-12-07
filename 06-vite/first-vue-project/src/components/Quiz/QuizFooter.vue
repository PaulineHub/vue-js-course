<template>
    <footer>
        <h3>Footer</h3>  
        <p>Nom du quiz injecté : {{ quiz1.name }}</p>
        <p>Ma key : {{ key }}</p>
        <p>Mon nom : {{ name }}</p>
        <button @click="changeName">Changer nom</button>
        <p>Nom du quiz stored dans un fichier : {{ quiz2.name }}</p>
    </footer>
</template>

<script setup>
import { inject } from "vue";
import {quiz2} from "@/stores/quizStore";

defineProps({ quiz1: Object });

// inject() permet d'injecter une valeur fournie par un composant parent qui utilise provide(); 
// https://vuejs.org/api/composition-api-dependency-injection.html#inject
let key = inject('key');
let { name, changeName } = inject('name');
</script>