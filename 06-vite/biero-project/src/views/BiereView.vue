<script setup>
import { useBiereStore } from "../stores/BiereStore.js";
import { onMounted, computed } from "vue";
import { useRoute } from 'vue-router'

let store = useBiereStore();
const route = useRoute();

onMounted(() => {
    store.fetchBiere(route.params.id);
    store.fetchNote(route.params.id);
    store.fetchCommentaires(route.params.id);
});

const getBiere = computed(() => {
    return store.getBiere;
});
const getCommentaires = computed(() => {
    return store.getCommentaires;
});
const getNote = computed(() => {
    return store.getNote;
});



</script>

<template>
    <article class='biere'>
        <div class='biere__infos '>
            <h2 class='title title--primary underline underline--primary'>
                {{getBiere.nom}}
            </h2>
            <h3 class='mt-xsmall'>Brasserie : {{getBiere.brasserie}}</h3>
            <p class='mt-small'>{{getBiere.description}}</p>
            <h4 class='mt-xsmall' v-if="getNote.nombre > 0">
            Note : {{ getNote.note }} / 5({{ getNote.nombre}})
            </h4>
            <h4 v-else>Pas encore de note</h4>
            <div className='biere__commentaires'>
                <h4 v-if="getCommentaires.length < 1">Aucun commentaire</h4>
                <h4 v-else-if="getCommentaires.length === 1">Commentaire</h4>
                <h4 v-else>Commentaires</h4>
                <p v-for="commentaire in getCommentaires">
                    "{{commentaire.commentaire}}"
                    <small>{{commentaire.courriel}}</small>
                </p>
            </div>
            
        </div>
        <div class='biere__image'>
            <img src='../assets/img/beer.jpg' alt='' />
        </div>
    </article>
</template>

