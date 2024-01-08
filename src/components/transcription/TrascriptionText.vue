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
      p {{ text }}
</template>

<script>
export default {
  name: 'TrascriptionText',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    copyText() {
      console.log('copied');
      /* // Selecione o elemento que contém o texto que você deseja copiar
      const elementoTexto = document.getElementById('seu-elemento-de-texto'); // Substitua com o ID ou classe do seu elemento de texto

      // Crie um intervalo para selecionar o texto no elemento
      const intervaloSelecao = document.createRange();
      intervaloSelecao.selectNode(elementoTexto);

      // Limpe a seleção anterior e adicione a nova seleção
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(intervaloSelecao);

      // Execute o comando de cópia
      document.execCommand('copy');

      // Limpe a seleção
      window.getSelection().removeAllRanges();

      // (Opcional) Adicione uma mensagem ou lógica adicional após a cópia
      console.log('Texto copiado com sucesso!'); */
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
