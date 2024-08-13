<template>
  <SearchBar placeholder="Search for movies" />

  <template v-if="appStore.isSearching">
    <SearchResults type="movies" />
  </template>

  <template v-else>
    <h2 class="headline">Movies</h2>

    <section class="container">
      <Card v-for="movie in appStore.getMovies" :movie="movie" :key="movie.title" />
    </section>
  </template>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue'
import { useAppStore } from '@/stores/app'
import SearchResults from '@/components/SearchResults.vue'
import Card from '@/components/Card.vue'

const appStore = useAppStore()
</script>
