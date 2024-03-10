import { getField, updateField } from "vuex-map-fields";
import { signInWithEmailAndPassword, getAuth, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth'
import axios from 'axios';

export const state = {
  loading: false,
  user: null,
  credits: 0,
};

export const getters = {
  getField,
};

export const mutations = {
  updateField,
  setUser: (state, user) => {
    state.user = user;
  },
  setCredits: (state, credits) => {
    state.credits = credits;
  },
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
      await this.dispatch('user/getUserByEmail', {email})
      commit('updateField', { path: 'loading', value: false })
      return response;
    } catch (error) {
      commit('updateField', { path: 'loading', value: false })
      return error.code;
    }
  },

  async loginUserWithGoogle() {
    const provider  = new GoogleAuthProvider(); 
    const response = await signInWithPopup(getAuth(), provider)
    await axios.post(`${process.env.VUE_APP_SERVER_URL}/identity/login-with-google`, {email: response.user.email})
    await this.dispatch('user/getUserByEmail', {email: response.user.email})
  },

  async logoutUser({ commit }) {
    const auth = getAuth();

    try {
      const response = await signOut(auth)
      localStorage.removeItem('user')
      commit('updateField', { path: 'user', value: null })
      commit('updateField', { path: 'credits', value: 0 })
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
  },

  async getUserById({ commit }, id) {
    const user = await axios.get(`${process.env.VUE_APP_SERVER_URL}/identity/user-by-id/${id}`)
    localStorage.setItem('user', JSON.stringify(user.data))
    commit('updateField', { path: 'credits', value: user.data.credits })
    commit('updateField', { path: 'user', value: user.data })
  },

  async getUserByEmail({ commit }, {email}) {
    const user = await axios.get(`${process.env.VUE_APP_SERVER_URL}/identity/user-by-email/${email}`)
    localStorage.setItem('user', JSON.stringify(user.data))
    commit('updateField', { path: 'credits', value: user.data.credits })
    commit('updateField', { path: 'user', value: user.data })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
