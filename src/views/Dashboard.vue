<template lang="pug">
UploadModal(v-model="uploadModalOpen" @close="uploadModalOpen = false")
div.dashboard
  v-row
    v-col.menu.d-flex.flex-column.justify-center(cols=3)
      v-row.new-resume
        v-col
          v-btn.mt-4(color="auxiliary" rounded @click="uploadModalOpen = true")
            span Crie um novo Resumo
            v-icon(right) mdi-plus
      v-row.resume-list
        template(v-for="(resume, index) in resumes" :key="index")
          v-col.text-left(cols=12 style="cursor: pointer;")
            span.ml-4 {{ resume.name }}
            p.ml-4 {{ '20 min 34s' + ' - ' + '20/11/2021' }}
            v-divider.mr-4.ml-4
      v-row.tooltip-menu
        v-col
          v-row.justify-center.align-center
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
            AiChatSummary
          v-col(cols=6)
            TrascriptionText
            
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Snackbar from '@/components/snackbar/snackbarComponent.vue';
import UploadModal from '@/components/modal/uploadModal.vue';
import AiChatSummary from '@/components/transcription/AiChatSummary.vue';
import TrascriptionText from '@/components/transcription/TrascriptionText.vue';

export default {
  name: 'DashboardView',
  components: {
    Snackbar,
    UploadModal,
    AiChatSummary,
    TrascriptionText,
  },
  data() {
    return {
      uploadModalOpen: false,
      resumeIsInAnalysis: true,
      resumes: [{ name: 'Resumo 1' }, { name: 'Resumo 2' }, { name: 'Resumo 3'}, { name: 'Resumo 4' }, { name: 'Resumo 5' }, { name: 'Resumo 6' },],
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

  created() {

  },

  methods: {
    sendQuestion(){
      if (this.question.trim() !== "") {
        this.messages.push({ text: this.question, isUser: true });
        this.messages.push({ text: "Resposta do Bot", isUser: false });
        this.question = "";
      }
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
.new-resume{
  flex: 0 0 15%;  
}
.resume-list {
  flex: 1 1 70%;
  overflow-y: auto;
}
.tooltip-menu {
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
.menu {
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
  max-width: 130px;
}

p {
  font-size: small;
  font-family: inherit;
}
</style>
