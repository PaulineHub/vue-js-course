<script setup>
import { RouterLink, RouterView } from "vue-router";



</script>

<template>

    <main class='hero-wrapper'>
      <div class='hero-img-ctn'>
        <img src='../assets/img/hero-img.jpg' alt='' />
      </div>
      <div class='hero-title-ctn'>
        <h1>Vous cherchez une bière ?</h1>
        <h2>Nous l'avons sans doute goutée pour vous.</h2>
      </div>
      <RouterLink to='/bieres'>
      <button class='btn-centered'>Découvrez nos bières</button>
      </RouterLink>
    </main>

</template>




