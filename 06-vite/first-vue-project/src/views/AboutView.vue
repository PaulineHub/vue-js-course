<script>
  import flash from '@/mixins/flash';

  export default {
    mixins: [flash]
  }
</script>

<template>
  <div class="about">
    <p>
      <button @click="flash('It works!')">Click me</button>
    </p>
  </div>
</template>


