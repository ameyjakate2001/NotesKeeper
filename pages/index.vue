<template>
  <div class="HomePage">
    <v-app class="app">
      <ComponentA />
      <h1 class="text-center black--text mt-3">This is HomePage</h1>
      <v-container>
        <v-card class="error">
          <v-card-title>Hey {{ name }}</v-card-title>
          <v-card-title>Logged In as {{ email }}</v-card-title>
        </v-card>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import ComponentA from '../components/Navbar'
import { db, auth } from '../fb/fb'

export default {
  components: {
    ComponentA
  },
  data () {
    return {
      isLoggedIn: false,
      name: '',
      email: ''
    }
  },
  created () {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true
        const uid = auth.currentUser.uid
        db.collection('Student').doc(uid).get().then((cred) => {
          this.name = cred.data().Student_Name
          this.email = cred.data().Student_Email
        })
      }
      else {
        setTimeout(() => {
          this.name = 'Stranger'
          this.email = 'Please Login Or Create Account'
        }, 2000)
      }
    })
  }
}
</script>

<style>
.HomePage{
  background-color: whitesmoke;
}
 #app{
  background-color:whitesmoke;
}
</style>
