<template>
    <div class="container">
      <h1 class="title">Login</h1>
      <b-form @submit.prevent="onLogin">
        <b-form-group
          id="input-group-Username"
          label-cols-sm="3"
          label="Username:"
          label-for="Username"
        >
          <b-form-input
            id="Username"
            v-model="$v.form.username.$model"
            type="text"
            :state="validateState('username')"
          ></b-form-input>
          <b-form-invalid-feedback>
            Username is required
          </b-form-invalid-feedback>
        </b-form-group>
  
        <b-form-group
          id="input-group-Password"
          label-cols-sm="3"
          label="Password:"
          label-for="Password"
        >
          <b-form-input
            id="Password"
            type="password"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
          ></b-form-input>
          <b-form-invalid-feedback>
            Password is required
          </b-form-invalid-feedback>
        </b-form-group>
  
        <b-button
          type="submit"
          variant="primary"
          style="width:100px;display:block;"
          class="mx-auto w-100"
          >Login</b-button
        >
        <div class="mt-2">
          Do not have an account yet?
          <router-link to="register"> Register in here</router-link>
        </div>
      </b-form>
      <b-alert
        class="mt-2"
        v-if="form.submitError"
        variant="warning"
        dismissible
        show
      >
        Login failed: {{ form.submitError }}
      </b-alert>
    </div>
  </template>
  
  <script>
  import { required } from "vuelidate/lib/validators";
  import {login} from "../services/auth.js"
  
  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: "",
          password: "",
          submitError: undefined
        }
      };
    },
    validations: {
      form: {
        username: {
          required
        },
        password: {
          required
        }
      }
    },
    methods: {
      validateState(param) {
        const { $dirty, $error } = this.$v.form[param];
        return $dirty ? !$error : null;
      },
      async Login() {
        try {
        
          const credentials = {
          username: this.form.username,
          password: this.form.password
        };
          
  
          const response = await login(credentials);
  
          if(response.status === 200){
            this.$root.store.login(this.form.username);

            // Redirect to the homepage or any other page if not already there
            if (this.$route.path !== '/') {
                this.$router.push("/");
            }
            location.reload();
          }
          else{
            this.form.submitError = 'Login failed';
          }

        } catch (err) {
          this.form.submitError = 'Username or Password incorrect';
        }
      },
  
      onLogin() {
        this.form.submitError = undefined;
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
          return;
        }
  
        this.Login();
      }
    }
  };
  </script>
  <style lang="scss" scoped>
  .container {
    max-width: 400px;
  }
  </style>
  