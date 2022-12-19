<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <div className='logo-ctn'>
        <RouterLink to="/"><img src='./assets/img/biero-logo.svg' alt='' /></RouterLink>
      </div>
      <div>
        <RouterLink to="/bieres">Bieres</RouterLink>
        <!-- <RouterLink to="/biere/:id">Contact</RouterLink> -->
      </div>
    </nav>
  </header>
  <RouterView />
</template>

