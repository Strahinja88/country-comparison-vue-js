export const covidMixin = {
  data() {
    return {
      currentSort: "cases",
      currentSortDir: "desc",
      searchText: ""
    };
  },
  methods: {
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = e;
    },
    isRed(item) {
      if (item.new_deaths !== "0") {
        return true;
      }
      return false;
    },
    isYellow(item) {
      if (item.new_cases !== "0") {
        return true;
      }
      return false;
    },
    sortClass(item) {
      if (this.currentSort === item)
        return this.currentSortDir === "asc"
          ? "fa fa-sort-amount-asc"
          : "fa fa-sort-amount-desc";
      return "fa fa-sort";
    },
    // compare values
    filtered(value) {
      return function(x) {
        return (
          x.country_name.toLowerCase().includes(value.toLowerCase()) || !value
        );
      };
    }
  },
  computed: {
    sortedCases: function() {
      return this.cases.filter(this.filtered(this.searchText)).sort((a, b) => {
        let modifier = 1;

        if (this.currentSortDir === "desc") modifier = -1;
        if (this.currentSort === "country_name") {
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        } else {
          if (
            parseInt(a[this.currentSort].split(",").join("")) <
            parseInt(b[this.currentSort].split(",").join(""))
          )
            return -1 * modifier;
          if (
            parseInt(a[this.currentSort].split(",").join("")) >
            parseInt(b[this.currentSort].split(",").join(""))
          )
            return 1 * modifier;
        }

        return 0;
      });
    }
  }
};
