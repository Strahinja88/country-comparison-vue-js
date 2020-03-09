<template>
  <div class="dashboard-items p-md-5 p-3">
    <div class="row">
      <app-country-comparasion
        :isSelected="isSelected"
        :mostPopulated="mostPopulated"
        :leastPopulated="leastPopulated"
        :difference="difference"
      />

      <div class="col-md-5 p-3 list">
        <h4 class="text-center pb-2">
          <strong>Country List</strong>
        </h4>
        <div class="my-2">
          <div class="input-icons">
            <i class="fa fa-search icon"></i>
            <input
              @input="searchThis()"
              placeholder="Search"
              class="form-control input-field"
              type="search"
              v-model="searchText"
            />
          </div>

          <ul class="country-list">
            <li v-for="(country, index) in filteredCountries" :key="index">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input checkmark"
                  type="checkbox"
                  name="filteredCountries"
                  @change="checkThis()"
                  v-model="country.checked"
                  :disabled="isDisabled(country)"
                />
                <label>{{country.name}}</label>
              </div>
            </li>
          </ul>

          <div class="d-flex flex-column align-items-center">
            <a @click="compareCountries()" class="btn btn-info btn-lg compare-btn">Compare</a>
            <strong class="compare-error">{{compareError}}</strong>
          </div>
        </div>
      </div>
    </div>

    <app-country-chart
      :isSelected="isSelected"
      :selectedCountries="selectedCountries"
      :mostPopulated="mostPopulated"
    />
  </div>
</template>
<script>
import axios from "axios";
import { countryListMixin } from "../../mixins/countryListMixin";

import CountryComparasion from "./CountryComparasion";
import CountryChart from "./CountryChart";

export default {
  name: "country-list",
  mixins: [countryListMixin],
  components: {
    "app-country-comparasion": CountryComparasion,
    "app-country-chart": CountryChart
  },
  data() {
    return {
      countries: [],
      filteredCountries: []
    };
  },
  created() {
    // get countries
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      let countries = [];
      res.data.map(item => countries.push(item));
      this.countries = countries;
      this.filteredCountries = countries;
      console.log(this.countries);
    });
  }
};
</script>

<style scoped>
.list {
  border: 1px solid black;
}

.input-icons i {
  position: absolute;
}

.input-icons {
  width: 100%;
  margin-bottom: 10px;
}

.icon {
  padding: 10px;
}

.icon span {
  font-family: "Arial";
}

.input-field {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
}

.fa-search:before {
  padding-right: 10px;
}

.country-list {
  margin-top: 10px;
  height: 230px;
  overflow-x: hidden;
}

.country-list li {
  font-size: 20px;
  margin-top: 10px;
}

.compare-btn {
  margin: 0 auto;
  color: white !important;
}

.compare-error {
  color: red;
  margin-top: 10px;
}

.checkmark {
  height: 20px;
  width: 20px;
}

.form-check label {
  margin-left: 10px;
  margin-bottom: 3px;
}

/* Max width 992px */
@media only screen and (max-width: 992px) {
  .country-list {
    height: 220px;
  }

  .country-list li {
    font-size: 18px;
  }

  .compare-btn {
    font-size: 18px;
  }
}
</style>