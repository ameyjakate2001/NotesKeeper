<template>
  <nav>
    <v-app-bar flat>
      <router-link :to="'/'" :style="{textDecoration: 'none'}">
        <div class=" title text-uppercase white--text" :style="{width: 'auto'}">
          <span class="font-weight-light">NotesKeeper</span>
        </div>
      </router-link>
      <v-spacer />
      <v-btn v-if="!isLogedIn" :to="'/sign-up'" text color="light" class="mx-2">
        <span>Sign Up</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
      <v-btn v-if="!isLogedIn" :to="'/sign-in'" text color="light" class="mx-2">
        <span>Sign In</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
      <v-btn v-if="isLoged" text color="light" class="mx-2" @click="logout">
        <span>Log Out</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Navigation-Bar',
  data () {
    return {
      isLogedIn: false
    }
  },
  created () {
    if (firebase.auth().currentUser) {
      this.isLogedIn = true
    }
  },
  methods: {
    logout: () => {
      firebase.auth().signOut()
        .then(() => {
          alert('signOut Successfully as ')
        })
    }
  }

}
</script>

<style scoped>
.v-app-bar-title__content {
  width: auto !important;
}
</style>
