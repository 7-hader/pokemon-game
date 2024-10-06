<template>
    <section v-if="isLoading || randomPokemon.id === null"
        class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokémons</h3>
    </section>

    <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="mb-5">¿Quién es ese Pokémon?</h1>
        <div class="h-20">
            <button v-if="gameStatus !== GameStatus.Playing" @click="getNextRound(4)"
                class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition-all">
                Volver a Jugar
            </button>
        </div>

        <!-- Pokemon Picture -->
        <PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="gameStatus !== GameStatus.Playing" />

        <!-- Pokemon Options -->
        <PokemonOptions :options="options" :block-selection="gameStatus !== GameStatus.Playing"
            :correct-answer="randomPokemon.id" @selected-option="checkAswer" />
    </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const { randomPokemon, isLoading, gameStatus, pokemonsOptions: options, checkAswer, getNextRound } = usePokemonGame();

</script>

<style scoped></style>