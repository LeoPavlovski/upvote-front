<template>
  <v-app>
    <post-component></post-component>
  </v-app>
</template>

<script>
import postComponent from './components/postComponent.vue'

export default {
  name: 'App',

  components: {
    postComponent,
  },

  data: () => ({
    //
  }),
};
</script>
