import { getField, updateField } from "vuex-map-fields";
import axios from 'axios';

export const state = {
  transcriptions: [],
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
};

export const actions = {
  async getUserTranscriptions({ commit }, userId) {
    try {
      const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/transcription/by-userId/${userId}`)
      commit('updateField', { path: 'transcriptions', value: response.data })
      return response
    } catch (error) {
      return error
    }
  },

  async createTranscription({fileUrl, userId, name}) {
    try {
      const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/transcription`, {fileUrl, userId, name})
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
