<template lang="pug">
div#app
  Snackbar(ref="snackbar")
  main
    router-view
  Footer(v-if="showFooter")
</template>

<script>
import Footer from './components/footer/footerComponenet.vue';
import Snackbar from './components/snackbar/snackbarComponent.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Snackbar,
  },
  computed: {
    showFooter() {
      return this.$route.path !== '/dashboard';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f0310;
  background-color: #a3d95b;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}

footer {
  padding: 1rem;
  font-weight: bolder;
}

</style>
