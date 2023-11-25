<template lang="pug">                                                                      

Login
</template>

<script>
import Home from './components/views/Home.vue'
import Login from './components/views/Login.vue';

export default {
  name: 'App',
  components: {
    Home,
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
