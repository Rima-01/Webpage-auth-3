<template>
  <div class="login-container">
    <div class="login-card">
      <h1>My Flix Video Streaming App</h1>
      <form @submit.prevent="login">
        <input
          type="email"
          v-model="email"
          placeholder="Email address"
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <button class="btn-login" type="submit">Log In</button>
        <button class="btn-signup" @click.prevent="goToSignup">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$http.post("/login/", {
          email: this.email,
          password: this.password,
        });
        console.log("Response:", response.data); // Log response data
        alert("Login successful!");
      } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        alert("Login failed! Check your credentials.");
      }
    },
    goToSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style scoped>
/* Same styles as before */
</style>
