import { getField, updateField } from "vuex-map-fields";
import axios from 'axios';

export const state = {
  idUser: null,
  loading: false,
};

export const getters = {
  getField,
  getUserId: (state) => state.idUser,
};

export const mutations = {
  updateField,
  setUserId: (state, users) => {
    state.users = users;
  },
};

export const actions = {
  async createUser({ commit }, {email, password}) {
    const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/identity/create`, {email, password});
    commit('updateField', { path: 'idUser', value: response.data.idUser })
    return response.data;
  },
  async loginUser({ commit }, {email, password}) {
    const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/login`, {email, password});
    commit('updateField', { path: 'idUser', value: response.data.idUser })
    return response.data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
