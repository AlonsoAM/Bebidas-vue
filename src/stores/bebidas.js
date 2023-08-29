import { defineStore } from "pinia";
import { ref, onMounted, reactive } from "vue";
import ApiService from "../services/ApiService";
import { useModalStore } from "./modal";

export const useBebidasStore = defineStore("bebidas", () => {
  const storeModal = useModalStore();

  const categorias = ref([]);
  const busqueda = reactive({
    nombre: "",
    categoria: "",
  });
  const recetas = ref([]);
  const receta = ref({});

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

  async function seleccionarBebida(id) {
    const {
      data: { drinks },
    } = await ApiService.buscarReceta(id);
    receta.value = drinks[0];
    storeModal.handleClickModal();
  }

  return {
    categorias,
    busqueda,
    recetas,
    receta,
    obtenerRecetas,
    seleccionarBebida,
  };
});
