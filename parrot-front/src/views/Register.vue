<template lang="pug">
v-container.login-container.pt-10.mt-10
  img.logo(src="@/assets/logo.png" alt="logo")
  v-col
    v-row
      v-divider.pb-3(height="4")
    v-row
      text-field(type="email" label="E-mail")
    v-row
      text-field(type="password" label="Senha")
    v-row
      text-field(type="password" label="Confirme a senha")
    v-row.pt-3(justify="center")
      v-btn.registrar-button(width="400px" rounded color="secundary") Cadastrar
    v-row.pt-3(justify="center")
      a(href="/login") Já tem uma conta? Faça login
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
