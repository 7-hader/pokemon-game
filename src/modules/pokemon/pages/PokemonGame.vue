<template>
    <section v-if="false" class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokémons</h3>
    </section>

    <section class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="mb-5">¿Quién es ese Pokémon?</h1>

        <!-- Pokemon Picture -->
        <PokemonPicture />

        <!-- Pokemon Options -->
        <PokemonOptions />
    </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
</script>

<style scoped></style>