<template lang="pug">
Snackbar
v-card.card.d-flex.flex-column.justify-center(height="70vh")
    v-row.header-row
      v-col(cols="6" class="pb-0")
        v-btn.tooltip.ma-3(height="50px" width="180px" :ripple="false" @click="parrotArea = 0") 
          span Parrot AI Chat
      v-col(cols="6" class="pb-0")
        v-btn.tooltip.ma-3(height="50px" width="180px" :ripple="false" @click="parrotArea = 1") 
          span Parrot AI Summary
      v-divider.mt-2 
    template(v-if="parrotArea === 0")
      v-row(v-if="questions.length < 1").chat-area.align-center
        v-col(cols="12")
          p Sua resposta aparecerá aqui
      v-row(v-else).chat-area
        v-col(cols="12")
          v-row(v-for="(message, index) in questions" :key="index" :class="{ 'user-message': message.question, 'bot-message': message.answer }")
            v-col(cols="12")
              v-icon.mr-2(v-if="message.question") mdi-account
              v-icon.ml-2(v-else) mdi-robot
              p.ml-2.mr-2 {{ message.text }}
      v-row.chat-input
        v-col(cols="12")
          v-text-field.ml-3.mr-3(label="O que você gostaria de saber?" v-model="newQuestion" variant="outlined" clearable append-inner-icon="mdi-arrow-up-box" single-line @click:append-inner="sendQuestion")
    template(v-else)
      v-row
        v-col(cols=12)
          p {{ summary }}
</template>

<script>
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
    }
  },
  props: {
    questions: {
      type: Array,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  },
  methods: {
    async sendQuestion() {
      if (this.newQuestion.trim() !== "") {
        await this.$store.dispatch('question/createQuestion', {
          question: this.newQuestion,
          transcriptionId: this.transcriptionId,
        });
        this.newQuestion = "";
      }
    },
  },
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
</style>