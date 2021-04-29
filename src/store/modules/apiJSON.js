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
        "https://jsonplaceholder.typicode.com/posts"
      );
      commit("setDatos", response.data);
    },
    async deleteDato({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
      commit('removeDato', id);
    },
    async addDato({commit}, title){
      const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`,
      {title:title})

      commit('addDato', response.data)
    },
    async updatedDato({commit}, updatedDato) {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedDato.id}`, updatedDato);

    commit('updatedDato', response.data);
    }
  },
  mutations: {
    setDatos(state, datos) {
      state.datos = datos;
    },
    removeDato(state, id) {
      state.datos = state.datos.filter((dato) => dato.id !== id)
    },
    addDato(state, newDato) {
      state.datos.unshift(newDato)
    },
    updatedDato: (state, updatedDato) => {
      const index = state.datos.findIndex(dato => dato.id === updatedDato.id);
  
      if (index !== -1) {
        state.datos.splice(index, 1, updatedDato);
      } 
      
  }
  },
};
