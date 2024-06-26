<template lang="pug">
UploadModal(v-model="uploadModalOpen" @close="closeModal()")
div.dashboard
  v-row
    v-col(cols=3)
      v-container.menu.d-flex.flex-column.justify-center.ma-0.pa-0
        v-row
          v-col(cols=12)
            v-btn.mt-4(color="auxiliary" rounded @click="uploadModalOpen = true")
              span.pr-1 nova transcrição
              v-icon(right) mdi-plus
        v-row.resume-list
          v-col(cols=12)
            template(v-for="(resume, index) in transcriptions" :key="index")
              v-col.text-left.mb-0.mt-0(cols=12 style="cursor: pointer; max-height: 100px" @click="getTranscriptionDetails(resume.id)")
                span.ml-4 {{ resume.name }}
                p.ml-4 {{ formatDuration(resume.duration) + ' - ' + formatDate(resume.createdAt, 'DD/MM/YYYY') }}
                v-divider.mr-4.ml-4
        v-row.justify-center.d-flex
          v-col.tooltip.pa-0(cols=12)
            v-btn(variant="text")
              img.icon(src="@/assets/icons/coin.svg" alt="credits")
              p {{ credits }}
            v-btn(@click="logout" variant="text")
              img.icon(src="@/assets/icons/logout.svg" alt="logout" )
    v-col.transcription(cols=9)
      img.logo(src="../assets/logo.png" alt="logo")
      template(v-if="loadingNewResume")
        v-row.fill-height.d-flex.justify-center.align-center 
          v-col.text-center
            v-progress-circular(indeterminate color="auxiliary")
      template(v-else)
        v-container.fill-height(v-if="!resumeIsInAnalysis" fluid)
          v-row.justify-center.align-center
            v-col(cols=12) 
              span.text Crie um novo resumo e começe a analisar seus áudios!
        v-container(v-if="resumeIsInAnalysis" fluid)
          v-row
            v-col.left-text(cols=12) 
              span.text {{ transcription.name }}
              v-btn.ml-3.mb-2(@click="deleteTranscriptionById(transcription.id, index)" variant="text")
                v-icon mdi-delete
              v-row(style="max-width: 250px;").pl-3 
                v-col.pl-0
                  p {{ formatDuration(transcription.duration) }}
                v-col
                  p {{ formatDate(transcription.createdAt, 'DD/MM/YYYY') }}
                //v-col
                  p 2033 palavras
          v-row
            v-col(cols=6)
              AiChatSummary(:transcription="transcription")
            v-col(cols=6)
              TrascriptionText(:transcription="transcription.text")
            
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Snackbar from '@/components/snackbar/snackbarComponent.vue';
import UploadModal from '@/components/modal/uploadModal.vue';
import AiChatSummary from '@/components/transcription/AiChatSummary.vue';
import TrascriptionText from '@/components/transcription/TrascriptionText.vue';
import { mapFields } from 'vuex-map-fields';
import moment from 'moment';

export default {
  name: 'DashboardView',
  components: {
    Snackbar,
    UploadModal,
    AiChatSummary,
    TrascriptionText,
  },
  computed: {
    ...mapFields('user', ['user', 'credits']),
    ...mapFields('transcription', ['transcriptions', 'transcription', 'loadingNewTranscription']),
  },
  data() {
    return {
      uploadModalOpen: false,
      resumeIsInAnalysis: false,
      loadingNewResume: false,
    }
  },
  async beforeCreate() {
    let auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if ((user && localStorage.getItem('user')) && (user.email === JSON.parse(localStorage.getItem('user')).email)) {
        await this.$store.commit('user/setUser', JSON.parse(localStorage.getItem('user')));
        await this.$store.commit('user/setCredits', this.user.credits)
        await this.$store.dispatch('transcription/getUserTranscriptions', this.user.id)
      } else {
        this.logout();
      }
    });
  },

  methods: {

    formatDuration(duration) {
      let minutes = Math.floor(duration / 60);
      let seconds = duration % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      return minutes + 'm ' + seconds + 's';
    },

    formatDate(date, format) {
      return moment(date).format(format);
    },

    async getTranscriptionDetails(id) {
      this.loadingNewResume = true;
      await this.$store.dispatch('transcription/getTranscriptionById', id)
      .then(() => {
        this.resumeIsInAnalysis = true;
      })
      this.loadingNewResume = false;
    },

    async logout() {
      await this.$store.dispatch('user/logoutUser')
      this.$root.$refs.snackbar.show('Usuário deslogado com sucesso!', true);
      await this.$router.push('/login');
    },
    
    async deleteTranscriptionById(transcriptionId) {
      await this.$store.dispatch('transcription/deleteTranscriptionById', transcriptionId)
      .then((response) => {
        if (response.status === 200 || response.status === 204){
          this.$root.$refs.snackbar.show('Resumo deletado com sucesso!', false);
          this.$store.dispatch('transcription/getUserTranscriptions', this.user.id)
          this.resumeIsInAnalysis = false;
        }
        else {
          this.$root.$refs.snackbar.show('Erro ao deletar resumo!', true);
        }
      })
    },

    async closeModal() {
      this.resumeIsInAnalysis = false;
      this.uploadModalOpen = false;
    },
  },
  
}
</script>

<style scoped>  
.resume-list {
  flex: 1 1 70%;
  overflow-y: auto;
  display: flex;
  justify-content: center;
}
.transcription {
  background-color: #b5da85;
}
.left-text {
  text-align: left;
}
.dashboard {
  min-height: 100vh;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.menu {
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
  height: 100vh;
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
  font-size: 2rem;
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
  max-width: 150px;
  max-height: 35px;
}

p {
  font-size: small;
  font-family: inherit;
}

@media (max-width: 900px) {
  .logo {
    display: none;
  }
  .text {
    font-size: 1.5rem;
  }
}
</style>
