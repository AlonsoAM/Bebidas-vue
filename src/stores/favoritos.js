import { ref, watch, onMounted } from "vue";
import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";

export const useFavoritosStore = defineStore("favoritos", () => {
  const storeBebidas = useBebidasStore();

  const favoritos = ref([]);

  watch(
    favoritos,
    () => {
      sincronizarLocalStorage();
    },
    { deep: true }
  );
  const sincronizarLocalStorage = () => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
  };

  const handleClickFavorito = () => {
    favoritos.value.push(storeBebidas.receta);
  };

  return {
    favoritos,
    handleClickFavorito,
  };
});
