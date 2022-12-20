<template>
    <div class='tuile'>
        <div class='tuile__img'>
            <img src='../assets/img/beer.jpg' alt='' />
        </div>
    
        <div class='dark-background'></div>
        <div class='tuile__detail'>
            <div>
                <h2 class='title title--secondary'>{{nom}}</h2>
                <h3 class='title title--tertiary'>
                    {{brasserie}}
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    nom: String,
    brasserie: String,
})
</script>