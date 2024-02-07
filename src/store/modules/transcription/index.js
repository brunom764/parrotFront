import { getField, updateField } from "vuex-map-fields";
import axios from 'axios';
import Swal from "sweetalert2";

export const state = {
  transcriptions: [],
  transcription: {},
  loadingNewTranscription: false,
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

  async createTranscription({commit}, {file, userId, name}) {
    openLoadingTranscriptionAlert();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    try {
        const response = await axios.post(
            `${process.env.VUE_APP_SERVER_URL}/transcription/upload-audio/${userId}`,
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        )
        if(response.status === 200) {
          commit('updateField', { path: 'transcription', value: response.data })
        }
        CloseLoadingTranscriptionAlert();
    } catch (error) {
        return error;
    }
  },

};

function openLoadingTranscriptionAlert() {
  Swal.fire({
      html: 'Aguarde enquanto sua nova transcrição é carregada!',
      position: 'top-end',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      backdrop: false,
      width: '300px',
      willOpen: () => {
          Swal.showLoading();
      }
  });
}

function CloseLoadingTranscriptionAlert() {
  Swal.close();
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
