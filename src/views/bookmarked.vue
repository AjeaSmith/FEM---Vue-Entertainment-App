<template>
  <!-- TODO: fill bookmark svg based on isBookmarked property -->
  <SearchBar placeholder="Search for bookmarked shows" />

  <template v-if="appStore.isSearching">
    <SearchResults type="bookmark" />
  </template>

  <template v-else>
    <h2 class="headline">Bookmarked Movies</h2>

    <section class="container">
      <Card v-for="show in appStore.getBookmarkMovies" :movie="show" :key="show.title" />
    </section>

    <h2 class="headline">Bookmarked TV Series</h2>

    <section class="container">
      <Card v-for="show in appStore.getBookmarkSeries" :movie="show" :key="show.title" />
    </section>
  </template>
</template>

<script setup>
import Card from '@/components/Card.vue';
import SearchBar from '@/components/SearchBar.vue'
import SearchResults from '@/components/SearchResults.vue';
import { useAppStore } from '@/stores/app';
const appStore = useAppStore()
</script>

<style scoped></style>
