<template>
<v-container class="d-flex justify-center container">
  <img src="@/assets/logo.png" alt="logo">
</v-container>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  border-radius: 10px;
}
</style>
