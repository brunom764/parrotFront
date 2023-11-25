<template>
  <v-btn :depressed="depressed" :disabled="disabled" :raised="raised" :fab="fab" :icon="icon" :text="text" :outlined="outlined" :loading="loading" :rounded="rounded">
    <span>{{ label }}</span>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtomComponent',
  props: {
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    depressed: { 
      type: Boolean,
      default: false
    },
    raised: { 
      type: Boolean,
      default: true
    },
    fab: { 
      type: Boolean,
      default: false
    },
    icon: { 
      type: Boolean,
      default: false
    },
    text: { 
      type: Boolean,
      default: false
    },
    outlined: { 
      type: Boolean,
      default: false
    },
    loading: { 
      type: Boolean,
      default: false
    },
    rounded: { 
      type: Boolean,
      default: false
    },
    href: { 
      type: String,
      default: ""
    },
  }
}
</script>

<style scoped>
</style>
