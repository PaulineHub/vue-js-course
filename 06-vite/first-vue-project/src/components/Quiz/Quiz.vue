<template>
    <QuizHeader />
    <QuizQuestion />
    <QuizFooter :quiz1="quiz" />
</template>

<script setup>
import QuizHeader from "@/components/Quiz/QuizHeader.vue";
import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
import QuizFooter from "@/components/Quiz/QuizFooter.vue";
import { provide, ref } from "vue";

defineProps({quiz: Object});

// provide() fournit des donnees a des composants descendants qui utiliseront inject()
// https://vuejs.org/guide/components/provide-inject.html#provide
// voir QuizFooter pour le inject()
provide('key', 'value');

// Exemple dynamique
let name = ref('Jane Doe');
provide('name', {
    name,
    changeName: () => name.value = 'Marie-Antoinette'
});

</script>