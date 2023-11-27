<template>
  <nav>
    <v-tabs v-model="tab">
      <router-link to="/">
        <v-tab class="tabs">
          <span>Home</span>
        </v-tab>
      </router-link>
      <router-link to="/login">
        <v-tab class="tabs">
          <span>login</span>
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
  }
}
</script>

<style scoped>
.tabs {
  color: black !important;
}
</style>
