<script setup>
import { counter } from "@/stores/counterStore";
</script>

<template>
    <div>
        <h1>{{ counter.count }}</h1>
        <!-- Marche, approche pour petit projet -->
        <!-- <button @click="counter.count++">Increment</button> -->
        <!-- Doc Vue conseil approche avec methode pour modifier state d'une valeur -->
        <button @click="counter.increment()">Increment</button>
    </div>
</template>