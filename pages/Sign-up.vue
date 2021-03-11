<template>
  <v-app id="app">
    <ComponentA />

    <div>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="myForm pa-3"
        @submit.prevent="submit"
      >

        <h2 class="my-2 display-2 deep-orange--text text-uppercase text-center">Sign UP</h2>

        <v-text-field
          v-model="name"
          :counter="20"
          :rules="nameRules"
          label="Name"
          color="purple darken-2"
          class="mt-3"
          required
        />

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          color="purple darken-2"
          class="mt-3"
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

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        />

        <v-btn text color="success" @click="submit">
          Sign up
        </v-btn>
      </v-form>
    </div>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import ComponentA from '../components/Navbar.vue'
import db from '../components/firebaseInit'

export default {
  name: 'signup',
  components: {
    ComponentA
  },
  data () {
    return {
      valid: false,
      name: '',
      email: '',
      password: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters'
      ],
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
    submit (e) {
      if (!this.$refs.form.validate()) {
        alert('fill the correct info')
      }
      else {
        // e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((cred) => {
          console.log(cred.user.uid)
          return db.collection('Student').doc(cred.user.uid).set({
            Student_Name: this.name,
            Student_Email: this.email
          })
            .then(() => {
              alert('User Created Successfully')
            })
        })
          .catch((error) => {
            alert('The User already Exists Please try another with another emailID:- ' + error.message)
          })
      }
    }
  }
}
</script>

<style scoped>
#app{
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
      margin:70px 15px;
    }
  }
</style>
