<script setup>
import { useStorage } from '@/composables/useStorage';

let name = useStorage('name', 'pauline');
let message = useStorage('message', 'hello');

let obj = useStorage('obj', {one: 'one'});

setTimeout(() => {
  obj.value = {'changed' : 'entirely'};
}, 3000);
</script>

<template>
  <div>
    <p>
      What is your name ? <input type="text" v-model="name">
    </p>
    <p>
      What is your message ? <input type="text" v-model="message">
    </p>
  </div>
</template>


