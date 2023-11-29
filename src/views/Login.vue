<template lang="pug">
v-container.login-container.mt-10.pt-10
  img.logo(src="@/assets/logo.png" alt="logo")
  v-col
    v-row.pb-3
      v-btn(width="400px" rounded @click="login()")
        v-icon.pr-2
          img.google-logo(src="@/assets/icons/google.svg" alt="Google logo")
        span Entrar com Google
    v-row
      v-divider.pb-3(height="4")
    v-row
      text-field(type="email" label="E-mail")
    v-row
      text-field(type="password" label="Senha")
    v-row(justify="center")
      a(href="") Esqueci a senha
    v-row.pt-3(justify="center")
      v-btn(width="400px" rounded color="secundary")
        span Entrar
    v-row.pt-3(justify="center")
      a(href="/register") Não tem uma conta? Cadastre-se
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
