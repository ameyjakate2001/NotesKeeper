<template>
  <nav>
    <v-app-bar flat>
      <v-app-bar-nav-icon class="mr-1" @click.stop="sidebarMenu = !sidebarMenu" />
      <router-link :to="'/'" :style="{ textDecoration: 'none' }">
        <div
          class="title text-uppercase white--text"
          :style="{ width: 'auto' }"
        >
          <span class="font-weight-light">NotesKeeper</span>
        </div>
      </router-link>
      <v-spacer />
      <v-btn
        v-if="!isLoggedIn"
        :to="'/sign-up'"
        text
        color="light"
        class="mx-2"
      >
        <span>Sign Up</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
      <v-btn
        v-if="!isLoggedIn"
        :to="'/sign-in'"
        text
        color="light"
        class="mx-2"
      >
        <span>Sign In</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
      <v-btn v-if="isLoggedIn" text color="light" class="mx-2" @click="logout">
        <span>Log Out</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="sidebarMenu"
      app
      temporary
    >
      <v-list>
        <v-list-item v-for="item in links" :key="item.title" @click="item.method">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { db, auth } from '../fb/fb'
export default {
  name: 'Navigation-Bar',
  data () {
    return {
      isLoggedIn: 'false',
      sidebarMenu: false,
      toggleMini: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' }
      ]
    }
  },
  created () {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true
      }
      else {
        this.isLoggedIn = false
      }
    })
  },
  methods: {
    logout: () => {
      const user = auth.currentUser
      auth.signOut()
        .then(() => {
          db.collection('Student').doc(user.uid).get().then((res) => {
            alert('signout successfully as:- ' + res.data().Student_Name + ' ' + res.data().Student_Email)
          })
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
