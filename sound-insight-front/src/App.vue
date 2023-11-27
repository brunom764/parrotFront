<template>
  <NavBar></NavBar>
  <div>
    <router-view></router-view>
  </div>
  <Footer class="pt-3"></Footer>
</template>

<script>
import NavBar from './components/navbar/navBarComponent.vue';
import Footer from './components/footer/footerComponenet.vue';

export default {
  name: 'App',
  components: {
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
