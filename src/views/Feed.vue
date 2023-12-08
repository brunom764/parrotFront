<template lang="pug">
Snackbar
h1 Feed
v-btn(v-if="loggedIn" @click='logout') logout
</template>

<script>
import { mapState } from "vuex";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Snackbar from '@/components/snackbar/snackbarComponent.vue';

export default {
  name: 'FeedView',
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
.feed {
  /* Add your feed styles here */
}
</style>
