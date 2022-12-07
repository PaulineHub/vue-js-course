<script setup>
// utilisation du v-model avec un composant
// https://vuejs.org/guide/components/events.html#usage-with-v-model

// Besoin de definir les props passées par l'exterieur au composant (pas obligatoire de definir le type)
// https://vuejs.org/guide/components/props.html#props-declaration

// defineProps(['modelValue'])

defineProps({
    modelValue: String
});


// emits : Declare the custom events emitted by the component.
// besoin de les definir avec defineEmits dans le cadre de <script setup>
// update:modelValue vient de v-model, convention pour nommer l'evt qui update le modelValue qui correspont a v-model du parent
// https://vuejs.org/guide/components/events.html
let emit = defineEmits(['update:modelValue']);

function onTabPress(e) {
    let textarea = e.target;
    let val = textarea.value,
        start = textarea.selectionStart,
        end = textarea.selectionEnd;
    textarea.value = val.substring(0, start) + "\t" + val.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + 1;
}

</script>

<template>
    <textarea @keydown.tab.prevent="onTabPress" @keyup="emit('update:modelValue', $event.target.value)"
        v-text="modelValue" />
</template>

<!--On peut passer des arguments supplementaires a 'emit' qui seront passes comme parametres a une fonction-->