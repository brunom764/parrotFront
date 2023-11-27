<template>
<div id="app">
  <NavBar class="mb-10"></NavBar>
  <div>
    <router-view></router-view>
  </div>
  <Footer class="pt-3"></Footer>
</div>
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
