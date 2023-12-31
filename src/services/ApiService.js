import api from "../lib/axios";

export default {
  obtenerCategorias() {
    return api.get("/list.php?c=list");
  },
  buscarRecetas({ categoria, nombre }) {
    return api.get(`/filter.php?c=${categoria}&i=${nombre}`);
    // console.log(busqueda);
  },
  buscarReceta(id) {
    return api.get(`/lookup.php?i=${id}`);
  },
};
