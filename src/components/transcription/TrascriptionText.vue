<template lang="pug">
v-card.card.d-flex.flex-column.justify-center(height="70vh")
  v-row.header-row
    v-col.left-text.mt-4(cols=6) 
      span.text.ml-5 Seu áudio transcrito:
      p.ml-5 3234 palavras
    v-col.mt-4.text-end(cols=6)
      v-icon.mr-5(style="cursor:pointer;" @click="copyText") mdi-content-copy
    v-divider 
  v-row.text-area
    v-col(cols=12)
      p.texto {{ text }}
</template>

<script>
export default {
  name: 'TrascriptionText',
  props: {
    text: {
      type: String,
      required: true,
    }
  },
  methods: {
    copyText() {
      // Criação de um elemento de área de transferência temporário
      const areaDeTransferenciaTemp = document.createElement('textarea');
      areaDeTransferenciaTemp.value = this.text;
      // Adiciona o elemento de área de transferência temporário ao DOM
      document.body.appendChild(areaDeTransferenciaTemp);

      // Seleciona e copia o texto
      areaDeTransferenciaTemp.select();
      document.execCommand('copy');

      // Remove o elemento de área de transferência temporário
      document.body.removeChild(areaDeTransferenciaTemp);

      // Alerta ou outra ação após a cópia (opcional)
      this.$root.$refs.snackbar.show('Texto copiado!');
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 10px;
  margin: 10px;
  background-color: #f6f0bc;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
}
.left-text {
  text-align: left;
}
.header-row {
  flex: 0 0 20%;  
}
.text {
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
}
p {
  font-size: small;
  font-family: inherit;
}
.text-area {
  flex: 1 1 80%;
  overflow-y: auto;
}
</style>
