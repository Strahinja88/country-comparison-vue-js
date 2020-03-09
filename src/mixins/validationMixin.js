export const validationMixin = {
  data() {
    return {
      username: "",
      password: "",
      usernameErrors: [],
      passwordErrors: []
    };
  },
  methods: {
    formValidation: function() {
      this.usernameErrors = [];
      this.passwordErrors = [];

      // username errors
      if (!this.username) {
        this.usernameErrors.push("Username required.");
      }

      if (this.username.length < 3) {
        this.usernameErrors.push("Username should be minimum 3 characters.");
      }

      if (this.username.indexOf(" ") >= 0) {
        this.usernameErrors.push("Username cannot contain space.");
      }

      // password errors
      if (!this.password) {
        this.passwordErrors.push("Password required.");
      }

      if (this.password.length < 3) {
        this.passwordErrors.push("Password should be minimum 3 characters.");
      }

      if (this.password.indexOf(" ") >= 0) {
        this.passwordErrors.push("Password cannot contain space.");
      }
    }
  }
};
