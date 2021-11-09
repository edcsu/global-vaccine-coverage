export const baseApiUrl = 'https://disease.sh/v3/covid-19/'

export const appUrl = 'https://covid19globalstatviewer.web.app'

export const vaccineDetails = {
  coverage: 'coverage',
  countries: 'countries',
  lastDays: 'lastdays',
  fullData: 'fullData',
  vaccine: 'vaccine',
}

export const fullVaccineTimeline = {
  "total": 0,
  "daily": 0,
  "totalPerHundred": 0,
  "dailyPerMillion": 0,
  "date": ""
}

export const countryTotals = {
  countries: 'countries'
}

export const continent = {
  continents: 'continents'
}

// JHUCSSE (Data from Johns Hopkins University)
export const johnsHopkins = {
  all: 'jhucsse',
  historical: 'historical',
  allHistorical: 'historical/all',
  lastDays: {
    last30days: 30,
    last60days: 60,
    last90days: 90,
    last100days: 100,
    last150days: 150,
    last200days: 200,
    last250days: 250,
    last300days: 300
  }
}

export const countryObject = {
  cases: 0,
  todayCases: 0,
  deaths: 0,
  todayDeaths: 0,
  recovered: 0,
  todayRecovered: 0,
  active: 0,
  critical: 0,
  casesPerOneMillion: 0,
  deathsPerOneMillion: 0,
  updated: 0,
  affectedCountries: 0,
  tests: 0,
  testsPerOneMillion: 0
}

export const continentObject = {
  cases: 0,
  todayCases: 0,
  deaths: 0,
  todayDeaths: 0,
  recovered: 0,
  active: 0,
  critical: 0,
  updated: 0,
  countinent: '',
  countries: 0
}
