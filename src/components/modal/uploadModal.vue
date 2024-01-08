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
      v-container
        v-row
          v-col(cols='12')
            label.text Nome do Resumo:
            v-text-field(v-model='name' variant="outlined" clearable single-line label="Insira um nome para o resumo")
          v-col(cols='12')
            label.text Arquivo de áudio:
            input(type="file" @change="handleFileUpload" accept="audio/*")
          v-col(cols='12' align='right')
            v-btn(color='auxiliary' @click='uploadFile')
              span.text Enviar
</template>

<script>
import TextField from '@/components/text/TextFieldComponent.vue';
export default {
  name: 'UploadModal',
  data() {
    return {
      dialog: false,
      name: '',
      selectedFile: null
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
      console.log(this.selectedFile);
    },
    uploadFile() {
      // Transforme o arquivo em zip
      /* const formData = new FormData();
      formData.append('zipFile', this.selectedFile); */

      console.log(this.selectedFile);

      // Substitua a URL abaixo pela URL do seu backend para lidar com uploads de arquivos
      //const uploadUrl = 'http://seu-backend.com/upload-zip';

      // Faça a solicitação de upload usando axios
      /* this.$axios.post(uploadUrl, formData)
        .then(response => {
          console.log('Arquivo ZIP enviado com sucesso!', response.data);
          // Lógica adicional após o upload, se necessário
        })
        .catch(error => {
          console.error('Erro ao enviar o arquivo ZIP', error);
          // Lidar com erros, se necessário
        }); */
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
