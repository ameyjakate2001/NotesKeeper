<template>
  <nav>
    <v-app-bar flat>
      <router-link :to="'/'" :style="{textDecoration: 'none'}">
        <div class=" title text-uppercase white--text" :style="{width: 'auto'}">
          <span class="font-weight-light">NotesKeeper</span>
        </div>
      </router-link>
      <v-spacer />
      <v-btn :to="'/sign-up'" text color="light">
        <span>Sign Up</span>
        <!-- <v-icon right>mdi-logout</v-icon> -->
      </v-btn>
      <v-btn :to="'/sign-in'" text color="light">
        <span>Sign In</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<style scoped>
.v-app-bar-title__content {
  width: auto !important;
}
</style>
