<script setup>
// Besoin de definir le type de props passe par l'exterieur au composant
// https://vuejs.org/guide/components/props.html#props-declaration
defineProps({
    modelValue: String
});

// emits : Declare the custom events emitted by the component.
// besoin de les definir avec defineEmits dans le cadre de <script setup>
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