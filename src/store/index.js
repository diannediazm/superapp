import Vue from 'vue';
import Vuex from 'vuex';
import apiJSON from "./modules/apiJSON";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    apiJSON,
  }
})
