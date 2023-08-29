import { ref, watch, onMounted, computed } from "vue";
import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { useModalStore } from "./modal";
import { useNotificacionesStore } from "./notificaciones";

export const useFavoritosStore = defineStore("favoritos", () => {
  const storeBebidas = useBebidasStore();
  const storeModal = useModalStore();
  const storeNotificaciones = useNotificacionesStore();

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

  const agregarFavorito = () => {
    favoritos.value.push(storeBebidas.receta);
    storeNotificaciones.mostrar = true;
    storeNotificaciones.texto = "Se agregó a Favoritos";
  };

  const eliminarFavorito = () => {
    favoritos.value = favoritos.value.filter(
      (bebida) => bebida.idDrink !== storeBebidas.receta.idDrink
    );
    storeNotificaciones.mostrar = true;
    storeNotificaciones.texto = "Eliminado de Favoritos";
  };

  const handleClickFavorito = () => {
    if (existeFavorito(storeBebidas.receta.idDrink)) {
      eliminarFavorito();
    } else {
      agregarFavorito();
    }
    storeModal.handleClickModal();
  };

  const noFavoritos = computed(() => {
    return favoritos.value.length === 0;
  });

  return {
    favoritos,
    noFavoritos,
    existeFavorito,
    handleClickFavorito,
  };
});
