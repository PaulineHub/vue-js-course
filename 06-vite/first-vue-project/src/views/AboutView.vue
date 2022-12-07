<script setup>
  //import flash from '@/mixins/flash';
  // export default {
  //   mixins: [flash]
  // }

import { counter } from "@/stores/counterStore";
import { useFlash } from '@/composables/useFlash';
let {flash} = useFlash();

</script>

<template>
  <div class="about">
    <p>
      <button @click="flash('about page', 'It works!', 'info')">Click me</button>
    </p>
    <p>The current count is {{ counter.count}}</p>
  </div>
</template>


