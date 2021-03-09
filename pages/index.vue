<template>
  <div class="HomePage">
    <v-app class="app">
      <ComponentA />
      <h1 class="text-center mt-3">This is HomePage</h1>
    </v-app>
  </div>
</template>

<script>
import ComponentA from '../components/Navbar'

export default {
  components: {
    ComponentA
  }
}
</script>

<style>
  .HomePage {
     background: grey;
  }
</style>
