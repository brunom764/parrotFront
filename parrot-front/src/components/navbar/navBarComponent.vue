<template lang="pug">
nav.navbar
  v-tabs(v-model="tab", class="tabs")
    router-link(to="/")
      v-tab.tab-color
        span Home
    router-link(to="/login")
      v-tab.tab-color
        span login
    router-link(to="/register")
      v-tab.tab-color
        span Cadastrar
</template>

<script>
export default {
  name: "NavBar",
  props: {},
  data() {
    return {
      tab: 0
    };
  },
  watch: {
    $route() {
      if (this.$route.path === "/") {
        this.tab = 0;
      } else if (this.$route.path === "/login") {
        this.tab = 1;
      } else if (this.$route.path === "/register") {
        this.tab = 2;
      }
    }
  }
}
</script>

<style scoped>
.tabs {
  float: right;
}
.navbar {
  font-family: inherit;
  height: 50px;
  text-transform: unset !important;
}
.tab-color {
  color: #1f0310 !important;
}
</style>
