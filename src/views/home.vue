<template>
  <SearchBar placeholder="Search for movies or TV series" />

  <template v-if="appStore.isSearching">
    <SearchResults />
  </template>

  <template v-else>
    <h2 class="headline">Trending</h2>
    <Trending />

    <h2 class="headline">Recommended</h2>
    <Recommended />
  </template>
</template>

<script setup>
import Recommended from '@/components/Recommended.vue'
import SearchBar from '@/components/SearchBar.vue'
import SearchResults from '@/components/SearchResults.vue'
import Trending from '@/components/Trending.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>
