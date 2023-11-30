<template lang="pug">
v-snackbar(v-model="showSnackbar" vertical :timeout="3000" :color="color")
  span {{ message }}
  template(v-slot:action="{ attrs }")
    v-btn(v-bind="attrs" text @click="closeSnackbar()") Fechar 
</template>

<script>
export default {
  data() {
    return {
      showSnackbar: false,
      message: "",
      color: "",
    };
  },
  methods: {
    show(message, error) {
      this.message = message;
      this.color = error ? "lighterError" : "lighterSuccess"
      this.showSnackbar = true;
    },
    closeSnackbar() {
      this.showSnackbar = false;
    }
  }
};
</script>

<style scoped>
span {
  font-weight: bold;
}
</style>
