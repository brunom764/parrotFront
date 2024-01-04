<template lang="pug">
Snackbar
UploadModal(v-model="uploadModalOpen" @close="uploadModalOpen = false")
div.dashboard
  v-row
    v-col.resume-list(cols=3)
      v-row 
        v-col
          v-btn.mt-4(color="auxiliary" rounded @click="uploadModalOpen = true")
            span Crie um novo Resumo
            v-icon(right) mdi-plus
      v-container.fill-height.d-flex.flex-column
        v-spacer
        v-spacer
        v-spacer
        v-spacer
        v-spacer
        v-spacer
        v-spacer
        v-row
          v-col
            v-row
              v-col.tooltip.pa-0(cols=12)
                v-btn(variant="text")
                  img.icon(src="@/assets/icons/coin.svg" alt="credits" )
                  p 0
                v-btn(@click="logout" variant="text")
                  img.icon(src="@/assets/icons/logout.svg" alt="logout" )
    v-col.transcription(cols=9)
      img.logo(src="../assets/logo.png" alt="logo")
      v-container.fill-height(v-if="!resumeIsInAnalysis" fluid)
        v-row.justify-center.align-center
          v-col(cols=12) 
            span.text Começe a analisar seus áudios!
      v-container(v-if="resumeIsInAnalysis" fluid)
        v-row
          v-col.left-text(cols=5) 
            span.text Resumo da entrevista
            v-row.pl-3 
              v-col.pl-0
                p 20 min 30 seg
              v-col
                p 20/11/2023
              v-col
                p 2033 palavras
        v-row
          v-col(cols=6)
            v-card.card.d-flex.flex-column.justify-center(height="70vh")
              v-row.header-row
                v-col(cols="6" class="pb-0")
                  v-btn.tooltip.ma-3(height="50px" width="180px" :ripple="false") 
                    span Parrot AI Chat
                v-col(cols="6" class="pb-0")
                  v-btn.tooltip.ma-3(height="50px" width="180px" :ripple="false") 
                    span Parrot Resumo
              v-divider.mt-2  // Linha divisória
              v-row.chat-area
                v-col(cols="12")
                  p Sua resposta aparecerá aqui
              v-row.chat-input
                v-col(cols="12")
                  v-text-field.ml-3.mr-3(label="O que você gostaria de saber?" v-model="question" variant="outlined" clearable append-inner-icon="mdi-arrow-up-box" single-line @click:append-inner="sendQuestion")
                      

          v-col(cols=6)
           v-card.card(height="70vh")
            
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Snackbar from '@/components/snackbar/snackbarComponent.vue';
import UploadModal from '@/components/modal/uploadModal.vue';

export default {
  name: 'DashboardView',
  components: {
    Snackbar,
    UploadModal,
  },
  data() {
    return {
      uploadModalOpen: false,
      resumeIsInAnalysis: true,
      question: '',
    }
  },
  beforeCreate() {
    let auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.commit('user/setLoggedIn', true);
      } else {
        this.$store.commit('user/setLoggedIn', false);
      }
    });
  },

  methods: {
    sendQuestion(){
      console.log(this.question)
    },
    logout() {
      this.$store.dispatch('user/logoutUser')
      .then(() => {
        this.$root.$refs.snackbar.show('Usuário deslogado com sucesso!');
        this.$router.push('/login');
      })
    }
  }
}
</script>

<style scoped>
.header-row {
  flex: 0 0 15%;  
}
.chat-area {
  flex: 0 0 70%; 
}
.chat-input {
  flex: 0 0 15%; 
}
.transcription {
  background-color: #b5da85;
}
.left-text {
  text-align: left;
}
.dashboard {
  min-height: 100vh;
  min-width: 100vh;
  width: 100%;
  height: 100%;
  overflow: hidden;

}
.resume-list {
  box-shadow: 10px 0px 5px -2px rgba(0,0,0,0.2); 
  height: 102vh;
}
.logo {
  position: absolute;
  top: 0;
  width: 250px; 
  height: auto;
  right: 0;
}
.text {
  top: 50 !important;
  font-size: 30px;
  font-weight: bold;
  white-space: nowrap;
}
.icon {
  max-width: 20px;
  filter: invert(98%) sepia(100%) saturate(7%) hue-rotate(155deg) brightness(102%) contrast(106%);
}
.tooltip {
  background-color: #1f0310;
  border-radius: 10px;
  color: white;
}

p {
  font-size: small;
  font-family: inherit;
}

.card {
  border-radius: 10px;
  margin: 10px;
  background-color: #f6f0bc;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>
