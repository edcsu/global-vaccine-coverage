<template>
  <v-container fluid >
      <v-row>
        <p class="ml-4"  >
          <strong> Source: </strong>
          <Span class="font-italic"> {{source}} </Span>
        </p>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'Source',
  props: ['sourcelink'],
  data: () => ({
    right: null
  }),
  computed: {
    source: function () {
      return this.sourcelink
    }
  }
}
</script>
