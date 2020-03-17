<template>
  <div class="container">
    <total-cases :stats="stats"></total-cases>
    <div class="active-cyan-3 active-cyan-4 mb-4">
      <input
        v-model="searchText"
        class="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
    <table class="table table-bordered">
      <thead>
        <tr id="sticky" class="table_head_row">
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
          <th @click="sort('active_cases')">
            Active Cases
            <i :class="sortClass('active_cases')"></i>
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
          <th @click="sort('serious_critical')">
            Serious, Critical
            <i :class="sortClass('serious_critical')"></i>
          </th>
          <th @click="sort('total_cases_per_1m_population')">
            Tot Cases/1M pop
            <i :class="sortClass('total_cases_per_1m_population')"></i>
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
          <td>{{item.active_cases !== "0" ? item.active_cases : null}}</td>
          <td>{{item.deaths !== "0" ? item.deaths : null}}</td>
          <td
            :style="[isRed(item) ? {backgroundColor: 'red', color: 'white'} : {backgroundColor: 'white', color: 'black'}]"
          >{{item.new_deaths !== "0" ? "+" + item.new_deaths : null}}</td>
          <td>{{item.total_recovered !== "0" ? item.total_recovered : null}}</td>
          <td>{{item.serious_critical !== "" ? item.serious_critical : null}}</td>
          <td>{{item.total_cases_per_1m_population !== "" ? item.total_cases_per_1m_population : null}}</td>
        </tr>
      </tbody>

      <tbody>
        <tr class="table_body_row">
          <td>#</td>
          <td :style="{ color: 'red', textAlign: 'left' }">Total:</td>
          <td>{{stats.total_cases}}</td>
          <td :style="{ backgroundColor: '#FFEEAA' }">{{stats.new_cases}}</td>
          <td></td>
          <td>{{stats.total_deaths}}</td>
          <td :style="{backgroundColor: 'red', color: 'white'}">{{stats.new_deaths}}</td>
          <td>{{stats.total_recovered}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  casesByCountryService,
  totalCasesService
} from "../../service/httpService";
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
      update: null,
      stats: ""
    };
  },
  created() {
    totalCasesService().then(res => {
      this.stats = res.data;
      console.log(res.data);
    });
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
table {
  position: relative;
}

.table_head_row {
  color: #666666;
  cursor: pointer;
}

.table_head_row th i {
  padding-left: 5px;
}

.table_head_row th {
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  background-color: #fff;
}

.table_body_row {
  text-align: right;
  font-weight: 700;
}
</style>
