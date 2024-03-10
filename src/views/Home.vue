<template lang="pug">
v-container.container.d-flex.align-center.pa-0.ma-0(fluid)
  v-row.d-flex.justify-center.pa-0.ma-0
    v-col.pa-0.ma-0(cols="auto" xl="6" md="12" sm="12" lg="6")
      img(src="@/assets/logo.png" alt="logo")
    v-col.home-text.pa-0.pt-15.ma-0(cols="auto" xl="6" md="12" sm="12" lg="6")
      h1.text Transforme suas palavras em ações, simplificando a análise de áudio!
      p.text Seu assistente de transcrição e insights inteligentes está aqui para impulsionar seu caminho para o sucesso.
      div.pt-2
        router-link(to="/login")
          v-btn(color="auxiliary" rounded)
            span Começar
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  text-justify: auto;
  height: 85vh;
  width: 100%;
  border-radius: 10px;
}

.home-text {
  max-width: 500px;
}
</style>
