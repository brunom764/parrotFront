<template lang="pug">
v-text-field(
  :label="label"
  :type="type"
  :solo="solo"
)
</template>

<script>
export default {
  name: 'TextField',
  props: {
  label: String,
  type: String,
  solo: Boolean,
  }
}
</script>

<style scoped>
</style>
