<template>
  <v-app id="app">
    <div>
      <div class="form-width">

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="f"
          @submit.prevent="submit"
        >
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

          <v-btn class="success" @click="submit">
            Sign up
          </v-btn>
        </v-form>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
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
  }),

  methods: {
    submit () {
      if (!this.$refs.form.validate()) {
        alert('fill the correct info')
      } else {
        alert(this.name + ' ' + this.email + ' ' + this.password)
      }
    }
  }
}
</script>

<style scoped>
  #app {
    background-color: rgb(206, 199, 199);
    color: darkred;
  }
  .form-width{
    background-color: rgb(0, 0, 0);
    padding: 20px;
    max-width: 600px;
    margin:100px auto;
    box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.51);
    -webkit-box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.51);
    -moz-box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.51);
  }

  @media screen and (max-width:600px) {
    .form-width{
      margin:100px 10px;
    }
  }
</style>
