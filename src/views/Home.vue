<template lang="pug">
v-container.container.pa-0.ma-0(fluid)
  div.d-flex.align-center.justify-center.fill-height
    v-row
      v-col(cols=12)
        img(src="@/assets/logo.png" alt="logo")
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
  height: 95vh;
  width: 100%;
}
</style>
