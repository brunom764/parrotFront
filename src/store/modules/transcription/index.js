import { getField, updateField } from "vuex-map-fields";
import axios from 'axios';

export const state = {
  transcriptions: [],
  transcription: {},
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
};

export const actions = {
  async getTranscriptionById({ commit }, transcriptionId) {
    try {
      const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/transcription/by-id/${transcriptionId}`)
      commit('updateField', { path: 'transcription', value: response.data })
      return response
    } catch (error) {
      return error
    }
  },
  async getUserTranscriptions({ commit }, userId) {
    try {
      const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/transcription/by-userId/${userId}`)
      if(response.data.length > 0) {
        commit('updateField', { path: 'transcriptions', value: response.data })
      }
      return response
    } catch (error) {
      return error
    }
  },

  async createTranscription({file, userId, name}) {
    try {
      const response = await axios.post(
        `${process.env.VUE_APP_SERVER_URL}/transcription/upload-audio/${userId}`,
        {file, name}
      )
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
