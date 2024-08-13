<template>
  <h2>Found {{ resultCount }} results for '{{ appStore.searchText }}'</h2>

  <section class="result_container">
    <template v-if="type === 'movies'">
      <Card v-for="(movie, index) in appStore.filterMoviesBySearch" :key="index" :movie="movie" />
    </template>

    <template v-else-if="type === 'shows'">
      <Card v-for="(movie, index) in appStore.filterShowBySearch" :key="index" :movie="movie" />
    </template>

    <template v-else-if="type === 'bookmark'">
      <Card v-for="(movie, index) in appStore.filterBookmarkBySearch" :key="index" :movie="movie" />
    </template>

    <template v-else>
      <Card v-for="(movie, index) in appStore.filterContentBySearch" :key="index" :movie="movie" />
    </template>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'
import Card from './Card.vue'
const appStore = useAppStore()

const props = defineProps({
  type: {
    type: String
  }
})

const resultCount = computed(() => {
  if (props.type === 'movies') {
    return appStore.filterMoviesBySearch.length
  } else if (props.type === 'shows') {
    return appStore.filterShowBySearch.length
  } else if (props.type === 'bookmark') {
    return appStore.filterBookmarkBySearch.length
  } else {
    return appStore.filterContentBySearch.length // Default to all content
  }
})
</script>

<style scoped>
h2 {
  font-size: 1.25rem;
  font-weight: var(--font-weight-light);
  letter-spacing: -0.31px;
  margin-bottom: 1.5rem;
}
.result_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
@media (min-width: 800px) {
  h2 {
    font-size: var(--heading-lg);
    letter-spacing: var(--heading-lg-letter-spacing);
  }

  .result_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}
@media (min-width: 1300px) {
  .result_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
}
</style>
