<script setup>
import { RouterLink, RouterView } from "vue-router";
import {useUserStore} from "./stores/UserStore.js";

let store = useUserStore();

</script>

<template>
  <header>
    <nav>
      <div className='logo-ctn'>
        <RouterLink to="/"><img src='./assets/img/biero-logo.svg' alt='' /></RouterLink>
      </div>
      <div className='nav-side-wrapper'>
        <div>
          <RouterLink to="/bieres">Bieres</RouterLink>
        </div>
        <form>
          <input type="text" placeholder='Usager' v-model="store.courriel" />
          <button @click.prevent="store.log()">Login</button>
        </form>
      </div>
    </nav>
  </header>
  <!-- component matched by the route will render here -->
  <RouterView />
</template>

