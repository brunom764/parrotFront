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
  setQuestions(state, questions) {
    state.questions = questions;
  },
  addQuestion(state, question) {
    state.questions.push(question);
  }
};

export const actions = {
  async getQuestionsByTransId({ commit }, transId) {
    try {
      const response = await axios.get(`${process.env.VUE_APP_SERVER_URL}/question/by-trans-id/${transId}`)
      commit('updateField', { path: 'questions', value: response.data })
      return response
    } catch (error) {
      return error
    }
  },

  async createQuestion(state, {question, transId}) {
    try {
      const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/question/create`, {transId, question})
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
