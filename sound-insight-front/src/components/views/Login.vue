<template lang="pug">
h1 Tela de Login
v-container.login-container
  v-col
    v-row
      TextField(type="email" label="E-mail")
    v-row
      TextField(type="password" label="Senha")
    v-row(justify="center")
      a(href="") Esqueci a senha
    v-row.pt-3(justify="center")
      ButtonComponent(label="Entrar" width="400px")
    v-row.pt-3(justify="center")
      a(href="") Não tem uma conta? Cadastre-se

</template>

<script>
import TextField from '../text/TextFieldComponent.vue';
import ButtonComponent from '../button/ButtonComponent.vue';

export default {
  name: "HomeView",
  components: {
    TextField,
    ButtonComponent
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
  max-width: 400px;
}
</style>
