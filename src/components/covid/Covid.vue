<template>
  <div class="container">
    <total-cases></total-cases>
    <table class="table table-bordered">
      <thead>
        <tr class="table_head_row">
          <th>#</th>
          <th @click="sort('country_name')">
            Country Name
            <i :class="sortClass('country_name')"></i>
          </th>
          <th @click="sort('cases')">
            Total Cases
            <i :class="sortClass('cases')"></i>
          </th>
          <th @click="sort('new_cases')">
            New Cases
            <i :class="sortClass('new_cases')"></i>
          </th>
          <th @click="sort('serious_critical')">
            Active Cases
            <i :class="sortClass('serious_critical')"></i>
          </th>
          <th @click="sort('deaths')">
            Total Deaths
            <i :class="sortClass('deaths')"></i>
          </th>
          <th @click="sort('new_deaths')">
            New Deaths
            <i :class="sortClass('new_deaths')"></i>
          </th>
          <th @click="sort('total_recovered')">
            Total Recovered
            <i :class="sortClass('total_recovered')"></i>
          </th>
          <th @click="sort('region')">
            Serious, Critical
            <i :class="sortClass('region')"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in sortedCases" class="table_body_row" :key="index">
          <td>#{{index + 1}}</td>
          <td :style="{ color: '#337ab7', textAlign: 'left' }">{{item.country_name}}</td>
          <td>{{item.cases}}</td>
          <td
            :style="[isYellow(item) ? { backgroundColor: '#FFEEAA' } : { backgroundColor: '#fff' }]"
          >{{item.new_cases !== "0" ? "+" + item.new_cases : null}}</td>
          <td>{{item.serious_critical !== "0" ? item.serious_critical : null}}</td>
          <td>{{item.deaths !== "0" ? item.deaths : null}}</td>
          <td
            :style="[isRed(item) ? {backgroundColor: 'red', color: 'white'} : {backgroundColor: 'white', color: 'black'}]"
          >{{item.new_deaths !== "0" ? "+" + item.new_deaths : null}}</td>
          <td>{{item.total_recovered !== "0" ? item.total_recovered : null}}</td>
          <td>{{item.region !== "" ? item.region : null}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { casesByCountryService } from "../../service/httpService";
import { covidMixin } from "../../mixins/covidMixin";
import TotalCases from "./TotalCases";

export default {
  name: "covid",
  mixins: [covidMixin],
  components: {
    "total-cases": TotalCases
  },
  data() {
    return {
      cases: [],
      update: null
    };
  },
  mounted() {
    casesByCountryService().then(res => {
      this.cases = res.data.countries_stat;
      this.update = res.data.statistic_token_at;
      console.log(res.data);
    });
  }
};
</script>

<style scoped>
.table_head_row {
  color: #666666;
  border-bottom: 3px solid #666666;
  cursor: pointer;
}

.table_head_row th i {
  padding-left: 5px;
}

.table_body_row {
  text-align: right;
  font-weight: 700;
}
</style>
