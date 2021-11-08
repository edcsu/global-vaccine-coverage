<template>
  <v-footer app class="primary">
    <v-card-text
      :class="[
        'pa-0',
        'white--text',
        'd-flex',
        'justify-space-between',
        'font-weight-bold',
        {
          'flex-column': $vuetify.breakpoint.xs
        }
      ]"
    >
      <span class>
        <strong>#WEARMASKINPUBLIC</strong>
      </span>
      <span>
        Get the latest on
        <a
          href="https://covid19globalstatviewer.web.app"
          target="_blank"
          rel="noopener noreferrer"
          class="white--text"
        >
          COVID19 globally
        </a>
      </span>
      <span>
        Data from
        <a
          href="https://disease.sh"
          target="_blank"
          rel="noopener noreferrer"
          class="white--text"
        >
          NOVELCoVID19 API
        </a>
      </span>
    </v-card-text>
  </v-footer>
</template>
