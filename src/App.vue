<template>
  <TheHead />
  <TheResource />
</template>

<script>
import TheHead from './components/layout/TheHead'
import TheResource from './components/contact-resources/TheResource'

export default {
  name: 'App',
  components: {
    TheHead,
    TheResource,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
