<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid class="pt-0 pb-0">
        <v-row class="pr-0 pb-0">
          <v-col cols="2" class="pr-0 d-none d-md-block" >
            <h2 v-if="globalLoaded">Global Summary</h2>
            <v-skeleton-loader
              class="mt-1 mb-1"
              type="heading"
              v-else
            ></v-skeleton-loader>
            <Stats class="scrollable pr-1 mb-5" :summaryDetails="globalSummary" v-if="globalLoaded" />
            <StatsSkeleton class="scrollable pr-5 mb-5" v-else />
          </v-col>
          <!-- <v-col cols="12" xl="10" lg="10" md="10" sm="12" xs="12" class="pb-0">
            <GlobalMap :countriesData=countriesDetails v-if="countriesLoaded" />
            <MapSkeleton v-else />
          </v-col> -->
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// import GlobalMap from './components/GlobalMap'
import Header from './components/Header'
import Footer from './components/Footer'
// import MapSkeleton from './components/MapSkeleton'
import Stats from '@/components/Stats'
import StatsSkeleton from '@/components/StatsSkeleton'

import {
  getSpecificContent,
  // getGeoJsonData
} from '@/Helpers/helperMethods'

import {
  baseApiUrl,
  // globalTotals,
  vaccineDetails,
  // countryObject,
  // countryTotals
  fullVaccineTimeline
} from '@/Helpers/apiHelpers'

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    Stats,
    StatsSkeleton
  },

  data: () => ({
    globalSummary: fullVaccineTimeline,
    eaTimeline: [],
    countriesDetails: [],
    timeInterval: 600000,
    loaded: false,
    eaLoaded: false,
    globalLoaded: false,
    countriesLoaded: false,
    eaSummaryLoaded: false,
    defaultLoaded: false,
    continentLoaded: false,
    showSnackbar: false,
    snackbarColor: '',
    snackbarText: '',
    snackbarTimeout: 5000
  }),

  created () {
    this.getGlobalDetails()
    // this.getCountryDetails()
  },

  mounted () {
    this.getGlobalDetails()
    // this.getCountryDetails()
    setInterval(() => {
      this.getGlobalDetails()
      // this.getCountryDetails()
    }, this.timeInterval)
  },

  methods: {
    async getGlobalDetails () {
      this.globalLoaded = false
      try {
        // baseUrl, route, query
        const response = await getSpecificContent(baseApiUrl, 
          `${vaccineDetails.vaccine}/${vaccineDetails.coverage}`,
          `${vaccineDetails.lastDays}=2&${vaccineDetails.fullData}=true`)
        this.globalSummary = response.data
        this.globalLoaded = true
      } catch (error) {
        this.globalLoaded = false
        console.error(error)
        this.snackbarText = 'Failed to get data. Refresh again'
        this.snackbarColor = 'error'
        this.showSnackbar = true
      }
    },

    // async getCountryDetails () {
    //   this.countriesLoaded = false
    //   try {
    //     const response = await getContent(baseApiUrl, countryTotals.countries)
    //     this.countriesDetails = getGeoJsonData(response.data)
    //     this.countriesLoaded = true
    //   } catch (error) {
    //     this.countriesLoaded = false
    //     console.error(error)
    //     this.snackbarText = 'Failed to get data. Refresh again'
    //     this.snackbarColor = 'error'
    //     this.showSnackbar = true
    //   }
    // }
  }
};
</script>
