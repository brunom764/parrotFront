<template >
<v-text-field 
  :label="label" 
  :type="type">
</v-text-field>
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
