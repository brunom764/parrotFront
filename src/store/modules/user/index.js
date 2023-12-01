import { getField, updateField } from "vuex-map-fields";
import { signInWithEmailAndPassword, getAuth, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth'
import axios from 'axios';

export const state = {
  loggedIn: false,
  loading: false,
};

export const getters = {
  getField,
  getUserId: (state) => state.idUser,
};

export const mutations = {
  updateField,
  setLoggedIn: (state, loggedIn) => {
    state.loggedIn = loggedIn;
  }
};

export const actions = {
  async createUser({ commit }, {email, password}) {
    commit('updateField', { path: 'loading', value: true })
    try {
      const response = await axios.post(`${process.env.VUE_APP_SERVER_URL}/identity/create`, {email, password})
      commit('updateField', { path: 'loading', value: false })
      return response
    } catch (error) {
      commit('updateField', { path: 'loading', value: false })
      return error
    }
  },

  async loginUser({ commit }, {email, password}) {
    commit('updateField', { path: 'loading', value: true })
    const auth = getAuth();

    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      commit('updateField', { path: 'loggedIn', value: true })
      commit('updateField', { path: 'loading', value: false })
      return response;
    } catch (error) {
      commit('updateField', { path: 'loading', value: false })
      return error.code;
    }
  },

  async loginUserWithGoogle() {
    const provider  = new GoogleAuthProvider(); 
    await signInWithPopup(getAuth(), provider)
    //await axios.post(`${process.env.VUE_APP_SERVER_URL}/identity/login-with-google`, response.user.email)
  },
  async logoutUser({ commit }) {
    const auth = getAuth();

    try {
      const response = await signOut(auth)
      commit('updateField', { path: 'loggedIn', value: false })
      return response;
    } catch (error) {
      return error.code;
    }
  },

  async resetPassword({commit}, email){
    commit('updateField', { path: 'loading', value: true })
    const auth = getAuth();
    try {
      const response = await sendPasswordResetEmail(auth, email)
      commit('updateField', { path: 'loading', value: false })
      return response;
    } catch (error) {
      commit('updateField', { path: 'loading', value: false })
      return error.code;
    }

  }

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
