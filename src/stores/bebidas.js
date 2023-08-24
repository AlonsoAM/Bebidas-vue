import { defineStore } from "pinia";
import { ref, onMounted, reactive } from "vue";
import ApiService from "../services/ApiService";

export const useBebidasStore = defineStore("bebidas", () => {
  const categorias = ref([]);
  const busqueda = reactive({
    nombre: "",
    categoria: "",
  });

  onMounted(async () => {
    const {
      data: { drinks },
    } = await ApiService.obtenerCategorias();
    categorias.value = drinks;
  });

  function obtenerRecetas() {
    console.log("Consultando API");
  }

  return {
    categorias,
    busqueda,
    obtenerRecetas,
  };
});
