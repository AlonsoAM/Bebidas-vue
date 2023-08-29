import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useNotificacionesStore = defineStore("notificaciones", () => {
  const texto = ref("");
  const error = ref(false);
  const mostrar = ref(false);

  watch(mostrar, () => {
    if (mostrar) {
      setTimeout(() => {
        mostrar.value = false;
        texto.value = "";
        error.value = false;
      }, 3000);
    }
  });

  return {
    texto,
    error,
    mostrar,
  };
});
