import { defineStore } from "pinia";
import { ref, onMounted, reactive } from "vue";
import ApiService from "../services/ApiService";

export const useBebidasStore = defineStore("bebidas", () => {
  const categorias = ref([]);
  const busqueda = reactive({
    nombre: "",
    categoria: "",
  });
  const recetas = ref([]);

  onMounted(async () => {
    const {
      data: { drinks },
    } = await ApiService.obtenerCategorias();
    categorias.value = drinks;
  });

  async function obtenerRecetas() {
    const {
      data: { drinks },
    } = await ApiService.buscarRecetas(busqueda);
    recetas.value = drinks;
  }

  return {
    categorias,
    busqueda,
    recetas,
    obtenerRecetas,
  };
});
