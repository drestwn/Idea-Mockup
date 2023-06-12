<script>
import { RouterLink, RouterView } from 'vue-router'
// import { checkStatusLog, useLoginStore } from './stores/gettingIn'
// import { mapActions, mapState } from 'pinia';

// export default {
//   name: 'App',
//   methods: {
//     ...mapActions(useLoginStore, ['checkStatusLog'])
//   },
//   computed: {
//     ...mapState(useLoginStore, ['isLogginin'])
//   },
//   created() {
//     this.checkStatusLog()
//   }
// }
</script>

<template>
  <!-- <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/loginPage">LoginPage</RouterLink> -->

  <RouterView />
</template>

<style scoped></style>
