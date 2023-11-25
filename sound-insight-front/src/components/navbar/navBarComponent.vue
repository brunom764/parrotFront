<template>
  <nav>
    <v-tabs v-model="tab">
      <v-tab>
        <span>Teste</span>
      </v-tab>
      <v-tab>
        <span>Teste</span>
      </v-tab>
      <v-tab>
        <span>Teste</span>
      </v-tab>
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
</style>
