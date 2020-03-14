import axios from "axios";

const apiEndpoint = "https://coronavirus-monitor.p.rapidapi.com/coronavirus";
const casesByCountry = "/cases_by_country.php";
const totalCases = "/worldstat.php";
const headers = {
  "cache-control": "no-cache",
  "Content-Type": "application/json",
  "X-RapidAPI-Key": "132431f2bdmsh1b4d2dcae48a018p1b7ce0jsnba0969e614ae"
};

export const casesByCountryService = () => {
  return axios.get(apiEndpoint + casesByCountry, { headers });
};

export const totalCasesService = () => {
  return axios.get(apiEndpoint + totalCases, { headers });
};
