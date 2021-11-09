<template>
  <div>
        
        <p class="last-updated">
          Today:        
        </p>
        <v-card outlined class="amber mt-n3  mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Vaccinated
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-black stat-figure">
                {{ stats.daily | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-doctor</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined class="blue lighten-2 mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Total
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-black stat-test">
                {{ stats.total | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-circle</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined class="success mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                 Per Hundred
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-black stat-test">
                {{ stats.totalPerHundred | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-multiple-check</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined class="orange lighten-2 mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Per Million
              </v-list-item-title>
              <v-list-item-subtitle class=" font-weight-black stat-figure">
                {{ stats.dailyPerMillion | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-alert</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>

        <p class="last-updated mt-4">
          Yesterday:
        </p>
        <v-card outlined class="amber mt-n3 mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Vaccinated
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-black stat-figure">
                {{ yestoStats.daily | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-doctor</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined class="blue lighten-2 mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Total
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-black stat-test">
                {{ yestoStats.total | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-circle</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined class="success mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Per Hundred
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-black stat-test">
                {{ yestoStats.totalPerHundred | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-multiple-check</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        
        <v-card outlined class="orange lighten-2 mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Per Million
              </v-list-item-title>
              <v-list-item-subtitle class=" font-weight-black stat-figure">
                {{ yestoStats.dailyPerMillion | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-alert</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>

        <!-- <v-card
          class="mt-2 text-center pa-2"
          tile
        >
          <span class="mb-1">
           Scan to share app link
          </span>
          <GenQrCode/>
        </v-card> -->
  </div>
</template>

<script>
// import GenQrCode from '@/components/GenQrCode'

export default {
  name: 'Stats',
  props: ['summaryDetails'],
  components: {
    // GenQrCode
  },
  data: () => ({
    right: null
  }),
  computed: {
    stats: function () {
      return this.summaryDetails[1]
    },
    yestoStats: function () {
      return this.summaryDetails[0]
    }
  }
}
</script>
