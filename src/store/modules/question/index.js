import { getField, updateField } from "vuex-map-fields";
import axios from 'axios';

export const state = {
  questions: [],
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
};

export const actions = {
  async getQuestionsByTransId({ commit }, transId) {
    try {
      const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/questions/${transId}`)
      commit('updateField', { path: 'questions', value: response.data })
      return response
    } catch (error) {
      return error
    }
  },

  async createQuestion({question, transId}) {
    try {
      const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/create-question`, {question, transId})
      state.questions.push(response.data)
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
