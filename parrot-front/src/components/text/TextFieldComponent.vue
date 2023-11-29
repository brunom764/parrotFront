<template lang="pug">
v-text-field(
  :label="label"
  :type="type"
)
</template>

<script>
export default {
  name: 'TextField',
  props: {
  label: String,
  type: String
  }
}
</script>

<style scoped>
</style>
