<script setup>
// REACTIVE()
// Using reactive() in components and quizStore to pass values
import Quiz from "@/components/Quiz/Quiz.vue";
</script>

<template >
    <main>
      <Quiz :quiz="{name: 'My First QUiz', questions: []}"  />
    </main>
</template>