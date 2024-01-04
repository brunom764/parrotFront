<template lang="pug">
Snackbar
v-container.login-container.pt-10.mt-10
  img.logo(src="@/assets/logo.png" alt="logo")
  v-row(v-if="loading" justify="center")
    v-progress-circular.loading(indeterminate color="primary")
  v-col(v-else)
    v-row
      v-divider.pb-3(height="4")
    v-row
      text-field(v-model="email" type="email" label="E-mail")
    v-row
      text-field(v-model="password" type="password" label="Senha")
    v-row
      text-field(v-model="confirmPassword" type="password" label="Confirme a senha")
    v-row.pt-3(justify="center")
      v-btn.registrar-button(width="400px" rounded color="secundary" @click="register()") 
        span Cadastrar
    v-row.pt-3(justify="center")
        a(href="/login") Já tem uma conta? Faça login
</template>

<script>
import TextField from '../components/text/TextFieldComponent.vue';
import Snackbar from '../components/snackbar/snackbarComponent.vue';
import { mapState } from "vuex";

export default {
  name: "RegisterView",
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  computed:{
    ...mapState('user', ['loading']),
  },
  components: {
    TextField,
    Snackbar,
  },
  methods: {
    async register() {
      if (this.email === '' || this.password === '' || this.confirmPassword === '') {
        this.$root.$refs.snackbar.show('Preencha todos os campos!', true);
        return;
      }
      if (!this.isValidEmail(this.email)) {
        this.$root.$refs.snackbar.show('E-mail inválido!', true);
        return;
      }
      if (this.password.length < 6 ) {
        this.$root.$refs.snackbar.show('A senha deve ter no mínimo 6 caracteres!', true);
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.$root.$refs.snackbar.show('As senhas não conferem!', true);
        return;
      }
      await this.$store.dispatch('user/createUser', {
        email: this.email,
        password: this.password,
      })
      .then((result) => {
        if (result.status === 201){
          this.$root.$refs.snackbar.show('Usuário criado com sucesso!');
          this.$router.push('/login');
          return;
        }
        if (result.response.status === 500){
          this.$root.$refs.snackbar.show('E-mail já cadastrado', true);
          return;
        }
      })
    },

    isValidEmail(email) {
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      return regex.test(email);
    },
  },
}
</script>

<style scoped>
.login-container {
  min-height: 500px;
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
.loading {
  margin-top: 5rem;
}
</style>
