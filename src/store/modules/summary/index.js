import { getField, updateField } from "vuex-map-fields";
import axios from 'axios';

export const state = {
  summary: null,
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
  setSummary(state, summary) {
    state.summary = summary;
  },
};

export const actions = {
  async createSummaryByTransId({ commit }, transId) {
    try {
      const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/summary/create`, {transId})
      commit('updateField', { path: 'summary', value: response.data })
      return response
    } catch (error) {
      return error
    }
  },

  async getSummaryByTransId({ commit }, transId) {
    try {
      const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/summary/${transId}`)
      if (response.status === 200) {
        commit('updateField', { path: 'summary', value: response.data })
      }
      return response
    } catch (error) {
      return error
    }
  },

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
