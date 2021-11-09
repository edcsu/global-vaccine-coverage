<template>
  <v-skeleton-loader
    class="mx-auto map-skeleton"
    min-width="300"
    height="525"
    type="image"
  ></v-skeleton-loader>
</template>

<script>
export default {
  name: 'MapSkeleton'
}
</script>

<style >
  .map-skeleton .v-skeleton-loader__image {
    height: inherit;
  }
</style>
