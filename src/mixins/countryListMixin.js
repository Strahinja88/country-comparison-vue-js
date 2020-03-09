export const countryListMixin = {
  data() {
    return {
      searchText: "",
      countries: [],
      filteredCountries: [],
      checkboxes: [],
      mostPopulated: null,
      leastPopulated: null,
      difference: null,
      selectedCountries: [],
      isSelected: false,
      compareError: ""
    };
  },
  methods: {
    // compare values
    filtered(value) {
      return function(x) {
        return x.name.toLowerCase().includes(value.toLowerCase());
      };
    },
    // filter countries by search values
    searchThis() {
      if (this.searchText !== "") {
        this.filteredCountries = this.countries.filter(
          this.filtered(this.searchText)
        );
      } else this.filteredCountries = this.countries;
    },
    // filter checked countries
    checkThis() {
      this.checkboxes = this.countries.filter(country => country.checked);
    },
    // set disabled checkboxes
    isDisabled(country) {
      if (this.checkboxes.length > 3) {
        return country.checked ? false : true;
      }
      return false;
    },
    compareCountries() {
      if (this.checkboxes.length > 1) {
        for (let i = 0, n = this.checkboxes.length; i < n; i++) {
          this.checkboxes[i].checked = false;
        }

        const sortedCheckboxes = this.checkboxes.sort((a, b) =>
          a.population > b.population ? -1 : 1
        );
        // set most & least populated
        this.mostPopulated = sortedCheckboxes[0];
        this.leastPopulated = sortedCheckboxes[sortedCheckboxes.length - 1];
        this.difference =
          sortedCheckboxes[0].population -
          sortedCheckboxes[sortedCheckboxes.length - 1].population;
        this.selectedCountries = this.checkboxes.sort((a, b) =>
          a.name > b.name ? 1 : -1
        );

        // reset fields
        this.checkboxes = [];
        this.isSelected = true;
        this.searchText = "";
        this.compareError = "";
        this.filteredCountries = this.countries;
      } else {
        this.compareError = "You must select at least 2 countries.";
      }
    }
  }
};
