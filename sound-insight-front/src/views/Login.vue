<template>
  <h1>Tela de Login</h1>
  <v-container class="login-container">
    <v-col>
      <v-row>
        <text-field type="email" label="E-mail"></text-field>
      </v-row>
      <v-row>
        <text-field type="password" label="Senha"></text-field>
      </v-row>
      <v-row justify="center">
        <a href="">Esqueci a senha</a>
      </v-row>
      <v-row class="pt-3" justify="center">
        <button-component label="Entrar" width="400px"></button-component>
      </v-row>
      <v-row class="pt-3" justify="center">
        <a href="">Não tem uma conta? Cadastre-se</a>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import TextField from '../components/text/TextFieldComponent.vue';
import ButtonComponent from '../components/button/ButtonComponent.vue';

export default {
  name: "LoginView",
  components: {
    TextField,
    ButtonComponent
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
}
</style>
