<template>
<div id="app">
  <NavBar></NavBar>
  <div id="body" class="pt-10">
    <router-view></router-view>
    <Footer class="pt-3"></Footer>
  </div>
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
  color: #1f0310;
  height: 100vh;
  width: 100%;
  background-color: #a3d95b;
}
</style>
