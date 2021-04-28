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
        "https://jsonplaceholder.typicode.com/posts/"
      );
      commit("setDatos", response.data);
    },
    async deleteDato({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
      commit('removeDato', id);
    }
  },
  mutations: {
    setDatos(state, datos) {
      state.datos = datos;
    },
    removeDato(state, id) {
      state.datos = state.datos.filter((dato) => dato.id !== id)
    }
  },
};
