<template>
  <div class="stats p-3">
    <div class="total_cases">
      <h1 class="text-center">Coronavirus Cases:</h1>
      <p class="text-center">{{stats.total_cases}}</p>
    </div>
    <div class="total_deaths">
      <h1 class="text-center">Deaths:</h1>
      <p class="text-center">{{stats.total_deaths}}</p>
    </div>
    <div class="total_recovered">
      <h1 class="text-center">Recovered:</h1>
      <p class="text-center">{{stats.total_recovered}}</p>
    </div>
  </div>
</template>

<script>
import { totalCasesService } from "../../service/httpService";

export default {
  name: "total-cases",
  props: ["stats"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.stats h1 {
  color: #555;
  font-weight: 400;
}

.stats p {
  font-weight: 700;
  font-size: 54px;
}

.total_cases p {
  color: #aaa;
}

.total_deaths p {
  color: #696969;
}

.total_recovered p {
  color: #8aca2b;
}

/* Max width 600px */
@media only screen and (max-width: 600px) {
  .stats h1 {
    font-size: 30px;
  }

  .stats p {
    font-size: 46px;
  }
}
</style>
