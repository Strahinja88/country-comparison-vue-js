<template>
  <div class="row">
    <div v-if="isSelected" class="col-12 mt-5 pb-md-3 pb-sm-2 pb-1 country-chart">
      <ul class="d-flex justify-content-around p-lg-5 ml-sm-5">
        <li v-for="(country, index) in selectedCountries" :key="index" class="d-flex">
          <div class="square"></div>
          <p class="text-muted">{{ country.name }}</p>
        </li>
      </ul>
      <div class="row">
        <div class="col-md-2 col-3 d-flex flex-column justify-content-end scale-wrapper">
          <div class="scale">
            <ul>
              <li v-for="(number, index) in scaleCalc()" :key="index">
                <span>{{ number | filteredNumbers }}&#x2012;</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-10 col-9 d-flex flex-column justify-content-end chart">
          <div class="d-flex bd-highlight chart-wrapper">
            <div
              class="d-flex flex-fill bd-highlight flex-column justify-content-end chart-item-wrapper"
              v-for="(country, index) in selectedCountries"
              :key="index"
            >
              <div class="chart-item" :style="{height: finalHeightCalc(country)}">
                <div
                  class="percentage-wrapper"
                  :style="
                  populationPercentage(country).populationPercentage2 >
                  percentCalc()
                    ? {
                        color: 'white'
                      }
                    : {
                        bottom: finalHeightCalc(country),
                        color: '#6c757d'
                      }
                "
                >
                  <span class="percentage">{{ populationPercentage(country).populationPercentage }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <strong class="text-center p-5 m-auto" v-else>No results yet.</strong>
  </div>
</template>

<script>
import { countryChartMixin } from "../../mixins/countryChartMixin";

export default {
  name: "country-chart",
  mixins: [countryChartMixin],
  props: ["isSelected", "selectedCountries", "mostPopulated"],
  data() {
    return {};
  },

  filters: {
    filteredNumbers: function(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>

<style scoped>
.country-chart {
  border: 1px solid black;
}

.square {
  width: 18px;
  height: 18px;
  margin-top: 4px;
}

.country-chart ul li:nth-child(1) .square {
  background-color: darkgreen;
}

.country-chart ul li:nth-child(2) .square {
  background-color: green;
}

.country-chart ul li:nth-child(3) .square {
  background-color: lightgreen;
}

.country-chart ul li:nth-child(4) .square {
  background-color: greenyellow;
}

.country-chart ul li p {
  font-size: 18px;
  padding-left: 10px;
}

.chart {
  padding-bottom: 16px;
  padding-right: 50px;
}

.chart-item-wrapper {
  margin-left: 10px;
  position: relative;
}

.chart-item-wrapper:nth-child(1) .chart-item {
  background-color: darkgreen;
}

.chart-item-wrapper:nth-child(2) .chart-item {
  background-color: green;
}

.chart-item-wrapper:nth-child(3) .chart-item {
  background-color: lightgreen;
}

.chart-item-wrapper:nth-child(4) .chart-item {
  background-color: greenyellow;
}

.scale ul {
  border-right: 2px solid #6c757d;
}

.scale ul li {
  position: relative;
  font-size: 18px;
  padding-bottom: 50px;
}

.scale ul li span {
  position: absolute;
  right: 0px;
  bottom: -12px;
  color: #6c757d;
  font-weight: 600;
}

.percentage-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* Max width 992px */
@media only screen and (max-width: 992px) {
  .country-chart ul {
    padding-top: 10px;
  }

  .square {
    width: 16px;
    height: 16px;
  }

  .country-chart ul li p {
    font-size: 16px;
  }

  .chart {
    padding-right: 10px;
    padding-left: 0;
  }

  .scale-wrapper {
    padding: 0;
  }

  .scale {
    margin-right: 10px;
  }

  .scale ul {
    padding-top: 0;
  }

  .scale ul li {
    font-size: 14px;
  }

  .scale ul li span {
    bottom: -8px;
  }

  .percentage {
    font-size: 14px;
  }
}

/* Max width 768px */
@media only screen and (max-width: 768px) {
  .square {
    width: 14px;
    height: 14px;
  }

  .country-chart ul li p {
    font-size: 14px;
    padding-left: 5px;
  }

  .scale ul li {
    font-size: 12px;
  }

  .scale ul li span {
    bottom: -9px;
  }

  .percentage {
    font-size: 12px;
  }
}

/* Max width 600px */
@media only screen and (max-width: 600px) {
  .scale {
    margin-right: 0;
  }
}
</style>