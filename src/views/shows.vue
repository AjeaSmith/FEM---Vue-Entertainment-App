<template>
  <SearchBar placeholder="Search for TV series" />

  <template v-if="appStore.isSearching">
    <SearchResults type="shows" />
  </template>

  <template v-else>
    <h2 class="headline">TV Series</h2>

    <section class="container">
      <Card v-for="show in appStore.getShows" :movie="show" :key="show.title" />
    </section>
  </template>
</template>

<script setup>
import Card from '@/components/Card.vue'
import SearchBar from '@/components/SearchBar.vue'
import SearchResults from '@/components/SearchResults.vue'
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()
</script>

<style scoped></style>
