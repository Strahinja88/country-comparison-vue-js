<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="text-center">Log In</h1>
          <p class="lead text-center">Sign in to Country Comparasion</p>
          <div class="form">
            <div class="form-group">
              <input
                type="text"
                placeholder="Username"
                name="username"
                :class="[usernameErrors.length ? 'form-control is-invalid' : 'form-control']"
                v-model="username"
              />
            </div>
            <div class="errors">
              <p v-for="(error, index) in usernameErrors" :key="index">{{error}}</p>
            </div>

            <div class="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                class="form-control"
                :class="[passwordErrors.length ? 'form-control is-invalid' : 'form-control']"
                v-model="password"
              />
            </div>
            <div class="errors">
              <p v-for="(error, index) in passwordErrors" :key="index">{{error}}</p>
            </div>

            <input @click="submitForm" type="submit" class="btn btn-info btn-block mt-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { user } from "../../service/user.js";
import { validationMixin } from "../../mixins/validationMixin";

export default {
  name: "login",
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      password: "",
      usernameErrors: [],
      passwordErrors: [],
      user: user
    };
  },
  methods: {
    submitForm() {
      this.formValidation();
      if (!this.usernameErrors.length && !this.passwordErrors.length) {
        console.log("user:", user);
        if (
          this.username === user.username &&
          this.password === this.user.password
        ) {
          console.log("login successful");
          const userData = {
            username: this.username,
            password: this.password
          };
          localStorage.setItem("user", JSON.stringify(userData));
          window.location.href = "/";
        } else {
          if (this.username !== user.username)
            this.usernameErrors.push("Username incorrect.");
          if (this.password !== user.password)
            this.passwordErrors.push("Password incorrect.");
        }
      }
      console.log(
        this.username,
        this.password,
        this.usernameErrors,
        this.passwordErrors
      );
    }
  }
};
</script>

<style scoped>
.errors p {
  color: red;
}
</style>
