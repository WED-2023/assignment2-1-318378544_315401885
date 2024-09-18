<template>
  <div class="container">
    <LoginForm @login-success="handleLoginSuccess" />
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  components: {
    LoginForm
  },
  methods: {
    handleLoginSuccess(username) {
      this.$root.store.login(username);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
}
</style>
