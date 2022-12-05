<script setup>
  //import flash from '@/mixins/flash';
  // export default {
  //   mixins: [flash]
  // }

import { useFlash } from '@/composables/useFlash';
let {flash} = useFlash();

</script>

<template>
  <div class="about">
    <p>
      <button @click="flash('about page', 'It works!', 'info')">Click me</button>
    </p>
  </div>
</template>


