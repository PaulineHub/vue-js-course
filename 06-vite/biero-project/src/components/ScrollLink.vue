<template>
    <div class='hero-title-ctn'>
        <a :href="href" @click.prevent="scroll">
            <slot></slot>
        </a>
    </div>
</template>

<script setup>

const props = defineProps({
    href: String
})

function scroll() {
    document.querySelector(props.href).scrollIntoView({ behavior: 'smooth' });
}

</script>
