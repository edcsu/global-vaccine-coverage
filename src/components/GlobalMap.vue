<template>
    <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map" ref="chart"></highcharts>
</template>

<script>
import { timeAgo, thousandSeperator } from '../Helpers/helperMethods'
import Highcharts from 'highcharts'
import mapData from '@highcharts/map-collection/custom/world.geo.json'
import mapInit from 'highcharts/modules/map'
import exportingInit from 'highcharts/modules/exporting'

mapInit(Highcharts)
exportingInit(Highcharts)

// eslint-disable-next-line dot-notation
// Highcharts.maps['globalTrackerMap'] = mapData

export default {
  name: 'GlobalMap',

  props: ['countriesData'],

  data () {
    return {
      mapOptions: {
        chart: {
          map: mapData,
          backgroundColor: '#BDBDBD'
        },
        title: {
          text: ''
        },
        legend: {
          enabled: false
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        series: [{
          name: 'Countries',
          color: '#E0E0E2',
          enableMouseTracking: false
        }, {
          name: 'Total COVID19 cases',
          type: 'mapbubble',
          data: this.countriesData.features,
          joinBy: ['iso-a2', 'code'],
          minSize: '1%',
          maxSize: '12%',
          color: '#FF0000'
        }],
        // Tooltip section
        tooltip: {
          useHTML: true,
          formatter: function () {
            return `<img src=${this.point.options.properties.countryInfo.flag} width=50px height=25px/> <b> ${this.point.name} </b><br/>
                   Total Cases: <b> ${thousandSeperator(this.point.z)} </b><br/>
                   Total Recovered: <b> ${thousandSeperator(this.point.options.properties.recovered)} </b><br/>
                   Total Active: <b> ${thousandSeperator(this.point.options.properties.active)} </b><br/>
                   Total Critical: <b> ${thousandSeperator(this.point.options.properties.critical)} </b><br/>
                   Total Tests: <b> ${thousandSeperator(this.point.options.properties.tests)} </b><br/>
                   Total Deaths: <b> ${thousandSeperator(this.point.options.properties.deaths)} </b><br/>
                   Recovered Today: <b> ${thousandSeperator(this.point.options.properties.todayRecovered)} </b><br/>
                   Cases Today: <b> ${thousandSeperator(this.point.options.properties.todayCases)} </b><br/>
                   Deaths Today: <b> ${thousandSeperator(this.point.options.properties.todayDeaths)} </b><br/>
                   Last Updated: <b> ${timeAgo(this.point.options.properties.updated)} </b><br/>`
          }
        }
      }
    }
  }
}
</script>
 <style scoped>
.map {
  min-height: 80vh;
}

@media screen and (max-width: 882px)  {
    .map {
      min-height: 78vh;
  }
}

@media screen and (max-width: 600px)  {
    .map {
      min-height: 71vh;
  }
}
 </style>
