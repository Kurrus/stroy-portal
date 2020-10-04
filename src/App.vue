<template>
  <div id="app">
    <Toolbar/>
    <HelloWorld/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import HelloWorld from './components/Header.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Toolbar
  }
}
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
