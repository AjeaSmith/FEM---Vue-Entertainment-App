<template>
  <template v-if="type === 'trending'">
    <TrendCard :movie="movie" />
  </template>

  <template v-else>
    <MovieCard :movie="movie" />
  </template>
</template>

<script setup>
import TrendCard from './cards/TrendCard.vue'
import MovieCard from './cards/MovieCard.vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    default: 'movie'
  }
})
</script>
