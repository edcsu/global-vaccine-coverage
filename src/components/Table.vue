<template>
  <v-container fluid>
    <v-card elevation="5">
      <v-card-title>
          Table of COVID19 Vaccine candidates
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="totalCandidates"
        :search="search"
        :items-per-page="itemsPerPage"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        item-key="candidate"
        show-expand
        >
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length" class="pa-4" > <strong>Background: </strong> {{ item.details.substring(11) }}</td>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Table',
  props: ['candidates'],

  computed: {
    totalCandidates: function () {
      return this.candidates
    }
  },

  data () {
    return {
      itemsPerPage: 5,
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'start',
          filterable: true,
          value: 'candidate',
          width: 250
        },
        { text: 'Phase', filterable: true, value: 'trialPhase', width: 120 },
        { text: 'Mechanism', filterable: true, value: 'mechanism', width: 200 },
        { text: 'Sponsors', filterable: true, value: 'sponsors', width: 330 },
        { text: 'Institutions', filterable: true, value: 'institutions', width: 350 },
        { text: '', value: 'data-table-expand' }
      ],
      expanded: [],
      singleExpand: true
    }
  }
}
</script>
