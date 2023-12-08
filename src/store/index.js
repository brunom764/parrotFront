import { createStore } from "vuex";
import modules from "./modules";
import { getField, updateField } from "vuex-map-fields";

export default createStore({
  strict: true,
  state: {},
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
  modules: modules,
});