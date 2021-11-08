<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3" class>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-card outlined class="info" v-on="on">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class>Total candidates</v-list-item-title>
                  <v-list-item-subtitle class="display-1 font-weight-black">{{ totalNominees }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile>
                  <v-icon class size="32px">mdi-needle</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </template>
          <span>Total vaccine candidates at the moment</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-card outlined class="pink darken-2" v-on="on">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class>Approved</v-list-item-title>
                  <v-list-item-subtitle class="display-1 font-weight-black">0</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile>
                  <v-icon class size="32px">mdi-shield-check</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </template>
          <span>Approved vaccine by regulators in country of origin.</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-card outlined class="deep-purple darken-1" v-on="on">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class>{{ phase3[0].phase }}</v-list-item-title>
                  <v-list-item-subtitle
                    class="display-1 font-weight-black"
                  >{{ phase3[0].candidates }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile>
                  <v-icon class size="32px">mdi-account-group</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </template>
          <span>Larger trials involving thousands of people.</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="3">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-card outlined class="light-blue darken-4" v-on="on">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class>{{ phase23[0].phase }}</v-list-item-title>
                  <v-list-item-subtitle
                    class="display-1 font-weight-black"
                  >{{ phase23[0].candidates }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile>
                  <v-icon class size="32px">mdi-account-multiple-check</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </template>
          <span>Combine phases 2 and 3</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="mt-n4">
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-card outlined class="success" v-on="on">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class>{{ phase2[0].phase }}</v-list-item-title>
                  <v-list-item-subtitle
                    class="display-1 font-weight-black"
                  >{{ phase2[0].candidates }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile>
                  <v-icon class size="32px">mdi-account-check</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </template>
          <span>Larger trials involving hundreds of people.</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-card outlined class="lime darken-2" v-on="on">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class>{{ phase12[0].phase }}</v-list-item-title>
                  <v-list-item-subtitle
                    class="display-1 font-weight-black"
                  >{{ phase12[0].candidates }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile>
                  <v-icon size="32px">mdi-account-arrow-left</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </template>
          <span>Combine phases 1 and 2</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-card outlined class="amber" v-on="on">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class>{{ phase1[0].phase }}</v-list-item-title>
                  <v-list-item-subtitle
                    class="display-1 font-weight-black"
                  >{{ phase1[0].candidates }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile>
                  <v-icon size="32px">mdi-account</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </template>
          <span>Involves a small group of adults.</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-card outlined class="orange" v-on="on">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class>{{ phasePre[0].phase }}</v-list-item-title>
                  <v-list-item-subtitle
                    class="display-1 font-weight-black"
                  >{{ phasePre[0].candidates }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar tile>
                  <v-icon size="32px">mdi-microscope</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </template>
          <span>Laboratory research.</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Stats',
  props: ['totalCandidates', 'totalPhases'],
  data: () => ({
    right: null
  }),
  computed: {
    totalNominees: function () {
      return this.totalCandidates
    },
    phase3: function () {
      return this.totalPhases.filter((e) => e.phase === 'Phase 3')
    },
    phase23: function () {
      return this.totalPhases.filter((e) => e.phase === 'Phase 2/3')
    },
    phase2b: function () {
      return this.totalPhases.filter((e) => e.phase === 'Phase 2b')
    },
    phase2: function () {
      return this.totalPhases.filter((e) => e.phase === 'Phase 2')
    },
    phase12: function () {
      return this.totalPhases.filter((e) => e.phase === 'Phase 1/2')
    },
    phase1: function () {
      return this.totalPhases.filter((e) => e.phase === 'Phase 1')
    },
    phasePre: function () {
      return this.totalPhases.filter((e) => e.phase === 'Pre-clinical')
    },
    phaseEarly: function () {
      return this.totalPhases.filter((e) => e.phase === 'Early research')
    }
  }
}
</script>
