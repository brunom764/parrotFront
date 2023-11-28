<template>
  <v-container class="login-container mt-10">
    <img class="logo" src="@/assets/logo.png" alt="logo">
    <v-col>
      <v-row>
        <v-divider height="4" class="pb-3"></v-divider>
      </v-row>
      <v-row>
        <text-field type="email" label="E-mail"></text-field>
      </v-row>
      <v-row>
        <text-field type="password" label="Senha"></text-field>
      </v-row>
      <v-row>
        <text-field type="password" label="Confirme a senha"></text-field>
      </v-row>
      <v-row class="pt-3" justify="center">
        <v-btn class="registrar-button" width="400px" :color="$root.$secundary">Cadastrar</v-btn>
      </v-row>
      <v-row class="pt-3" justify="center">
        <a href="/login">Já tem uma conta? Faça login</a>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import TextField from '../components/text/TextFieldComponent.vue';


export default {
  name: "RegisterView",
  data() {
    return {
    }
  },
  components: {
    TextField,
  },
  props: {
  },
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  border-radius: 10px;
  background-color: white;
}

.logo {
  max-width: 300px;
}
.registrar-botton {
  background-color: #1f0310;
  color: #ffffff;
} 

a {
  color: #1f0310;
}
</style>
