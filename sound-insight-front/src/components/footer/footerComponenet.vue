<template>
<div id="footer">
  <v-divider></v-divider>
  <footer>
    @2023 { nome ???}
  </footer>
</div>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style>
footer {
  padding: 1rem;
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;            /* Footer height */
}
</style>
