import axios from "axios";

export default {
  state: {
    datos: [],
  },
  getters: {
    allDatos(state) {
      return state.datos;
    },
  },
  actions: {
    async fetchDatos({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      commit("setDatos", response.data);
    },
  },
  mutations: {
    setDatos(state, datos) {
      state.datos = datos;
    },
  },
};
