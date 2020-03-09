<template>
  <div class="col-md-7 order-last order-md-first info">
    <div class="d-flex flex-column justify-content-around info-wrapper" v-if="isSelected">
      <p>
        Most populated country is:
        <strong>{{ mostPopulated.name }}</strong>
        with
        <strong>{{ mostPopulated.population | filteredNumbers }}</strong>
        inhabitants.
      </p>

      <p>
        Most least populated country is:
        <strong>{{ leastPopulated.name }}</strong> with
        <strong>{{ leastPopulated.population | filteredNumbers }}</strong>
        inhabitants.
      </p>

      <p>
        Difference of population is:
        <strong>{{ difference | filteredNumbers }}</strong>
        inhabitants.
      </p>
    </div>

    <div v-else>
      <strong>You have not selected countries yet.</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "country-comparasion",
  props: ["isSelected", "mostPopulated", "leastPopulated", "difference"],
  data() {
    return {
      countries: []
    };
  },
  methods: {},
  filters: {
    filteredNumbers: function(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>

<style scoped>
.info-wrapper {
  height: 100%;
}

.info p {
  font-size: 20px;
}

/* Max width 992px */
@media only screen and (max-width: 992px) {
  .info p {
    font-size: 18px;
  }
}

/* Max width 768px */
@media only screen and (max-width: 768px) {
  .info-wrapper {
    padding-top: 30px;
  }

  .info p {
    font-size: 16px;
  }
}
</style>