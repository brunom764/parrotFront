<template>
  <v-container class="login-container mt-10" >
    <img class="logo" src="@/assets/logo.png" alt="logo">
    <v-col>
      <v-row class="pb-3">
        <v-btn width="400px" @click="login()">
          <v-icon class="pr-2">
              <img class="google-logo" src="@/assets/icons/google.svg" alt="Google logo">
          </v-icon> 
          <span>Entrar com Google</span> 
        </v-btn>
      </v-row>
      <v-row>
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
        <v-btn width="400px" :color="$root.$secundary">
          <span>Entrar</span>
        </v-btn>
      </v-row> 
      <v-row class="pt-3" justify="center">
        <a href="/register">Não tem uma conta? Cadastre-se</a>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import TextField from '../components/text/TextFieldComponent.vue';
import { googleTokenLogin } from "vue3-google-login"


export default {
  name: "LoginView",
  data() {
    return {
    }
  },
  components: {
    TextField,
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
  border-radius: 10px;
  background-color: white;
}

.logo {
  max-width: 300px;
}

.google-logo {
  max-width:20px;
}

a {
  color: #1f0310;
}

</style>
