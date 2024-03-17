<template lang="pug" class="template">
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
.template {
  overflow: hidden;
}

#app {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: #1f0310;
  background-color: #a3d95b;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

::-webkit-scrollbar {
  display: none;
}

Footer {
  font-weight: bold;
  font-size: 0.75em;
}

</style>
