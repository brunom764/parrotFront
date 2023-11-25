<template>
  <NavBar></NavBar>
  <Login></Login>
  <v-divider></v-divider>
  <Footer class="pt-3"></Footer>
</template>

<script>
import Login from './components/views/Login.vue';
import NavBar from './components/navbar/navBarComponent.vue';
import Footer from './components/footer/footerComponenet.vue';

export default {
  name: 'App',
  components: {
    Login,
    NavBar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
