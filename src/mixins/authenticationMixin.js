export const authenticationMixin = {
  data() {
    return {
      user: ""
    };
  },
  created() {
    this.isAuthenticated();
  },
  methods: {
    // check if user logged in
    isAuthenticated() {
      if (localStorage.user) {
        this.user = JSON.parse(localStorage.getItem("user")).username;
        return true;
      }
      return false;
    }
  }
};
