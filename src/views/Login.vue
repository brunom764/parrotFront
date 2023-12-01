<template lang="pug">
Snackbar
v-container.login-container.mt-10.pt-10
  img.logo(src="@/assets/logo.png" alt="logo")
  v-col
    v-row.pb-3
      v-btn(width="400px" rounded @click="loginWithGoogle()")
        v-icon.pr-2
          img.google-logo(src="@/assets/icons/google.svg" alt="Google logo")
        span Entrar com Google
    v-row
      v-divider.pb-3(height="4")
    v-row(v-if="loading" justify="center")
      v-progress-circular.loading(indeterminate color="primary")
    template(v-else)
      v-row
        text-field(v-model="email" type="email" label="E-mail")
      v-row
        text-field(v-model="password" type="password" label="Senha")
      v-row(justify="center")
        a(href="") Esqueci a senha
      v-row.pt-3(justify="center")
        v-btn(width="400px" rounded color="secundary" @click="login()")
          span Entrar
      v-row.pt-3(justify="center")
        a(href="/register") Não tem uma conta? Cadastre-se
</template>

<script>
import TextField from '../components/text/TextFieldComponent.vue';
import Snackbar from '@/components/snackbar/snackbarComponent.vue';
import { mapState } from "vuex";


export default {
  name: "LoginView",
  data() {
    return {
      email: '',
      password: '',
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
    async login() {
      await this.$store.dispatch('user/loginUser', {
        email: this.email,
        password: this.password,
      })
      .then((response) => {
        switch (response) {
          case 'auth/user-not-found':
            this.$root.$refs.snackbar.show('Usuário não encontrado!', true);
            break;
          case 'auth/wrong-password':
            this.$root.$refs.snackbar.show('Senha incorreta!', true);
            break;
          case 'auth/invalid-email':
            this.$root.$refs.snackbar.show('E-mail inválido!', true);
            break;
          case 'auth/user-disabled':
            this.$root.$refs.snackbar.show('Usuário desabilitado!', true);
            break;
          default:
            this.$root.$refs.snackbar.show('Usuário logado com sucesso!');
            this.$router.push('/feed');
            break;
        }
          
      })
    },
    
    async loginWithGoogle() {
      await this.$store.dispatch('user/loginUserWithGoogle')
      .then(() => {
        this.$root.$refs.snackbar.show('Usuário logado com sucesso!');
        this.$router.push('/feed');
      })
    }
  }
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

.google-logo {
  max-width:20px;
}

a {
  color: #1f0310;
}

.loading {
  margin-top: 5rem;
}

</style>
