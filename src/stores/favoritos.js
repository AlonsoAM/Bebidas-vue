import { ref } from "vue";
import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";

export const useFavoritosStore = defineStore("favoritos", () => {
  const storeBebidas = useBebidasStore();

  const favoritos = ref([]);

  const handleClickFavorito = () => {
    favoritos.value.push(storeBebidas.receta);
  };

  return {
    favoritos,
    handleClickFavorito,
  };
});
