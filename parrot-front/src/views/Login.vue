<template>
  <h1>Tela de Login</h1>
  <v-container class="login-container">
    <v-col>
      <v-row class="pb-3">
        <button-component label="Entrar com google" width="400px" @click="login()"></button-component>
      </v-row>
      <v-row class="text-align-center">
        <p>ou</p>
        <v-divider height="4" class="pb-3"></v-divider>
      </v-row>
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
import { googleTokenLogin } from "vue3-google-login"

export default {
  name: "LoginView",
  data() {
    return {
    }
  },
  components: {
    TextField,
    ButtonComponent
  },
  props: {
  },
  methods: {
    async login() {
      await googleTokenLogin ()
      .then((response) => {
        console.log("Handle the response", response)
      })
      .catch((error) => {
        console.log("Handle the error", error)
      })
      this.$router.push('/')
    },
    
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
}

.text-align-center {
  text-align: center;
}
</style>
