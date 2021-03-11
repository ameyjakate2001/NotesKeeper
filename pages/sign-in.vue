<template>

  <v-app class="app">
    <ComponentA />
    <div>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="myForm black pa-4"
        @submit.prevent="submit"
      >
        <h2 class="my-2 display-2 deep-orange--text text-uppercase text-center">Sign In</h2>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          color="purple darken-2"
          class="mt-4"
          required
        />

        <v-text-field
          v-model="password"
          :rules="passwordRule"
          type="password"
          label="Password"
          color="purple darken-2"
          class="mt-3 dark--text"
          required
        />

        <v-btn class="mt-5 success" @click="submit">
          LogIn
        </v-btn>
      </v-form>
    </div>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import ComponentA from '../components/Navbar.vue'


export default {
  name: 'SignIn',
  components: {
    ComponentA
  },
  data () {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRule: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 5) || 'Password must have 5+ character',
        v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
        v => /(?=.*\d)/.test(v) || 'Must have one number',
        v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
      ],
      checkbox: false
    }
  },

  methods: {
    submit () {
      if (!this.$refs.form.validate()) {
        alert('fill the correct info')
      }
      else {
        firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            (user) => {
              alert(`You are logged in as ${user.email} `)
            },
            (err) => {
              alert(err.message)
            }
          )
      }
    }
  }
}
</script>

<style scoped>
.app{
  background-color:whitesmoke;
}
  .myForm{
    background-color: rgb(0, 0, 0);
      border-radius: 10px;
     max-width: 600px;
     margin: 70px auto;
      box-shadow: -1px 2px 5px 1px rgba(0,0,0,0.38);
      -webkit-box-shadow: -1px 2px 5px 1px rgba(0,0,0,0.38);
      -moz-box-shadow: -1px 2px 5px 1px rgba(0,0,0,0.38);
  }
  @media screen and (max-width:600px) {
    .myForm{
      margin:70px 10px;
    }
  }
</style>
