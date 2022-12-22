<script setup>
import { RouterLink } from "vue-router";
import 'animate.css';
import ScrollLink from "../components/ScrollLink.vue";


// function scroll(href) {
//     document.querySelector(href)
//       .scrollIntoView({ behavior: 'smooth' });
// }

</script>

<template>

    <main class='hero-wrapper'>
      <ScrollLink href="#div-bottom" >Clique ici pour un scroll smooooth</ScrollLink>
      <div class='hero-img-ctn animate__animated animate__fadeIn'>
        <img src='../assets/img/hero-img.jpg' alt='' />
      </div>
      <div class='hero-title-ctn' id="div-bottom">
        <h1>Vous cherchez une bière ?</h1>
        <h2>Nous l'avons sans doute goutée pour vous.</h2>
      </div>
      <RouterLink to='/bieres'>
      <button class='btn-centered'>Découvrez nos bières</button>
      </RouterLink>
    </main>

</template>




