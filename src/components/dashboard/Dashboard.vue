<template>
  <div class="dashboard">
    <h1 class="text-center p-md-5 p-3">Country Comparasion</h1>
    <app-country-list />
  </div>
</template>

<script>
import CountryList from "./CountryList";
import CountryChart from "./CountryChart";

export default {
  name: "dashboard",
  components: {
    "app-country-list": CountryList,
    "app-country-chart": CountryChart
  },
  data() {
    return {};
  }
};
</script>

<style>
/* Max width 992px */
@media only screen and (max-width: 992px) {
  .dashboard h1 {
    font-size: 35px;
  }

  .dashboard h4 {
    font-size: 20px;
  }
}

/* Max width 768px */
@media only screen and (max-width: 768px) {
  .dashboard h1 {
    font-size: 32px;
  }
}
</style>
