<script setup>
import { usePiniaCounterStore } from "@/stores/piniaCounterStore";
let counter = usePiniaCounterStore();
</script>

<template>
    <div>
        <h1>{{ counter.count }}</h1>

        <button @click="counter.increment()" :disabled="!counter.remaining">Increment ({{ counter.remaining }}
            Remaining)</button>
    </div>
</template>