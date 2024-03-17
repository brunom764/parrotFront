<template lang="pug">
v-container.container.pa-0.ma-0(fluid)
  div
        img(src="@/assets/logo.png" alt="logo").logo
        h1.text.py-4 Transforme suas palavras em ações, simplificando a análise de áudio!
        p.text Seu assistente de transcrição e insights inteligentes está aqui para impulsionar seu caminho para o sucesso.
        div.pt-16
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
  min-height: 90vh;
  width: 100%;
}

.logo {
  max-width: 80%;
  margin: 0 auto;
  display: block;
}
</style>
