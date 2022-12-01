<script setup>
import TheWelcome from "../components/TheWelcome.vue";

let message = $ref("Hello world"); // ajout ds vite.config.js pour utiliser le $ sur ref

setTimeout(() => {
  message = "I have been changed";
}, 2000);

let doSomething = () => {
  alert('Bouh!');
}
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{message}}</p>
    <input type="text" v-model="message">
    <button @click="doSomething">Click me</button>
  </main>
</template>
