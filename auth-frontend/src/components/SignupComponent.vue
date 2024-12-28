<template>
  <div class="signup-container">
    <div class="signup-card">
      <h1>Create Your Account</h1>
      <form @submit.prevent="signup">
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
        <button class="btn-signup" type="submit">Sign Up</button>
        <button class="btn-login" @click.prevent="goToLogin">Log In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupComponent",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      try {
        const response = await this.$http.post("/signup/", {
          email: this.email,
          password: this.password,
        });
        console.log("Response:", response.data); // Log response data
        alert("Signup successful!");
        this.$router.push("/login");
      } catch (error) {
        console.error("Signup failed:", error.response?.data || error.message);
        alert("Signup failed! Please try again.");
      }
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* Same styles as before */
</style>
