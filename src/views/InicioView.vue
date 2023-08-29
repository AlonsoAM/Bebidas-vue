<script setup>
import Receta from "../components/Receta.vue";
import { useBebidasStore } from "../stores/bebidas";

const store = useBebidasStore();
</script>
<template>
  <h1 class="text-6xl font-extrabold">Recetas</h1>
  <p v-if="store.noRecetas" class="my-10 text-center text-3xl">
    No hay Recetas
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10">
    <Receta
      v-for="bebida in store.recetas"
      :key="bebida.idDrink"
      :receta="bebida"
    />
  </div>
</template>

<style scoped></style>
