<template lang="pug">
Snackbar
v-card.card.d-flex.flex-column.justify-center(height="70vh")
    v-row.header-row
      v-col.pb-0.pr-0(cols="6")
        v-btn.tooltip.ma-3(height="50px" min-width="140px" :ripple="false" @click="parrotArea = 0") 
          span AI Chat
      v-col.pl-0(cols="6" class="pb-0")
        v-btn.tooltip.ma-3.ml-0(height="50px" min-width="140px" :ripple="false" @click="getSummaryTranscription()") 
          span Summary
      v-divider.mt-2
    v-row(v-if="loading")
      v-col(cols="12")
        v-progress-linear(indeterminate color="auxiliary")
    template(v-else) 
      template(v-if="parrotArea === 0")
        v-row(v-if="questions.length < 1").chat-area.align-center
          v-col(cols="12")
            p Sua resposta aparecerá aqui
        v-row(v-else).chat-area
          v-col(cols="12")
            v-row(v-for="(message, index) in questions" :key="index")
              v-col(cols="12").user-message
                v-icon.mr-2 mdi-account
                p.ml-2.mr-2 {{ message.question }}
              v-col(cols="12").bot-message
                v-icon.ml-2 mdi-robot
                p.mr-2.ml-2 {{ message.answer !== '' ? message.answer : '...' }}
        v-row.chat-input
          v-col(cols="12")
            v-progress-linear.mb-1(indeterminate color="auxiliary" v-if="sendingQuestionLoading")
            v-text-field.ml-3.mr-3(label="O que você gostaria de saber?" v-model="newQuestion" variant="outlined" clearable append-inner-icon="mdi-arrow-up-box" single-line @click:append-inner="sendQuestion")
      template(v-else)
        v-row.overflow-auto
          v-col(cols=12)
            p.ml-1.pr-4.pl-2.text-justify {{ summary.summary }}
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import Snackbar from '@/components/snackbar/snackbarComponent.vue';

export default {
  name: 'AiChatSummary',
  components: {
    Snackbar,
  },
  data() {
    return {
        newQuestion: '',
        parrotArea: 0,
        loading: false,
        sendingQuestionLoading: false,  
    }
  },

  props: {
    transcription: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapFields('question', ['questions']),
    ...mapFields('summary', ['summary']),
    ...mapFields('user', ['user', 'credits'])
  },

  async beforeCreate() {
    this.loading = true;
    await this.$store.dispatch('question/getQuestionsByTransId', this.transcription.id);
    this.loading = false;
  },

  methods: {
    async sendQuestion() {
      if (this.newQuestion.trim() !== "") {
        this.sendingQuestionLoading = true;
        const payLoad = {
          question: this.newQuestion,
          transId: this.transcription.id,
        };
        this.newQuestion = "";
        await this.$store.dispatch('question/createQuestion', payLoad)
        .then((response) => {
          if(response.status === 201) {
            let newUser = JSON.parse(localStorage.getItem('user'));
            newUser.credits -= 1;
            localStorage.setItem('user', JSON.stringify(newUser));
            this.$store.commit('user/setUser', newUser);
            this.$store.commit('user/setCredits', this.credits - 1);
            this.$store.commit('question/addQuestion', response.data);
          }
        })
        this.sendingQuestionLoading = false;
      }
    },

    async getSummaryTranscription() {
      this.parrotArea = 1;
      if (this.summary != null) {
        return;
      }
      this.loading = true;
      await this.$store.dispatch('summary/getSummaryByTransId', this.transcription.id);
      if (this.summary.summary.trim() === ''){
        await this.createSummaryTranscription();
      }
      this.loading = false;
    },

    async createSummaryTranscription() {
      await this.$store.dispatch('summary/createSummaryByTransId', this.transcription.id)
      .then((response) => {
        if(response.status === 201) {
          let newUser = JSON.parse(localStorage.getItem('user'));
            newUser.credits -= 1;
            localStorage.setItem('user', JSON.stringify(newUser));
            this.$store.commit('user/setUser', newUser);
            this.$store.commit('user/setCredits', this.credits - 1);
        }
      })
    },
  },

  async beforeUnmount() {
    await this.$store.commit('question/setQuestions', []);
    await this.$store.commit('summary/setSummary', null);
  }
}
</script>

<style scoped>
.header-row {
  flex: 0 0 15%;  
}
.chat-area {
  flex: 1 1 70%;
  overflow-y: auto;
}
.chat-input {
  flex: 0 0 15%; 
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

.user-message {
  text-align: right ;
}
.bot-message {
  text-align: left;
}

.text-justify {
  text-align: justify;
}

.overflow-auto {
  overflow: auto;
}
</style>