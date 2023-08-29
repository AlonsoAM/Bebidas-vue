<script setup>
import { useFavoritosStore } from "../stores/favoritos";
import Receta from "../components/Receta.vue";
const storeFavoritos = useFavoritosStore();
</script>
<template>
  <h1 class="text-6xl font-extrabold">Favoritos</h1>
  <p v-if="storeFavoritos.noFavoritos" class="my-10 text-center text-3xl">
    No hay Favoritos
  </p>
  <div
    v-else
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10"
  >
    <Receta
      v-for="bebida in storeFavoritos.favoritos"
      :key="bebida.idDrink"
      :receta="bebida"
    />
  </div>
</template>

<style scoped></style>
