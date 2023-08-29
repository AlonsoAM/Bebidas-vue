import { ref, watch, onMounted } from "vue";
import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";

export const useFavoritosStore = defineStore("favoritos", () => {
  const storeBebidas = useBebidasStore();

  const favoritos = ref([]);

  onMounted(() => {
    favoritos.value = JSON.parse(localStorage.getItem("favoritos")) || [];
  });

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

  const existeFavorito = (id) => {
    const favoritosLocalStorage =
      JSON.parse(localStorage.getItem("favoritos")) ?? [];
    return favoritosLocalStorage.some((bebida) => bebida.idDrink === id);
  };

  const handleClickFavorito = () => {
    if (existeFavorito(storeBebidas.receta.idDrink)) {
      favoritos.value = favoritos.value.filter(
        (bebida) => bebida.idDrink !== storeBebidas.receta.idDrink
      );
    } else {
      favoritos.value.push(storeBebidas.receta);
    }
  };

  return {
    favoritos,
    existeFavorito,
    handleClickFavorito,
  };
});
