<template>
  <nav class="navbar">
    <v-tabs v-model="tab" class="tabs">
      <router-link to="/">
        <v-tab class="tab-color">
          <span>Home</span>
        </v-tab>
      </router-link>
      <router-link to="/login">
        <v-tab class="tab-color">
          <span>login</span>
        </v-tab>
      </router-link>
      <router-link to="/register">
        <v-tab class="tab-color">
          <span>Cadastrar</span>
        </v-tab>
      </router-link>
    </v-tabs>
  </nav>
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
}
.tab-color {
  color: #1f0310 !important;
}
</style>
