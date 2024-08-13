<template>
  <section class="trend-container">
    <Card
      v-for="movie in appStore.filterMoviesByTrending"
      :movie="movie"
      type="trending"
      :key="movie.title"
    />
  </section>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import Card from './Card.vue'

const appStore = useAppStore()
</script>

<style scoped>
.trend-container {
  padding-right: 1rem;
  padding-bottom: 20px;
  display: flex;
  overflow-x: auto;
  gap: 20px;
}

.trend-container::-webkit-scrollbar {
  height: 8px; /* Adjust scrollbar height */
}

.trend-container::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2); /* Adjust scrollbar color */
  border-radius: 10px;
}

.trend-container::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.4); /* Adjust scrollbar color on hover */
}
</style>
