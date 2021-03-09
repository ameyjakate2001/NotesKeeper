<template>
  <nav>
    <v-app-bar flat>
      <router-link :to="'/'">
        <v-app-bar-title class="text-uppercase white--text">
          <span class="font-weight-light">NotesKeeper</span>
        </v-app-bar-title>
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
