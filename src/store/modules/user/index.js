import { getField, updateField } from "vuex-map-fields";
import { signInWithEmailAndPassword, getAuth, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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
    return signInWithPopup(getAuth(), provider)
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
  }

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
