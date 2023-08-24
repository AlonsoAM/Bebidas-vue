import api from "../lib/axios";

export default {
  obtenerCategorias() {
    return api.get("/list.php?c=list");
  },
};
