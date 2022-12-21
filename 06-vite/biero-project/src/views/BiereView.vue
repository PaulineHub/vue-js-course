<script setup>
import { useBiereStore } from "../stores/BiereStore.js";
import { useUserStore } from "../stores/UserStore.js";
import { onMounted, computed } from "vue";
import { useRoute } from 'vue-router'

let biereStore = useBiereStore();
let userStore = useUserStore();
const route = useRoute();

onMounted(() => {
    biereStore.id = route.params.id;
    biereStore.fetchBiere();
    biereStore.fetchNote();
    biereStore.fetchCommentaires();
});

const getBiere = computed(() => {
    return biereStore.getBiere;
});
const getCommentaires = computed(() => {
    return biereStore.getCommentaires;
});
const getNote = computed(() => {
    return biereStore.getNote;
});

const submitComment = () => {
    let oComment = userStore.prepareCommentInfos();
    biereStore.postComment(oComment);
}

const submitNote = () => {
    let oNote = userStore.prepareNoteInfos();
    biereStore.postNote(oNote);
}



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
            <div v-show="userStore.login">
                <textarea v-model="userStore.commentaire" placeholder='Ajoutez votre commentaire'></textarea>
                <button @click.prevent="submitComment">Soumettre</button>
                <div className='starsWrapper'>
                    <span id='star_1' @mouseover="userStore.note" @click="submitNote"></span>
                    <span id='star_2' @mouseover="userStore.note" @click="submitNote"></span>
                    <span id='star_3' @mouseover="userStore.note" @click="submitNote"></span>
                    <span id='star_4' @mouseover="userStore.note" @click="submitNote"></span>
                    <span id='star_5' @mouseover="userStore.note" @click="submitNote"></span>
                </div>
            </div>
            
        </div>
        <div class='biere__image'>
            <img src='../assets/img/beer.jpg' alt='' />
        </div>
    </article>
</template>

