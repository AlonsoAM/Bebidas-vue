import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useFavoritosStore } from "./favoritos";
import { useBebidasStore } from "./bebidas";

export const useModalStore = defineStore("modal", () => {
  const storeFavoritos = useFavoritosStore();
  const storeBebidas = useBebidasStore();

  const modal = ref(false);
  function handleClickModal() {
    modal.value = !modal.value;
  }

  const textoBoton = computed(() => {
    return storeFavoritos.existeFavorito(storeBebidas.receta.idDrink)
      ? "Quitar de favoritos"
      : "Agregar a favoritos";
  });

  return {
    modal,
    textoBoton,
    handleClickModal,
  };
});
