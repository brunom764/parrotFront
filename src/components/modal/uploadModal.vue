<template lang="pug">
v-dialog.modal(v-model='dialog' width="500")
  v-card
    v-card-title
      v-row
        v-col(cols='6')
          span.text Novo Resumo
        v-col(cols='6', align='right')
          v-btn(variant='text' @click='closeModal')
            v-icon mdi-close
    v-card-text
      v-progress-circular(v-if="loading" indeterminate color="auxiliary")
      v-container(v-else)
        v-row
          v-col(cols='12')
            label.text Nome do Resumo:
            v-text-field(v-model='name' variant="outlined" clearable single-line label="Insira um nome para o resumo")
          v-col(cols='12')
            label.text Arquivo de áudio:
            input(type="file" @change="handleFileChange" accept="audio/*")
          v-col(cols='12' align='right')
            v-btn(color='auxiliary' @click='uploadFile')
              span.text Enviar
</template>

<script>
import TextField from '@/components/text/TextFieldComponent.vue';
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'UploadModal',
  computed: {
    ...mapFields('user', ['user']),
  },
  data() {
    return {
      dialog: false,
      name: '',
      selectedFile: null,
      loading: false,
    }
  },
  components: {
    TextField,
  },

  methods: {
    closeModal() {
      this.$emit('close');
    },

    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadFile() {
      // Transforme o arquivo em zip
      /* const formData = new FormData();
      formData.append('zipFile', this.selectedFile); */
      this.loading = true;
      await this.$store.dispatch('transcription/createTranscription', {
        file: this.selectedFile, 
        userId: this.user.id, 
        name: this.name 
      })
      .then(() => {
        this.$root.$refs.snackbar.show('Arquivo enviado com sucesso!', false);
        this.loading = false;
        this.closeModal();
      })
    }
  }
}
</script>

<style scoped>
.modal {
  border-radius: 5px;
}
.text{
  font-weight: bold;
}
</style>
