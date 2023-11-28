<template>
<div id="app">
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <Footer></Footer>
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
  padding-bottom: 1rem;
  font-weight: bolder;
}

</style>
