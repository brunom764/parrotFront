<template lang="pug">
Snackbar
div.dashboard(height="100%")
  v-row
    v-col.resume-list(cols=3)
      h1 Dashboard
      v-btn(v-if="loggedIn" @click='logout') logout
    v-col(cols=9)
      h1 ola
</template>

<script>
import { mapState } from "vuex";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Snackbar from '@/components/snackbar/snackbarComponent.vue';

export default {
  name: 'DashboardView',
  components: {
    Snackbar,
  },
  computed:{
    ...mapState('user', ['loggedIn']),
  },
  beforeCreate() {
    let auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.commit('user/setLoggedIn', true);
      } else {
        this.$store.commit('user/setLoggedIn', false);
      }
    });
  },

  methods: {
    logout() {
      this.$store.dispatch('user/logoutUser')
      .then(() => {
        this.$root.$refs.snackbar.show('Usuário deslogado com sucesso!');
        this.$router.push('/login');
      })
    }
  }
}
</script>

<style scoped>
.dashboard {
  height: 100vh;
}
.resume-list {
  box-shadow: 10px 0px 5px -2px rgba(0,0,0,0.2); /* Adjust as needed */
  height: 100vh;
}
</style>
